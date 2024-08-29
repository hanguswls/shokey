import { useNavigate, useParams } from "react-router-dom";
import { handleTextareaChange } from "../utils/textareaHandler";
import { useEffect, useRef, useState } from 'react';
import { postApply, putApplication } from '../apis/applyApi';
import { useCookies } from 'react-cookie';
import { postFile } from '../apis/fileApi';

function useApply(initialData = null) {
  const input = useRef();
  const params = useParams();
  const [uploadVideo, setUploadVideo] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookies] = useCookies(['accessToken']);
  const navigate = useNavigate();

  useEffect(() => {
    if (uploadVideo) {
      const objUrl = URL.createObjectURL(uploadVideo);
      setVideoUrl(objUrl);
    }
  }, [uploadVideo])

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.content);
      setVideoUrl(initialData.videoLink);
    }
  }, [initialData]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setUploadVideo(file);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    handleTextareaChange(e);
  }

  const handleAction = async (e, type, applyId = null) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!description.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    if (type === 'submit') {
      const formdata = new FormData();
      formdata.append('file', uploadVideo);

      let uploadedVideoLink;

      try {
        const res = await postFile(formdata, cookies.accessToken);
        uploadedVideoLink = res.data;
      } catch (err) {
        alert(err.message);
        return;
      }

      const applyData = {
        title: title,
        content: description,
        videoLink: uploadedVideoLink
      };

      postApply(applyData, params.postId, cookies.accessToken)
      .then((res) => {
        alert('지원했습니다.');
        navigate('/application' + res.data.apply_id);
      })
      .catch((err) => {
        alert(err.message);
      })
    }
    else if (type === 'update') {
      const formdata = new FormData();
      formdata.append('file', uploadVideo);

      const applyData = {
        title: title,
        content: description,
        videoLink: videoUrl
      };

      putApplication(applyData, applyId, cookies.accessToken)
      .then((res) => {
        alert('수정했습니다.');
        navigate('/application/' + res.data.apply_id);
      })
      .catch((err) => {
        alert(err.message);
      })
    }
  }

  const handleSubmitClick = (e) => handleAction(e, 'submit');
  const handleUpdateClick = (e, applyId) => handleAction(e, 'update', applyId);

  return {
    input,
    handleTitleChange,
    handleFileInputChange,
    handleDescriptionChange,
    handleSubmitClick,
    handleUpdateClick,
    videoUrl
  }
}

export default useApply;
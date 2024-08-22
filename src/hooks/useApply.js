import { useNavigate, useParams } from "react-router-dom";
import { handleTextareaChange } from "../utils/textareaHandler";
import { useEffect, useRef, useState } from 'react';
import { postApply } from '../apis/applyApi';
import { useCookies } from 'react-cookie';
import { postFile } from '../apis/fileApi';

function useApply() {
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

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!description.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    if (!uploadVideo) {
      alert('영상을 추가해주세요.');
      return;
    }

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
        navigate('/post/' + params.postId);
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  return {
    input,
    handleTitleChange,
    handleFileInputChange,
    handleDescriptionChange,
    handleSubmitClick,
    videoUrl
  }
}

export default useApply;
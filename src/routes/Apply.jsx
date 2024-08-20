import './Apply.css';
import { useParams } from "react-router-dom";
import { handleTextareaChange } from "../utils/textareaHandler";
import plusIcon from '../assets/plus_icon.png';
import { useEffect, useRef, useState } from 'react';
import { postApply } from '../apis/applyApi';
import { useCookies } from 'react-cookie';

function Apply() {
  const input = useRef();
  const params = useParams();
  const [uploadVideo, setUploadVideo] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookies] = useCookies(['accessToken']);

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

  const handleSubmitClick = (e) => {
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

    const applyData = {
      title: title,
      content: description,
      videoLink: ""
    };

    postApply(applyData, cookies.accessToken)
      .then((res) => {
        alert('지원했습니다.');
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  return (
    <main className="apply">
      <section className="apply-inner">
        <h1>공고 지원</h1>
        <input type="text" placeholder="제목" onChange={handleTitleChange}/>
        <figure>
          {
            videoUrl ? <video src={videoUrl} controls={true}/> : 
              <div>
                영상을 업로드해주세요.
              </div>
          }
          <button onClick={() => {
            input.current.click();
          }}>
            <img src={plusIcon} alt="plus-icon" />
          </button>
          <input type="file" accept='video/*' ref={input} onChange={handleFileInputChange} />
        </figure>
        <textarea rows={8} placeholder="지원 내용" onChange={handleDescriptionChange}></textarea>
        <button type='submit' onClick={handleSubmitClick}>
          지원하기
        </button>
      </section>
    </main>
  )
}

export default Apply;
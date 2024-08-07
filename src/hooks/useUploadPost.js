import { uploadPost } from '../apis/postApi';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function useUploadPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [endDate, setEndDate] = useState();
  const [price, setPrice] = useState();
  const [extraPrice, setExtraPrice] = useState();
  const [cookies] = useCookies(['accessToken']);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const handleDueDateChange = (e) => {
    setEndDate(e.target.value);
  }

  const handlePriceChange = (e) => {
      setPrice(e.target.value);
  }

  const handleExtraPriceChange = (e) => {
      setExtraPrice(e.target.value);
  }

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    console.log(title);
    console.log(content);
    console.log(endDate);
    console.log(price);
    console.log(extraPrice);

    if (title.trim().length < 0) {
      alert('제목을 입력해주세요.');
      return ;
    }
    if (content.trim().length < 0) {
      alert('내용을 입력해주세요.');
      return ;
    }
    if (!endDate) {
      alert('마감일을 입력해주세요.');
      return ;
    }
    if (!price) {
      alert('계약금을 입력해주세요.');
      return ;
    }
    if (!extraPrice) {
      alert('인센티브 비용을 입력해주세요.');
      return ;
    }

    uploadPost(title, content, price, extraPrice, endDate, cookies.accessToken)
    .then((res) => {
      alert("공고가 등록되었습니다.")
      navigate('/');
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  return {
    handleTitleChange,
    handleContentChange,
    handleDueDateChange,
    handlePriceChange,
    handleExtraPriceChange,
    handleSubmitButtonClick
  }
}

export default useUploadPost
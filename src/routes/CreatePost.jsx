import { useState } from 'react';
import './CreatePost.css';

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [endDate, setEndDate] = useState();
  const [price, setPrice] = useState();
  const [extraPrice, setExtraPrice] = useState();

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
  }

  return (
    <main className="create-post">
      <section className="create-post-inner">
        <h2>공고 등록</h2>
        <input type="text" placeholder="제목" id="title" onChange={handleTitleChange} />
        <textarea name="content" id="content" placeholder="내용" rows={10} onChange={handleContentChange}></textarea>
        <article className="due-date-wrapper">
          <label htmlFor="due-date">마감일</label>
          <input type="date" name="due-date" id="due-date" onChange={handleDueDateChange}/>
        </article>
        <article className="price-wrapper">
          <label htmlFor="price">계약금</label>
          <input type="number" onChange={handlePriceChange} min={0}/>
          <span>원</span>
        </article>
        <article className="price-wrapper">
          <label htmlFor="extra-price">인센티브</label>
          <input type="number" onChange={handleExtraPriceChange} min={0} />
          <span>원</span>
        </article>
        <button id="submit-btn" onClick={handleSubmitButtonClick}>등록하기</button>
      </section>
    </main>
  )
}

export default CreatePost;
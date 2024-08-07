import useUploadPost from '../hooks/useUploadPost';
import './CreatePost.css';

function CreatePost() {
  const {
    handleTitleChange,
    handleContentChange,
    handleDueDateChange,
    handlePriceChange,
    handleExtraPriceChange,
    handleSubmitButtonClick
  } = useUploadPost();

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
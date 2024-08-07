import './CreatePost.css';

function CreatePost() {
  return (
    <main className="create-post">
      <section className="create-post-inner">
        <h2>공고 등록</h2>
        <input type="text" placeholder="제목" id="title" />
        <textarea name="content" id="content" placeholder="내용" rows={10}></textarea>
        <article className="due-date-wrapper">
          <label htmlFor="due-date">마감일</label>
          <input type="date" name="due-date" id="due-date"/>
        </article>
        <article className="price-wrapper">
          <label htmlFor="price">계약금</label>
          <input type="text" />
          <span>원</span>
        </article>
        <article className="price-wrapper">
          <label htmlFor="extra-price">인센티브</label>
          <input type="text" />
          <span>원</span>
        </article>
        <button id="submit-btn">등록하기</button>
      </section>
    </main>
  )
}

export default CreatePost;
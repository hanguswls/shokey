import { useNavigate } from 'react-router-dom';
import usePostDetail from '../hooks/usePostDetail';
import './PostDetail.css';

function PostDetail() {
  const { post } = usePostDetail();
  const navigate = useNavigate();

  return (
    <main className="post-detail">
      <section className="post-detail-contents">
        <article className="title-wrapper">
          <h3>{post?.authorName}</h3>
          <h1>{post?.title}</h1>
        </article>
        <article className="content-wrapper">
          <figure className="post-detail-image">
            <img src={post?.image} alt="" />
          </figure>
          <p className="post-detail-description">
            {post?.content}
          </p>
        </article>
        <article className="post-detail-conditions">
          <ul>
            <li>
              마감일
              <div>
                {post?.endDate}
              </div>
            </li>
            <li>
              인센티브
              <div>
                {Number(post?.extraPrice).toLocaleString()}
                <span>
                  원
                </span>
              </div>
            </li>
            <li>
              계약금
              <div>
                {Number(post?.price).toLocaleString()}
                <span>
                  원
                </span>
              </div>
            </li>
          </ul>
        </article>
        {
          post?.apply ? <>
            <section className="post-detail-contents">
            <h4 className="section-name">링크</h4>
            <input
              className="link"
              type='text'
            />
            </section>
            <section className="post-detail-contents">
              <h4 className="section-name">지원 내용</h4>
              <article className="title-wrapper">
                <h1>{post?.application.title}</h1>
              </article>
              <article className="content-wrapper">
                <figure className="post-detail-image">
                  <video src={post?.application.postImage} alt="" />
                </figure>
              </article>
              <article className="content-wrapper">
                <p className="post-detail-description">{post?.application.postContent}</p>
              </article>
            </section>
          </> :
          <button className="post-detail-apply-btn" onClick={() => { navigate('/apply/' + post?.id) }}>
            지원하기
          </button>
        }
      </section>
    </main>
  )
}

export default PostDetail;
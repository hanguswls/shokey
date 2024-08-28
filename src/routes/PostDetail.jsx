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
            <img src="https://picsum.photos/500/300" alt="" />
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
        <button className="post-detail-apply-btn" onClick={() => { navigate('/apply/' + post?.id) }}>
          지원하기
        </button>
      </section>
    </main>
  )
}

export default PostDetail;
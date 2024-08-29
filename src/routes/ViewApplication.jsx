import { useNavigate, useParams } from "react-router-dom";
import useApplication from "../hooks/useApplication";
import "./PostDetail.css";
import "./Application.css";

function ViewApplication() {
  const { applyId } = useParams();
  const { post, application, hanldeRegisterLinkBtnClick, handleLinkChange } = useApplication(applyId);
  const navigate = useNavigate();

  return (
    <main className="application">
      <section className="post-detail-contents">
        <h4 className="section-name">공고 내용</h4>
        <article className="title-wrapper">
          <h3>{post?.authorName}</h3>
          <h1>{post?.title}</h1>
        </article>
        <article className="content-wrapper">
          <figure className="post-detail-image">
            <img src={post?.image} alt="" />
          </figure>
          <p className="post-detail-description">{post?.content}</p>
        </article>
        <article className="post-detail-conditions">
          <ul>
            <li>
              마감일
              <div>{post?.endDate}</div>
            </li>
            <li>
              인센티브
              <div>
                {Number(post?.extraPrice).toLocaleString()}
                <span>원</span>
              </div>
            </li>
            <li>
              계약금
              <div>
                {Number(post?.price).toLocaleString()}
                <span>원</span>
              </div>
            </li>
          </ul>
        </article>
      </section>
      {application && (
        <>
          <section className="post-detail-contents">
            <h4 className="section-name">지원 내용</h4>
            <article className="title-wrapper">
              <h1>{application?.title}</h1>
            </article>
            <article className="video-wrapper">
              <figure className="post-detail-video">
                <video src={application?.videoLink} controls />
              </figure>
            </article>
            <article className="content-wrapper">
              <p className="post-detail-description">{application?.content}</p>
            </article>
          </section>
        </>
      )}
      {(application?.bidded && !application?.accepted ) && (
        <section className="post-detail-contents">
          <h4 className="section-name">링크</h4>
          <input 
            className="link" 
            type="text" 
            onChange={handleLinkChange}
            />
        </section>
      )}
      <div className="btn-wrapper">
        {application?.bidded ? 
          ( !application?.accepted && 
            <button className="post-detail-apply-btn" onClick={hanldeRegisterLinkBtnClick}>등록하기</button>
          ) : (
          <button className="post-detail-apply-btn"
            onClick={() => { navigate(`/update-application/${application?.apply_id}`); }}
          >
            수정하기
          </button>)
        }
      </div>
    </main>
  );
}

export default ViewApplication;

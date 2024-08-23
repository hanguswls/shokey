import ApplyCard from '../components/card/ApplyCard';
import usePostApplies from '../hooks/usePostApplies';
import usePostDetail from '../hooks/usePostDetail';
import './ApplyList.css';

function ApplyList() {
  const { post } = usePostDetail();
  const { applies } = usePostApplies();

  return (
    <main className="apply-list">
      <section className="applies-inner">
        <h2 className="applies-title">지원 목록</h2>
        <section className="applies-container">
          <section className="applies-sticky-content">
            <section>
              <article className="title-wrapper">
                <h3>{post?.authorName}</h3>
                <h1>{post?.title}</h1>
              </article>
              <article className="content-wrapper">
                <figure className="post-detail-image">
                  <img src="https://picsum.photos/500/300" alt="" />
                </figure>
                <p className="post-detail-description">{post?.content}</p>
              </article>
              <article className="post-detail-conditions">
                <ul>
                  <li>마감일<div>{post?.endDate}</div></li>
                  <li>인센티브<div>{Number(post?.extraPrice).toLocaleString()}<span>원</span></div></li>
                  <li>계약금<div>{Number(post?.price).toLocaleString()}<span>원</span></div></li>
                </ul>
              </article>
            </section>
          </section>
          <section>
            { 
              applies.map((apply, i) => {
                return <ApplyCard
                  key={i} 
                  title={apply.title} 
                  influencerName={apply.influencerName}
                  content={apply.content}
                  videoLink={apply.videoLink} /> })
            }
          </section>
        </section>
      </section>
    </main>
  )
}

export default ApplyList;
import { useParams } from 'react-router-dom';
import './PostDetail.css';

function PostDetail() {
  const params = useParams();
  const description = "도도소미 인스타그램 팔로우후 캠페인 신청을 해주세요~!!   1. 도도소미 인스타그램 팔로우: 도도소미 공식 인스타그램 계정을 팔로우합니다.  2.도도소미 목걸이: 추첨을 통해 도도소미 목걸이를 선물로 드립  3. 태그바이로 꼭 신청을 해주세요!!\n\n'목록'버튼 넣을지말지 고민"

  return (
    <main className="post-detail">
      <section className="post-detail-contents">
        <article className="title-wrapper">
          <h3>도도소미</h3>
          <h1>공고 제목 예시입니다</h1>
        </article>
        <article className="content-wrapper">
          <figure className="post-detail-image">
            <img src="https://picsum.photos/500/300" alt="" />
          </figure>
          <p className="post-detail-description">
            {description}
          </p>
        </article>
        <article className="post-detail-conditions">
          <ul>
            <li>
              마감일
              <div>
                2024-08-16
              </div>
            </li>
            <li>
              인센티브
              <div>
                10,000
                <span>
                  원
                </span>
              </div>
            </li>
            <li>
              계약금
              <div>
                300,000
                <span>
                  원
                </span>
              </div>
            </li>
          </ul>
        </article>
        <button className="post-detail-apply-btn">
          지원하기
        </button>
      </section>
    </main>
  )
}

export default PostDetail;
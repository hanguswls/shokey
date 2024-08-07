import PostCard from '../components/card/PostCard';
import usePostList from '../hooks/usePostList';
import './Posts.css';

function Posts() {
  const {
    postList,
    page,
    setPage,
    totalPages,
    pagingBtn
  } = usePostList();

  return (
    <main className="posts">
      <section className="posts-inner">
        <h2 className="posts-title">공고 둘러보기</h2>
        <section className="posts-container">
          {
            postList.map((item, i) => {
              return (
                <PostCard
                  key={i}
                  num={i}
                  title={item.title}
                  user={item.authorId}
                  content={item.content} />
              )
            })
          }
        </section>
        <div className="posts-page-wrapper">
          <ul className="page-btn-container">
            {
              page >= 5 ? <li className="page-btn" onClick={() => {
                setPage(((Math.floor(page / 5) - 1) * 5) + 4);
              }}>
                &lt;
              </li> : null
            }
            {
              pagingBtn.map((item, i) => {
                console.log(item);
                return (
                  <li className={"page-btn " + (item === page + 1 ? "active" : null)} key={i} onClick={() => {
                    setPage(item - 1);
                  }}>
                    { item }
                  </li>
                )
              })
            }
            {
              totalPages > (Math.floor(page / 5) * 5) + 4 ? <li className="page-btn" onClick={() => {
                setPage((Math.floor(page / 5) + 1) * 5);
              }}>
                &gt;
              </li> : null
            }
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Posts;
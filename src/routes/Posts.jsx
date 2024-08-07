import { useEffect, useState } from 'react';
import PostCard from '../components/card/PostCard';
import './Posts.css';
import { getPostList } from '../apis/postApi';

function Posts() {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pagingBtn, setPagingBtn] = useState([]);

  useEffect(() => {
    getPostList(page, 12, [])
    .then((res) => {
      setPostList(res.data.content);
      setTotalPages(res.data.totalPages);
    })
    .catch((err) => {
      alert(err.message);
    })
  }, [page]);

  useEffect(() => {
    const startPage = (Math.floor(page / 5) * 5) + 1;
    const endPage = (startPage + 4) <= totalPages ? (startPage + 4) : totalPages;
    let pageNums = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNums.push(i);
    }

    console.log(pageNums);
    setPagingBtn(pageNums);
  }, [page, totalPages])

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
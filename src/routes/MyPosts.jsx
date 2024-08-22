import './MyPosts.css';
import PostCard from "../components/card/PostCard";
import useMyPostList from '../hooks/useMyPostList';
import PagingButton from '../components/button/PagingButton/PagingButton';
import { useNavigate } from 'react-router-dom';

function MyPosts() {
  const {
    postList,
    page,
    setPage,
    totalPages,
    pagingBtn
  } = useMyPostList();
  const navigate = useNavigate();

  return (
    <main className="my-posts">
      <section className="posts-inner">
        <h2 className="posts-title">나의 공고 목록</h2>
        <section className="posts-container">
        {
            postList.map((item, i) => {
              return (
                <PostCard
                  clickHandler={() => { navigate('/applies/' + item.id) }}
                  key={i}
                  num={i}
                  id={item.id}
                  title={item.title}
                  user={item.authorName}
                  content={item.content} />
              )
            })
          }
        </section>
        <div className="posts-page-wrapper">
          <PagingButton
            page={page}
            pagingBtn={pagingBtn}
            setPage={setPage}
            totalPages={totalPages} />
        </div>
      </section>
    </main>
  )
}

export default MyPosts;
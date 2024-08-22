import './MyPosts.css';
import PostCard from "../components/card/PostCard";

function MyPosts() {
  return (
    <main className="my-posts">
      <section className="posts-inner">
        <h2 className="posts-title">공고 둘러보기</h2>
        <section className="posts-container">
        <PostCard
          num={1}
          id={54}
          title={"어쩌구"}
          user={"누군가"}
          content={"저쩌구"} />
        <PostCard
          num={1}
          id={54}
          title={"어쩌구"}
          user={"누군가"}
          content={"저쩌구"} />
        <PostCard
          num={1}
          id={54}
          title={"어쩌구"}
          user={"누군가"}
          content={"저쩌구"} />
        </section>
        {/* <div className="posts-page-wrapper">
          <PagingButton
            page={page}
            pagingBtn={pagingBtn}
            setPage={setPage}
            totalPages={totalPages} />
        </div> */}
      </section>
    </main>
  )
}

export default MyPosts;
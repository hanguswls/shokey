import './PostCard.css';

function PostCard(props) {
  const {
    title,
    user,
    content,
    num
  } = props;

  return (
    <article className="post-card">
      <figure className="post-card-image">
        <img src={"https://picsum.photos/500.jpg?random=" + num} alt="post" />
      </figure>
      <h4 className="post-card-title">{ title }</h4>
      <span className="post-card-user">{ user }</span>
      <p className="post-card-content">
        { content }
      </p>
    </article>
  )
}

export default PostCard;
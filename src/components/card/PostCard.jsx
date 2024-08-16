import { useNavigate } from 'react-router-dom';
import './PostCard.css';

function PostCard(props) {
  const navigate = useNavigate();
  const {
    title,
    user,
    content,
    id,
    num
  } = props;

  return (
    <article className="post-card" onClick={() => { navigate('/post/' + id) }}>
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
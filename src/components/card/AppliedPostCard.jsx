import { useNavigate } from "react-router-dom";
import "./AppliedPostCard.css";
import acceptedMark from "/public/accepted_mark.svg";
import biddedMark from "/public/bidded_mark.svg";

function AppliedPostCard(props) {
  const navigate = useNavigate();
  const {
    title,
    user,
    image,
    id,
    bidded,
    accepted
  } = props;

  return (
    <article className="applied-post-card" onClick={() => { navigate('/post/' + id) }}>
      <figure className="applied-post-card-image">
        { image ? (
          <img src={image} alt="post" />
        ) : (
          <div className="no-image" />
        )}
      </figure>
      <h4 className="applied-post-card-title">{ title }</h4>
      <span className="applied-post-card-user">{ user }</span>
      {accepted && (
        <figure className="accepted-mark">
          <img src={acceptedMark} alt="accepted-mark" />
        </figure>
      )}
      {bidded && (
        <figure className="bidded-mark">
          <img src={biddedMark} alt="bidded-mark" />
        </figure>
      )}
    </article>
  );
}

export default AppliedPostCard;

import youtubeIcon from '../../assets/youtube_icon.png';
import badgeIcon from '../../assets/badge_icon.png';
import './InfluencerCard.css';

function InfluencerCard(props) {
  const {
    userName,
    verified,
    profile_image,
    subscribers
  } = props;

  return (
    <article className="influencer">
      <figure className="influencer-image-wrapper">
        <img src={profile_image} alt="influencer-profile" />
      </figure>
      <h4 className="influencer-name">{userName} { verified ? <img src={badgeIcon} alt="badge-icon" /> : null}</h4>
      <span className="influencer-follower">
        <img src={youtubeIcon} alt="youtube-icon" /> {subscribers} followers
      </span>
    </article>
  )
}

export default InfluencerCard;
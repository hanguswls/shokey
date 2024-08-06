import youtubeIcon from '../../assets/youtube_icon.png';
import testImg from '../../assets/test.png';
import badgeIcon from '../../assets/badge_icon.png';
import './InfluencerCard.css';

function InfluencerCard() {
  return (
    <article className="influencer">
      <figure className="influencer-image-wrapper">
        <img src={testImg} alt="influencer-profile" />
      </figure>
      <h4 className="influencer-name">쪽집게 강사 <img src={badgeIcon} alt="badge-icon" /></h4>
      <span className="influencer-follower">
        <img src={youtubeIcon} alt="youtube-icon" /> 1.4K followers
      </span>
    </article>
  )
}

export default InfluencerCard;
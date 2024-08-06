import youtubeIcon from '../../assets/youtube_icon.png';
import testImg from '../../assets/test.png';

function InfluencerCard() {
  return (
    <article className="influencer">
      <figure className="influencer-image-wrapper">
        <img src={testImg} alt="influencer-profile" />
      </figure>
      <h3 className="influencer-name"></h3>
      <span className="influencer-follower">
        <img src={youtubeIcon} alt="youtube-icon" /> 1.4K
      </span>
    </article>
  )
}

export default InfluencerCard;
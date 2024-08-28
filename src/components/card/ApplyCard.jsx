import './ApplyCard.css';
import { useCookies } from "react-cookie";
import { acceptBidApi, registerBidApi } from "../../apis/bidApi";
import approveTag from '/src/assets/approved_tag.svg';
import biddedTag from '/src/assets/bidded_tag.svg';

function ApplyCard(props) {
  const [ cookies ] = useCookies(['accessToken']);
  const {
    applyId,
    title,
    influencerName,
    content,
    videoLink,
    createdAt,
    updateAppliesData,
    shortsId,
    accepted,
    bidded
  } = props;

  const handleClickBidButton = async () => {
    try {
      await registerBidApi(applyId, cookies.accessToken);
      alert('입찰 등록되었습니다.');
      updateAppliesData();
    }
    catch (err) { alert(err.message) }
  }

  const handleClickAcceptButton = async () => {
    try {
      await acceptBidApi(applyId, cookies.accessToken);
      alert('최종 승인되었습니다.');
      updateAppliesData();
    }
    catch (err) { alert(err.message) }
  }

  return (
    <article className="apply-card">
      { accepted || bidded ? <img className="apply-tag" src={accepted ? approveTag : biddedTag} alt="tag" /> : null }
      <figure>
        <video src={ videoLink } controls={true}/>
      </figure>
      <span>{ createdAt }</span>
      <h3>{ title }</h3>
      <span>{ influencerName }</span>
      <p>{ content }</p>
      <div>
        {
          bidded ? <button onClick={handleClickAcceptButton}>승인하기</button> : 
          <button onClick={handleClickBidButton}>입찰하기</button>
        }
      </div>
    </article>
  )
}

export default ApplyCard;
import { useCookies } from "react-cookie";
import { registerBidApi } from "../../apis/bidApi";

function ApplyCard(props) {
  const [ cookies ] = useCookies(['accessToken']);
  const {
    applyId,
    title,
    influencerName,
    content,
    videoLink,
    createdAt,
    updateAppliesData
  } = props;

  const handleClickBidButton = async () => {
    try {
      await registerBidApi(applyId, cookies.accessToken);
      alert('입찰 등록되었습니다.');
      updateAppliesData();
    }
    catch (err) { alert(err.message); }
  }

  return (
    <article className="apply-card">
      <figure>
        <video src={ videoLink } controls={true}/>
      </figure>
      <span>{ createdAt }</span>
      <h3>{ title }</h3>
      <span>{ influencerName }</span>
      <p>{ content }</p>
      <div>
        <button onClick={handleClickBidButton}>입찰하기</button>
      </div>
    </article>
  )
}

export default ApplyCard;
import './ApplyCard.css';
import { useCookies } from "react-cookie";
import { acceptBidApi, registerBidApi } from "../../apis/bidApi";
import approveTag from '/src/assets/approved_tag.svg';
import biddedTag from '/src/assets/bidded_tag.svg';
import { useEffect, useState } from 'react';
import { getVideoInfoListWithId } from '../../apis/youtubeApi';

function ApplyCard(props) {
  const [ cookies ] = useCookies(['accessToken']);
  const [ viewCount, setViewCount ] = useState();
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

  const getVideoInfoFromServer = async () => {
    // shortID나 토큰이 없으면 실행 종료
    if (!shortsId || !cookies.accessToken) return ;

    try {
      const res = await getVideoInfoListWithId(shortsId);
      const viewCountData = res.items[0].statistics.viewCount;
      setViewCount(viewCountData);
    }
    catch (err) { alert(err.message) }
  }

  useEffect(() => {
    getVideoInfoFromServer();
  }, [shortsId])

  return (
    <article className="apply-card">
      { accepted || bidded ? <img className="apply-tag" src={accepted ? approveTag : biddedTag} alt="tag" /> : null }
      <figure>
        {
          shortsId ? <iframe src={"//www.youtube.com/embed/" + shortsId}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            /> :
            <video src={ videoLink } controls={true}/>
        }
      </figure>
      <span>{ createdAt }</span>
      <h3>{ title }</h3>
      <span>{ influencerName }</span>
      { viewCount ? <span>{ viewCount }회 시청</span> : null } 
      <p>{ content }</p>
      <div>
        {
          bidded && !accepted ? <button onClick={handleClickAcceptButton}>승인하기</button> :
          !bidded && !accepted ? <button onClick={handleClickBidButton}>입찰하기</button> :
          null
        }
      </div>
    </article>
  )
}

export default ApplyCard;
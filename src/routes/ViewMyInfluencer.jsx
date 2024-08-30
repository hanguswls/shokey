import './Influencer.css';
import './ViewMyInfluencer.css';
import useMyInfluencer from '../hooks/useMyInfluencer';
import useMyUser from '../hooks/useMyUser';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import AppliedPostCard from '../components/card/AppliedPostCard';
import useMyApplyList from '../hooks/useMyApplyList';

function ViewMyInfluencer() {
  const navigate = useNavigate();
  const { user } = useMyUser();
  const { myInfluencer } = useMyInfluencer(user?.influencerId);
  const { filteredApplyList, handleApplyListFilterChange } = useMyApplyList(user?.influencerId);

  useEffect(() => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
    else if (!user?.userRole) {
      alert('인플루언서 등록을 해주세요');
      navigate('/register-influencer');
    }
  }, [])

  return (
    <main className='influencer-container'>
      <section className='influencer-info-container'>
        <section className='profile-image-section'>
          <figure className='profile-image'>
            {myInfluencer?.profile_image && (
              <img src={myInfluencer.profile_image} alt='profile' />
            )}
          </figure>
          <span className='influencer-user-name'>
            {myInfluencer?.userInfo.userName}
          </span>
        </section>
        <section className='influencer-fields'>
          <div className='influencer-field'>
            <div className='influencer-field-name'>채널 ID</div>
            <div className='influencer-field-value'>{myInfluencer?.channelId}</div>
          </div>
          <div className='influencer-field'>
            <div className='influencer-field-name'>구독자 수</div>
            <div className='influencer-field-value'>{myInfluencer?.subscribers}</div>
          </div>
          <div className='influencer-field'>
            <div className='influencer-field-name'>분야</div>
            <div className='influencer-field-value'>{myInfluencer?.niche}</div>
          </div>
        </section>
        <Link to={'/update-influencer'} className='link-to-update'>수정하기</Link>
      </section>
      <section className='influencer-applied-list'>
        <div className='label-filter'>
          <span>지원한 공고 목록</span>
          <select className='filter-options' onChange={handleApplyListFilterChange}>
            <option value="all">전체 공고</option>
            <option value="bidded">입찰된 공고</option>
            <option value="accepted">승인된 공고</option>
          </select>
        </div>
        <div className='applied-posts-container'>
            {
              filteredApplyList?.map((item, i) => {
                return (
                  <AppliedPostCard
                    key={i}
                    id={item.apply_id}
                    title={item.postTitle}
                    image={item.postImage}
                    user={item.advertiserName}
                    bidded={item.bidded}
                    accepted={item.accepted}/>
                )
              })
            }
        </div>
      </section>
    </main>
  )
}

export default ViewMyInfluencer;
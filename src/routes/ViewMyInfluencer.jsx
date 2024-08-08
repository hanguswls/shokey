import './Influencer.css';
import useMyInfluencer from '../hooks/useMyInfluencer';
import useMyUserInfo from '../hooks/useMyUserInfo';

function ViewMyInfluencer() {
  const {myInfluencer, handleNavigateToUpdate, handleNavigateToRegister} = useMyInfluencer();
  const { myUserInfo } = useMyUserInfo();

  return (
    <main className='influencer-container'>
      <h1 className='influencer-title'>인플루언서 정보</h1>
      <section className='profile-image-section'>
        <figure className='profile-image'>
          {myInfluencer.profile_image && (
            <img src={myInfluencer.profile_image} alt='profile' />
          )}
        </figure>
      </section>
      <section className='influencer-fields'>
        <div className='influencer-field'>
          <div className='influencer-field-name'>채널 ID</div>
          <div className='influencer-field-value'>{myInfluencer.channelId}</div>
        </div>
        <div className='influencer-field'>
          <div className='influencer-field-name'>구독자 수</div>
          <div className='influencer-field-value'>{myInfluencer.subscribers}</div>
        </div>
        <div className='influencer-field'>
          <div className='influencer-field-name'>분야</div>
          <div className='influencer-field-value'>{myInfluencer.niche}</div>
        </div>
      </section>
      {
        (myUserInfo.userRole === 1) ?
          <button onClick={handleNavigateToUpdate} className='navigate-btn'>수정하기</button>
        : <button onClick={handleNavigateToRegister} className='navigate-btn'>등록하기</button>
      }
    </main>
  );
}

export default ViewMyInfluencer;
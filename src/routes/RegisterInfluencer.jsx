import './Influencer.css';
import useMyInfluencer from '../hooks/useMyInfluencer';

function RegisterInfluencer() {
  const {
    handleChannelIdChange,
    handleSubscribersChange,
    handleNicheChange,
    handleProfileImageChange,
    handleRegisterInfluencer,
    myInfluencer,
  } = useMyInfluencer();

  return (
    <main className='influencer-container'>
      <h1 className='influencer-title'>인플루언서 등록</h1>
      <section className='profile-upload'>
        <figure className='profile-image'>
          {myInfluencer.profile_image && (
            <img src={myInfluencer.profile_image} alt='profile preview' />
          )}
        </figure>
        <div className='filebox'>
          <input className='influencer-field-input'
            value={myInfluencer.profile_image ? myInfluencer.profile_image : '첨부파일'}
            readOnly />
          <label htmlFor='file'>파일 선택</label>
          <input
            type='file'
            onChange={handleProfileImageChange}
            id='file'
          />
        </div>
      </section>
      <section className='influencer-fields'>
        <div className='influencer-field'>
          <label htmlFor='channelId' className='influencer-field-name'>채널 ID</label>
          <input
            id='channelId'
            className='influencer-field-input'
            placeholder='채널 ID'
            onChange={handleChannelIdChange}
          />
        </div>
        <div className='influencer-field'>
          <label htmlFor='subscribers' className='influencer-field-name'>구독자 수</label>
          <input
            id='subscribers'
            className='influencer-field-input'
            placeholder='구독자 수'
            type='number'
            min={0}
            onChange={handleSubscribersChange}
          />
        </div>
        <div className='influencer-field'>
          <label htmlFor='niche' className='influencer-field-name'>분야</label>
          <select
            id='niche'
            className='influencer-field-select'
            onChange={handleNicheChange}
            required
          >
            <option value=''>분야 선택</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
        </div>
      </section>
      <button onClick={handleRegisterInfluencer} className='register-btn'>인플루언서 등록하기</button>
    </main>
  );
}

export default RegisterInfluencer;
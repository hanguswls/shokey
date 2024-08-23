import './Influencer.css';
import useInfluencer from '../hooks/useInfluencer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ViewInfluencer() {
  const { id } = useParams();
  const { influencer }= useInfluencer(id);
  const navigate = useNavigate();

  useEffect(()=> {
    if (!influencer) {
      alert('존재하지 않는 사용자입니다.');
      navigate('/');
    }
  }, []);

  return (
    <main className='influencer-container'>
      <h1 className='influencer-title'>인플루언서 정보</h1>
      <section className='profile-image-section'>
        <figure className='profile-image'>
          {influencer?.profile_image && (
            <img src={influencer.profile_image} />
          )}
        </figure>
      </section>
      <section className='influencer-fields'>
        <div className='influencer-field'>
          <div className='influencer-field-name'>채널 ID</div>
          <div className='influencer-field-value'>{influencer?.channelId}</div>
        </div>
        <div className='influencer-field'>
          <div className='influencer-field-name'>구독자 수</div>
          <div className='influencer-field-value'>{influencer?.subscribers}</div>
        </div>
        <div className='influencer-field'>
          <div className='influencer-field-name'>분야</div>
          <div className='influencer-field-value'>{influencer?.niche}</div>
        </div>
      </section>
    </main>
  );
}

export default ViewInfluencer;
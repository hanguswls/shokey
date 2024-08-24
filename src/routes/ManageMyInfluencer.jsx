import "./Influencer.css";
import useMyUser from "../hooks/useMyUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useManageMyInfluencer from "../hooks/useManageMyInfluencer";
import useMyInfluencer from "../hooks/useMyInfluencer";

function ManageMyInfluencer({ mode }) {
  const {
    influencerInput,
    handleInfluencerChange,
    handleProfileImageChange,
    handleSubmit
  } = useManageMyInfluencer(mode);
  const { niches } = useMyInfluencer();
  const { user } = useMyUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
    else if (mode === "register" && user?.userRole) {
      alert('인플루언서로 등록된 사용자입니다.');
      navigate('/my-influencer');
    }
    else if (mode === "update" && !user?.userRole) {
      alert('인플루언서 등록을 해주세요.');
      navigate('/register-influencer');
    }
  }, []);

  return (
    <main className="influencer-container">
      <form onSubmit={handleSubmit}>
        <section className="profile-upload">
          <figure className="profile-image">
            {influencerInput?.profile_image && (
              <img src={influencerInput?.profile_image} alt="profile preview" />
            )}
          </figure>
          <div className="filebox">
            <label htmlFor="file">파일 선택</label>
            <input
              id="file"
              name="file"
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
            />
          </div>
        </section>
        <section className="influencer-fields">
          <div className="influencer-field">
            <label htmlFor="channelId" className="influencer-field-name">채널 ID</label>
            <input
              id="channelId"
              name="channelId"
              className="influencer-field-input"
              value={influencerInput?.channelId || ''}
              placeholder="채널 ID"
              onChange={handleInfluencerChange}
              required
            />
          </div>
          <div className="influencer-field">
            <label htmlFor="subscribers" className="influencer-field-name">구독자 수</label>
            <input
              id="subscribers"
              name="subscribers"
              className="influencer-field-input"
              value={influencerInput?.subscribers || ''}
              placeholder="구독자 수"
              type="number"
              min={0}
              onChange={handleInfluencerChange}
              required
            />
          </div>
          <div className="influencer-field">
            <label htmlFor="niche" className="influencer-field-name">분야</label>
            <select
              id="niche"
              name="niche"
              className="influencer-field-select"
              onChange={handleInfluencerChange}
              value={influencerInput?.niche || ''}
              required
            >
              <option value="">분야 선택</option>
              {niches.map((niche, idx) => (
                <option value={niche} key={idx}>{ niche }</option>
              ))}
            </select>
          </div>
        </section>
        <button type="submit" className="manage-btn">
          { mode === "register" && "등록하기"}
          { mode === "update" && "수정 완료"}
        </button>
      </form>
    </main>
  );
}

export default ManageMyInfluencer;

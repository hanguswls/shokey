import { useState, useEffect } from "react";
import { getInfluencer, postInfluencer, patchInfluencer} from "../apis/influencerApi";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import { useCookies } from "react-cookie";

function useMyInfluencer() {
  const [cookies] = useCookies(['accessToken']);
  const [initialInfluencer, setInitialInfluencer] = useState({});
  const [myInfluencer, setMyInfluencer] = useState({
    channelId: "",
    subscribers: "",
    niche: "",
    profile_image: null,
  });
  const navigate = useNavigate();
  const myInfluencerId = useUserStore(state => state.influencerId);

  useEffect(() => {
    if (cookies.accessToken && myInfluencerId) {
      fetchMyInfluencer();
    }
  }, [cookies, myInfluencerId]);

  const fetchMyInfluencer = async() => {
    try {
      const res = await getInfluencer(myInfluencerId);
      setMyInfluencer(res.data);
      setInitialInfluencer(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChannelIdChange = (e) => {
    setMyInfluencer(prev => ({ ...prev, channelId: e.target.value }));
  };

  const handleSubscribersChange = (e) => {
    setMyInfluencer(prev => ({ ...prev, subscribers: e.target.value }));
  };

  const handleNicheChange = (e) => {
    const value = e.target.value;
    const nicheValue = (value === '' ? null : Number(value));
    setMyInfluencer(prev => ({ ...prev, niche: nicheValue }));
  };

  // 이미지 파일 업로드하는 과정은 수정 필요
  const handleProfileImageChange = (e) => {
    myInfluencer.profile_image = 'https://picsum.photos/500.jpg?random';
    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setMyInfluencer(prev => ({ ...prev, profile_image: reader.result }));
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const handleUpdateInfluencer = async () => {
    const changedData = Object.keys(myInfluencer).reduce((acc, key) => {
      if (myInfluencer[key] !== initialInfluencer[key]) {
        acc[key] = myInfluencer[key];
      }
      return acc;
    }, {});

    try {
      await patchInfluencer(changedData, cookies.accessToken, myInfluencerId);
      navigate(`/my-influencer`);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNavigateToUpdate = () => {
    navigate("/update-influencer");
  }

  const handleNavigateToRegister = () => {
    navigate("/register-influencer");
  }

  const handleRegisterInfluencer = async (e) => {
    e.preventDefault();

    if (!myInfluencer.channelId.trim()) {
      alert("채널 ID를 입력해주세요.");
      return;
    }
    if (!myInfluencer.subscribers) {
      alert("구독자 수를 입력해주세요.");
      return;
    }
    if (!myInfluencer.niche) {
      alert("분야를 입력해주세요.");
      return;
    }

    try {
      await postInfluencer(myInfluencer, cookies.accessToken);
      navigate(`/my-influencer`);
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    myInfluencer,
    handleNavigateToUpdate,
    handleNavigateToRegister,
    handleChannelIdChange,
    handleSubscribersChange,
    handleNicheChange,
    handleProfileImageChange,
    handleUpdateInfluencer,
    handleRegisterInfluencer,
  };
};

export default useMyInfluencer;
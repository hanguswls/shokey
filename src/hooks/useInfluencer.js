import { useState, useEffect } from "react";
import { getInfluencer } from "../apis/influencerApi";

function useInfluencer(influencerId) {
  const [influencer, setInfluencer] = useState({
    channelId: "",
    subscribers: "",
    niche: "",
    profile_image: null,
  });

  useEffect (() => {
    if (influencerId) {
      fetchInfluencer();
    }
  }, [influencerId]);

  const fetchInfluencer = async() => {
    try {
      const res = await getInfluencer(influencerId);
      setInfluencer(res.data);
    } catch (error) {
      alert(error.message);
    }
  }

  return {
    influencer
  };
};

export default useInfluencer;
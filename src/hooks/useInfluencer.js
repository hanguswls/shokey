import { useState, useEffect } from "react";
import { getInfluencer } from "../apis/influencerApi";

function useInfluencer(influencerId) {
  const [influencer, setInfluencer] = useState();

  const fetchInfluencer = async() => {
    try {
      const res = await getInfluencer(influencerId);
      setInfluencer(res.data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect (() => {
    if (influencerId) {
      fetchInfluencer();
    }
  }, [influencerId]);

  return {
    influencer
  };
};

export default useInfluencer;
import { useState, useEffect } from "react";
import { getInfluencer, getNiches } from "../apis/influencerApi";

function useMyInfluencer(influencerId) {
  const [myInfluencer, setMyInfluencer] = useState(null);
  const [niches, setNiches] = useState([]);

  const fetchMyInfluencer = async() => {
    try {
      const res = await getInfluencer(influencerId);
      setMyInfluencer(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchNiches = async() => {
    try {
      const res = await getNiches();
      setNiches(res.data);
    } catch(error) {
      alert(error.message);
    }
  }

  const fetchData = async() => {
    await Promise.all([
      fetchMyInfluencer(),
      fetchNiches(),
    ])
  }

  useEffect(() => {
    if (influencerId) {
      fetchData();
    }
  }, [influencerId]);

  return {
    myInfluencer,
    niches,
  };
};

export default useMyInfluencer;
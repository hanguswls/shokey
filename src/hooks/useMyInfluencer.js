import { useState, useEffect } from "react";
import { getInfluencer, getNiches } from "../apis/influencerApi";
import useMyUser from "./useMyUser";

function useMyInfluencer() {
  const { user } = useMyUser();
  const influencerId = user?.influencerId;
  const [myInfluencer, setMyInfluencer] = useState(null);
  const [niches, setNiches] = useState([]);

  useEffect(() => {
    const fetchMyInfluencer = async() => {
      try {
        if (influencerId) {
          const res = await getInfluencer(influencerId);
          setMyInfluencer(res.data);
        }
      }
      catch (error) { alert(error.message); }
    };

    if (user) fetchMyInfluencer()
  }, [user]);

  useEffect(() => {
    const fetchNiches = async() => {
      try {
        const res = await getNiches();
        setNiches(res.data);
      }
      catch (error) { alert(error.message); }
    }

    fetchNiches()
  }, [])

  return {
    myInfluencer,
    niches,
  };
};

export default useMyInfluencer;
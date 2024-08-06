import { useEffect, useState } from "react";
import { getInfluencerList } from "../apis/influencerApi";

function useInfluencerList() {
  const [influencerList, setInfluencerList] = useState([]);

  useEffect(() => {
    getInfluencerList(0, 12, [])
    .then((res) => {
      setInfluencerList(res.data.content);
    })
    .catch((error) => {
      alert(error.message);
    })
  }, [])

  return { influencerList };
}

export default useInfluencerList;
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { getAppliesWithPostId } from "../apis/applyApi";

function usePostApplies() {
  const { id } = useParams();
  const [ cookies ] = useCookies(['accessToken']);
  const [ applies, setApplies ] = useState([]);

  const getApplyDataFromServer = async () => {
    if (id && cookies.accessToken) {
      try {
        const res = await getAppliesWithPostId(id, cookies.accessToken);
        setApplies(res.data);
      }
      catch (err) {
        alert(err.message);
      }
    }
  }

  useState(() => {
    getApplyDataFromServer();
  }, [cookies, id]);

  return { applies };
}

export default usePostApplies;
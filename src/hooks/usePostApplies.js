import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { getAppliesWithPostId } from "../apis/applyApi";

function usePostApplies() {
  const { id } = useParams();
  const [ cookies ] = useCookies(['accessToken']);
  const [ applies, setApplies ] = useState([]);
  const [ filters, setFilters ] = useState([]);

  const getApplyDataFromServer = async () => {
    if (id && cookies.accessToken) {
      try {
        const res = await getAppliesWithPostId(id, filters, cookies.accessToken);
        setApplies(res.data);
      }
      catch (err) { alert(err.message); }
    }
  }

  const handleFilterCheck = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.value]);
      return ;
    }
    setFilters(filters.filter((item) => (item !== e.target.value)));
  }

  useEffect(() => {
    getApplyDataFromServer();
  }, [cookies, id, filters]);

  return { applies, getApplyDataFromServer, filters, handleFilterCheck };
}

export default usePostApplies;
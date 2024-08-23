import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { getMyApplyList } from "../apis/applyApi";

function useMyApplyList(influencerId) {
  const [cookies] = useCookies(['accessToken']);
  const [myApplyList, setMyApplyList] = useState([]);
  const [filteredApplyList, setFilteredApplyList] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchApplyList = async() => {
    try {
      const res = await getMyApplyList(cookies.accessToken);
      setMyApplyList(res.data);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleApplyListFilterChange = (e) => {
    setFilter(e.target.value);
  }

  useEffect(() => {
    if (influencerId) {
      fetchApplyList()
    }
  }, [influencerId]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredApplyList(myApplyList);
    } else if (filter === "accepted") {
      setFilteredApplyList(myApplyList.filter(apply => apply.accepted));
    } else if (filter === "bidded") {
      setFilteredApplyList(myApplyList.filter(apply => apply.bidded));
    }
  }, [filter, myApplyList]);

  return {
    filteredApplyList,
    handleApplyListFilterChange
  };
};

export default useMyApplyList;
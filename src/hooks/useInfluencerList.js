import { useEffect, useState } from "react";
import { getInfluencerList, getNiches } from "../apis/influencerApi";

function useInfluencerList() {
  const [influencerList, setInfluencerList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pagingBtn, setPagingBtn] = useState([]);
  const [niches, setNiches] = useState([]);
  const [checkedNiches, setCheckedNiches] = useState([]);

  const updateNichesFromServer = async () => {
    try {
      const res = await getNiches();
      setNiches(res.data);
    } catch (err) {
      alert(err.message);
    }
  }

  const handleNichesCheck = (e) => {
    if (e.target.checked) {
      setCheckedNiches([...checkedNiches, e.target.value]);
    } else {
      setCheckedNiches(checkedNiches.filter((niche) => niche !== e.target.value));
    }
    setPage(0);
  }

  useEffect(() => {
    getInfluencerList(page, 12, [], checkedNiches)
    .then((res) => {
      setInfluencerList(res.data.content);
      setTotalPages(res.data.totalPages);
    })
    .catch((error) => {
      alert(error.message);
    })
  }, [page, checkedNiches]);

  useEffect(() => {
    const startPage = (Math.floor(page / 5) * 5) + 1;
    const endPage = (startPage + 4) <= totalPages ? (startPage + 4) : totalPages;
    let pageNums = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNums.push(i);
    }

    setPagingBtn(pageNums);
  }, [page, totalPages]);

  useEffect(() => {
    updateNichesFromServer();
  }, [])

  return { 
    influencerList,
    page,
    setPage,
    totalPages,
    pagingBtn,
    niches,
    handleNichesCheck
  };
}

export default useInfluencerList;
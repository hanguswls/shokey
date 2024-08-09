import { useEffect, useState } from "react";
import { getInfluencerList } from "../apis/influencerApi";

function useInfluencerList() {
  const [influencerList, setInfluencerList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pagingBtn, setPagingBtn] = useState([]);

  useEffect(() => {
    getInfluencerList(page, 12, [])
    .then((res) => {
      setInfluencerList(res.data.content);
      setTotalPages(res.data.totalPages);
    })
    .catch((error) => {
      alert(error.message);
    })
  }, [page]);

  useEffect(() => {
    const startPage = (Math.floor(page / 5) * 5) + 1;
    const endPage = (startPage + 4) <= totalPages ? (startPage + 4) : totalPages;
    let pageNums = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNums.push(i);
    }

    setPagingBtn(pageNums);
  }, [page, totalPages]);

  return { 
    influencerList,
    page,
    setPage,
    totalPages,
    pagingBtn
  };
}

export default useInfluencerList;
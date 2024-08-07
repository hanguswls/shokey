import { useEffect, useState } from 'react';
import { getPostList } from '../apis/postApi';

function usePostList() {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pagingBtn, setPagingBtn] = useState([]);

  useEffect(() => {
    getPostList(page, 12, [])
    .then((res) => {
      setPostList(res.data.content);
      setTotalPages(res.data.totalPages);
    })
    .catch((err) => {
      alert(err.message);
    })
  }, [page]);

  useEffect(() => {
    const startPage = (Math.floor(page / 5) * 5) + 1;
    const endPage = (startPage + 4) <= totalPages ? (startPage + 4) : totalPages;
    let pageNums = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNums.push(i);
    }

    console.log(pageNums);
    setPagingBtn(pageNums);
  }, [page, totalPages]);

  return {
    postList,
    page,
    setPage,
    totalPages,
    pagingBtn
  }
}

export default usePostList;
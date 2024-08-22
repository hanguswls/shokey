import { useEffect, useState } from 'react';
import { getMyPostList } from '../apis/postApi';
import { useCookies } from 'react-cookie';

function useMyPostList() {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pagingBtn, setPagingBtn] = useState([]);
  const [ cookies ] = useCookies(['accessToken']);

  useEffect(() => {
    getMyPostList(page, 12, [], cookies.accessToken)
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

export default useMyPostList
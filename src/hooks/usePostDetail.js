import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '../apis/postApi';

function usePostDetail() {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(params.id)
    .then((res) => {
      setPost(res.data);
    })
    .catch((err) => {
      alert(err.message);
    })
  }, [params])

  return { post };
}

export default usePostDetail;
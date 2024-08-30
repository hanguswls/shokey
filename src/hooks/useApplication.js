import { useCookies } from 'react-cookie';
import { getApplication, patchShorts } from '../apis/applyApi';
import { getPost } from '../apis/postApi';
import { useEffect, useState } from 'react';

function useApplication(applyId) {
  const [application, setApplication] = useState(null);
  const [post, setPost] = useState(null);
  const [cookies] = useCookies(['accessToken']);
  const [link, setLink] = useState(null);

  const loadApplication = async () => {
    try {
      const res = await getApplication(applyId, cookies.accessToken);
      setApplication(res.data);
      return res.data.post_id;
    }
    catch (error) { alert(error.message) };
  }

  const loadPost = async (postId) => {
    try {
      const res = await getPost(postId);
      setPost(res.data);
    }
    catch (error) { alert(error.message); }
  }

  const loadData = async () => {
    const postId = await loadApplication();
    await loadPost(postId);

    if (application.shortsId) {
      setLink(application.shortsId);
    }
  }

  useEffect(() => {
    if (applyId) {
      loadData();
    }
  }, [applyId]);

  const handleRegisterLinkBtnClick = async () => {
    const shortsData = { shortsId: link };
    try {
      await patchShorts(shortsData, applyId, cookies.accessToken); 
      alert('링크가 등록되었습니다');
    }
    catch (error) { alert(error.message); }
  }

  const handleLinkChange = (e) => setLink(e.target.value);

  return {
    post,
    link,
    application,
    handleRegisterLinkBtnClick,
    handleLinkChange,
  }
}

export default useApplication;
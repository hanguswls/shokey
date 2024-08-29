import { useCookies } from 'react-cookie';
import { getApplication, postShorts } from '../apis/applyApi';
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
  }

  useEffect(() => {
    if (applyId) {
      loadData();
    }
  }, [applyId]);

  const handleRegisterLinkBtnClick = async (e) => {
    try { await postShorts(link, applyId, cookies.accessToken); }
    catch (error) { alert(error.message); }
  }

  const handleUpdateLinkBtnClick = async (e) => { }

  const handleLinkChange = (e) => setLink(e.target.value);

  return {
    post,
    application,
    handleRegisterLinkBtnClick,
    handleUpdateLinkBtnClick,
    handleLinkChange,
  }
}

export default useApplication;
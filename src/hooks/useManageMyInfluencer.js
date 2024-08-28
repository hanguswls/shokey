import { useState, useEffect } from "react";
import { postInfluencer, putInfluencer } from "../apis/influencerApi";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useMyInfluencer from "./useMyInfluencer";
import { postFile } from "../apis/fileApi";
import useMyUser from "./useMyUser";

/**
 * 인플루언서 등록, 수정 기능
 * - 등록/수정 과정에서는 influencerInput에 임시로 프리뷰 이미지를 넣어둠
 * - 등록/수정 버튼 클릭시, 실제 S3에 업로드한 이미지 링크를 전송함
 */
function useManageMyInfluencer(mode) {
  const [cookies] = useCookies(['accessToken']);
  const navigate = useNavigate();
  const { fetchUser } = useMyUser();
  const { myInfluencer } = useMyInfluencer();
  const [influencerInput, setInfluencerInput] = useState(null);
  const [newProfileImage, setNewProfileImage] = useState(null);

  useEffect(() => {
    if (myInfluencer && !influencerInput) {
      setInfluencerInput({...myInfluencer});
    }
  }, [myInfluencer]);

  const handleInfluencerChange = (e) =>{
    const { name, value } = e.target;
    setInfluencerInput(prev => ({ ...prev, [name]: value }));
  }

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setNewProfileImage(file);
    const preview = URL.createObjectURL(file);
    setInfluencerInput(prev => ({...prev, profile_image: preview}));
  };

  const uploadProfileImage = async() => {
    const formData = new FormData();
    formData.append('file', newProfileImage);
    try {
      const res = await postFile(formData, cookies.accessToken);
      return res.data;
    }
    catch (error) { alert(error.message); }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!influencerInput?.profile_image) {
      alert('프로필 이미지를 선택해주세요');
      return;
    }

    try {
      let updatedInfluencer = {...influencerInput};
      if (newProfileImage) {
        const imageUrl = await uploadProfileImage();
        if (imageUrl) updatedInfluencer.profile_image = imageUrl;
      }

      if (mode === 'register') {
        await postInfluencer(updatedInfluencer, cookies.accessToken);
      } else if (mode === 'update') {
        await putInfluencer(updatedInfluencer, cookies.accessToken, myInfluencer.userInfo.influencerId);
      }

      await fetchUser();
      navigate(`/my-influencer`);
    }
    catch (error) { alert(error.message); }
  };


  return ({
    influencerInput,
    handleInfluencerChange,
    handleProfileImageChange,
    handleSubmit,
  });
}

export default useManageMyInfluencer;
const postApply = async (applyData, postId, token) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/applies?post_id=' + postId, {
    method: 'POST',
    headers: {
      'authorization': 'Bearer ' + token,
      'content-type': 'application/json'
    },
    body: JSON.stringify(applyData)
  });

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

const getMyApplyList = async (accessToken) => {
	const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/applies/my', {
	  method: 'GET',
	  credentials: 'include',
	  headers : {
		'Authorization': `Bearer ${accessToken}`
	  },
	});

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

const getApplyList = async (influencerId) => {
	const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/applies/${influencerId}`, {
	  method: 'GET',
	});

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

export {
  postApply,
  getMyApplyList,
  getApplyList,
};
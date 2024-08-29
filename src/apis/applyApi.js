const getAppliesWithPostId = async (postId, filterOptions, token) => {
  let filterStr = "";
  if (filterOptions.length > 0) {
    filterOptions.forEach(item => {
      filterStr += `&kinds=${item}`;
    });
  }

  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/posts/${postId}/applies${filterStr.length > 0 ? '?' : ''}${filterStr}`, {
    headers: {
      'authorization': 'Bearer ' + token
    }
  });

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

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

const getApplication = async (applyId, accessToken) => {
	const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/applies/${applyId}`, {
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

const patchShorts = async (shortsData, applyId, accessToken) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/applies/${applyId}/shorts`, {
    method: 'PATCH',
    headers: {
      'authorization': 'Bearer ' + accessToken,
      'content-type': 'application/json'
    },
    body: JSON.stringify(shortsData)
  });

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

const putApplication = async (applyData, id, token) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/applies/${id}`, {
    method: 'PUT',
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

export {
  postApply,
  putApplication,
  getMyApplyList,
  getApplication,
  patchShorts,
  getAppliesWithPostId
};

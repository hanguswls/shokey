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

export { getAppliesWithPostId };
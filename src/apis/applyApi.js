const getAppliesWithPostId = async (postId, filterOptions, token) => {
  const {
    bidded,
    uploaded,
    accepted
  } = filterOptions;

  const res = await fetch(import.meta.env.VITE_APP_API_URL + 
    `/api/posts/${postId}/applies?bidded=${bidded}&uploaded=${uploaded}&accepted=${accepted}`, {
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
const getAppliesWithPostId = async (postId, token) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/posts/${postId}/applies`, {
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
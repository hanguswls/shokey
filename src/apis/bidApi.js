const fetchApi = async (endPoint, options) => {
  const res = fetch(import.meta.env.VITE_APP_API_URL + endPoint, options);

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

const registerBidApi = (applyId, token) => {
  return fetchApi(`/api/applies/${applyId}/bids`, {
    headers: {
      'authorization': 'Bearer ' + token
    }
  });
}

export { registerBidApi };
const fetchApi = async (endPoint, options) => {
  const res = fetch(import.meta.env.VITE_APP_API_URL + endPoint, options);

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

/**
 * 특정 지원 항목을 입찰 등록하는 api 함수.
 * @param {number} applyId 지원 공고 id
 * @param {string} token 사용자 accessToken
 * @returns api response
 */
const registerBidApi = (applyId, token) => {
  return fetchApi(`/api/applies/${applyId}/bids`, {
    headers: {
      'authorization': 'Bearer ' + token
    }
  });
}

/**
 * 입찰 등록된 특정 지원 항목을 승인하는 api 함수.
 * @param {number} applyId 지원 공고 id
 * @param {string} token 사용자 accessToken
 * @returns api response
 */
const acceptBidApi = (applyId, token) => {
  return fetchApi(`/api/applies/${applyId}/bids`, {
    headers: {
      'authorization': 'Bearer ' + token
    }
  });
}

export { registerBidApi, acceptBidApi };
const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const fetchAPI = async (endpoint, options = {}) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
};

const getMyUser = (accessToken) =>
  fetchAPI(`/api/me`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

const getUser = (id) =>
  fetchAPI(`/api/users/${id}`, {
    method: 'GET',
  });

export {
  getMyUser,
  getUser,
};
const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const fetchAPI = async (endpoint, options = {}) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!res.ok) {
    const message = await res.json();
    throw new Error(message.statusMsg);
  }

  return res.json();
};

const getUser = (id) =>
  fetchAPI(`/api/users/${id}`, {
    method: 'GET',
  });

const getMyUser = (accessToken) =>
  fetchAPI(`/api/me`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

const patchUser = ( changedData, accessToken ) =>
  fetchAPI(`/api/users`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(changedData),
  });

const deleteUser = (accessToken) =>
  fetchAPI(`/api/users`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

export {
  getMyUser,
  getUser,
  patchUser,
  deleteUser,
};
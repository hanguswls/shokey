const fetchAPI = async (endpoint, options = {}) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL}${endpoint}`, options);

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

const postUser = ( user, accessToken ) =>
  fetchAPI(`/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(user),
});

const putUser = ( user, accessToken ) =>
  fetchAPI(`/api/users`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(user),
});

const deleteUser = (accessToken) =>
  fetchAPI(`/api/users`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${accessToken}` },
});

export {
  getMyUser,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
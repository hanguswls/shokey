const fetchAPI = async (endpoint, options = {}) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL}${endpoint}`, options);

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
};

const getAccounts = (accessToken) =>
  fetchAPI('/api/accounts', {
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

const postAccounts = (accounts, accessToken) =>
  fetchAPI('/api/accounts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accounts)
  });

const putAccounts = (accounts, accessToken) =>
  fetchAPI(`/api/accounts`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accounts)
  });

const getBalance = (accessToken) =>
  fetchAPI('/api/balance', {
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

const postWithdraw = (amount, accessToken) =>
  fetchAPI('/api/balance/withdraw', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount })
  });

const postDeposit = (amount, accessToken) =>
  fetchAPI('/api/balance/deposit', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount })
  });

export {
  getAccounts,
  postAccounts,
  putAccounts,
  getBalance,
  postWithdraw,
  postDeposit
};
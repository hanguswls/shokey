const postFile = async (data, token) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/files', {
    method: 'POST',
    headers: {
      'content-type': 'multipart/form-data',
      'authorization': 'Bearer ' + token
    },
    body: data
  });

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

export { postFile };
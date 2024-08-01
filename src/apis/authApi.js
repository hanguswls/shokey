const postRegister = async (id, password, name, gender, email) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userId": id,
      "userPassword": password,
      "userName": name,
      "userGender": gender,
      "userEmail": email
    })
  });

  if (!res.ok) {
    const message = await res.json().statusMsg;
    throw new Error(message);
  }

  return res.json();
}

export { postRegister };
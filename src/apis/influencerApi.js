const getInfluencerList = async (page, size, sort) => {
  let sortStr = "";
  sort.forEach(item => {
    sortStr += `&sort=${item}`;
  });

  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/influencers?page=${page}&size=${size}${sortStr}}`);

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

export { getInfluencerList };
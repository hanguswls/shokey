const getInfluencerList = async (page, size, sort) => {
  let sortStr = "";
  if (sort.length > 0) {
    sort.forEach(item => {
      sortStr += `&sort=${item}`;
    });
  }

  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/influencers?page=${page}&size=${size}${sortStr}`);

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

const getNiches = async () => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/influencers/niches');

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

export { getInfluencerList, getNiches };
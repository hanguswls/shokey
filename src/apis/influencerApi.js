const getInfluencerList = async (page, size, sort, niches) => {
  let sortStr = "";
  if (sort.length > 0) {
    sort.forEach(item => {
      sortStr += `&sort=${item}`;
    });
  }

  let nichesStr = "";
  if (niches) {
    nichesStr = `&niche=${niches}`;
  }

  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/influencers?page=${page}&size=${size}${sortStr}${nichesStr}`);

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

const getInfluencer = async (influencerId) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + `/api/influencers/${influencerId}`, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const message = (await res.json()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

const postInfluencer = async (influencer, accessToken) => {
	const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/influencers', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
	  },
	  body: JSON.stringify(influencer),
	});

	if (!res.ok) {
	  const message = (await res.json()).statusMsg;
	  throw new Error(message);
	}

	return res.json();
};

const putInfluencer = async (influencer, accessToken) => {
	const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/influencers', {
	  method: 'PUT',
	  headers: {
	    'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
	  },
	  body: JSON.stringify(influencer),
	});

	if (!res.ok) {
	  const message = (await res.json()).statusMsg;
	  throw new Error(message);
	}

	return res.json();
};

export {
  getInfluencerList,
  getNiches,
  getInfluencer,
  postInfluencer,
  putInfluencer,
};
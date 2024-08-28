const getVideoInfoListWithId = async (videoId) => {
  const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=player,statistics&id=${videoId}&key=${import.meta.env.VITE_APP_YOUTUBE_API_KEY}`, {
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
}

export { getVideoInfoListWithId }
const fetchList = async () => {
  const res = await fetch('https://api.dailymotion.com/videos?search=web+development&limit=9')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default fetchList
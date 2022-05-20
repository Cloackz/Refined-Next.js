const fetchApi = async path => {
	const res = await fetch(`http://localhost:3001/${path}/`)
	return res.json()
}

export default fetchApi

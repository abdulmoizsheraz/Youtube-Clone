
// const BASE_URL=" https://youtube-v3-alternative.p.rapidapi.com  ";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};
   const fetchDataFromAPI=async()=>{
      const res= await fetch('https://youtube-v3-alternative.p.rapidapi.com/related?id=dQw4w9WgXcQ&geo=US&lang=en', options)
	const data =res.json();
  return data;
	
  }
  export default fetchDataFromAPI;
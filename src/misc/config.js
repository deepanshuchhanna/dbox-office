const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );

  //   fetch(`https://api.tvmaze.com/search/shows?q=${input}`)       ------> this whole fn. is copied from the Home.js
  //     .then(r => r.json())
  //     .then(result => {
  //       setResults(result);
  // console.log(result);
  // });
  return response;
}

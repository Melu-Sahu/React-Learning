
// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '03e5c27c04msh0c478f16ee40b80p15b412jsn6dc8405bcd3c',
//     // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,

//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };


// export const exerciseOptions = {
//   method: 'GET',
//   data:{limit: 50},
//   headers: {
//     'X-RapidAPI-Key': '03e5c27c04msh0c478f16ee40b80p15b412jsn6dc8405bcd3c',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };


export const fetchData = async (url) => {

  const response = await fetch(url, {
    method: 'GET',
    data:{limit: 50},
    headers: {
      'X-RapidAPI-Key': '03e5c27c04msh0c478f16ee40b80p15b412jsn6dc8405bcd3c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  });
  const data = await response.json();
  return data;
}






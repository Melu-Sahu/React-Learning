import axios from 'axios';

export async function FetchData(url, dataFrom) {

  const optionsExerciseDB = {
    method: 'GET',
    url: url,
    headers: {
      'X-RapidAPI-Key': '4333d9c2a3mshebb22741b3f0000p1d0abdjsn4cb7cb3e41cc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  const optionsYoutubeSearch = {
    method: 'GET',
    url: url,
    headers: {
      'X-RapidAPI-Key': '03e5c27c04msh0c478f16ee40b80p15b412jsn6dc8405bcd3c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }

  if (dataFrom === 'youtube') {
    try {
      const response = await axios.request(optionsYoutubeSearch);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  } else if(dataFrom === 'exercisedb'){
    try {
      const response = await axios.request(optionsExerciseDB);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }else{
    console.log('dataFrom is not found.');
  }

}


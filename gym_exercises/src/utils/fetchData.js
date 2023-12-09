import axios from 'axios';

export async function FetchData(url, dataFrom) {

  const optionsExerciseDB = {
    method: 'GET',
    url: url,
    headers: {
      // 'X-RapidAPI-Key': process.env.RAPID_API_EXERCISEDDB_KEY,
      'X-RapidAPI-Key': 'cf17667fefmsh186fabb856a442bp1df7aejsne3ab7a7ef01e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  const optionsYoutubeSearch = {
    method: 'GET',
    url: url,
    headers: {
      // 'X-RapidAPI-Key': process.env.RAPID_API_YOUTUBE_SEARCH_AND_DOWNLOAD_KEY,
      'X-RapidAPI-Key': '03e5c27c04msh0c478f16ee40b80p15b412jsn6dc8405bcd3c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }

  if (dataFrom === 'youtube') {
    try {
      const response = await axios.request(optionsYoutubeSearch);

      return response.data;
    } catch (error) {
      console.error("Youtube server error :", error);
    }
  } else if(dataFrom === 'exercisedb'){
    try {
      const response = await axios.request(optionsExerciseDB);

      return response.data;
    } catch (error) {
      console.error("exercisedb server error : ", error);
    }
  }else{
    console.log('dataFrom is not found.');
  }

}


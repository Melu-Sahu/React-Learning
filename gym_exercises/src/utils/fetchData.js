import axios from 'axios';

export async function FetchData(url) {

    let apiData;

    const options = {
      method: 'GET',
      url: url,
      headers: {
        'X-RapidAPI-Key': '4333d9c2a3mshebb22741b3f0000p1d0abdjsn4cb7cb3e41cc',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
        const response = await axios.request(options);
        // console.log(response.data);
        apiData = response.data;
    } catch (error) {
        console.error(error);
    }

    // return apiData;
}


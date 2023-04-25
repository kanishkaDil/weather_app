import axios from "axios";
export async function fetchInfo(cordinates) {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: cordinates },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options); // wait for the response
    console.log(response.data);
    return response.data.current.feelslike_c;
  } catch (error) {
    return error;
  }
}

 
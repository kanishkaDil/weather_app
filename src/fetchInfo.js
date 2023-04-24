import axios from "axios";
export async function fetchInfo() {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "6.94,79.85" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      // "X-RapidAPI-Key": "f53cd4b26emsh35ad5403ea1370ep1664bfjsnfad2ee08906f",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options); // wait for the response
    console.log(response.data);
    return response.data.current.feelslike_c;
  } catch (error) {
    console.error(error);
    return error;
  }
}

 
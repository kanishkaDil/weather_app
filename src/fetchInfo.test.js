import axios from 'axios';
import { fetchInfo } from "./fetchInfo.js";

jest.mock('axios'); 
describe('fetchInfo', () => {
    it('fetches the weather information successfully', async () => {
      const expectedData = { current: { feelslike_c: 25 } };
      axios.request.mockResolvedValueOnce({ data: expectedData }); // set the mock response
  
      const data = await fetchInfo(); // call the function
  
      expect(data).toEqual(expectedData.current.feelslike_c); // assert that the data is correct
      expect(axios.request).toHaveBeenCalledTimes(1); // assert that the axios request was called once
      expect(axios.request).toHaveBeenCalledWith({ // assert that the axios request was called with the correct options
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: '6.94,79.85' },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      });
    });
  
    it('handles errors correctly', async () => {
      const expectedError = new Error('Some error message');
      axios.request.mockRejectedValueOnce(expectedError); // set the mock error
  
      const error = await fetchInfo(); // call the function
  
      expect(error).toEqual(expectedError); // assert that the error is correct
    });
  });
  
  

import axios from "axios";
 const BaseUrl = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"



export const api = axios.create({
  baseURL: 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
});




export async function fetchDragons() {
  try {
    const dragons =  fetch(BaseUrl).then(response => response.json());

    return dragons
  }
  catch (error) {
    console.log(error)
  }
}

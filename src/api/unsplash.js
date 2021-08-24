import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ttw5nAsRdtu1J85otf_9G9YmpjeY9jSY-u0WlSswfgk",
  }
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "86e199ddf36c4461886a8e2e0e11cecc",
  },
});

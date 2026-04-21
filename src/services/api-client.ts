import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "86e199ddf36c4461886a8e2e0e11cecc",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return AxiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(
      (res) => res.data,
    );
  };
}
export default APIClient;

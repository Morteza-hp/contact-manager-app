import axios from "axios";
export const Axios = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 400000,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HttpClient {
  static async get<T>(url: string) {
    const response = await Axios.get<T>(url);
    return response.data;
  }
}

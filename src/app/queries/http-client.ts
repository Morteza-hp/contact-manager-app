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
  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }
  static async delete<T>(url: string) {
    const response = await Axios.delete<T>(url);
    return response.data;
  }
  static async put<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.put<T>(url, data, options);
    return response.data;
  }
}
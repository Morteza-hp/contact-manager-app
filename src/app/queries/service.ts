import { Contact } from "../models/contacts";
import { API_ENDPOINTS } from "./constants";
import { HttpClient } from "./http-client";

const Service = {
  contact: {
    get: () => HttpClient.get<any>(API_ENDPOINTS.CONTACTS),
  },
};
export default Service;

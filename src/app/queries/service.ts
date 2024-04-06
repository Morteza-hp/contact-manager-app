import { Contact } from "../models/contacts";
import { API_ENDPOINTS } from "./constants";
import { HttpClient } from "./http-client";

const Service = {
  contact: {
    get: () => HttpClient.get<any>(API_ENDPOINTS.CONTACTS),
    add: (params: Contact) =>
      HttpClient.post<Contact>(API_ENDPOINTS.CONTACTS, { ...params }),
    detail: (id: number) =>
      HttpClient.get<Contact>(${API_ENDPOINTS.CONTACTS}/${id}),
  },
};
export default Service;
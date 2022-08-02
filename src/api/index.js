import axios from "axios";
import { API_BASE_URL } from "../configs/api.config";

export const getData = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/contacts`);
  console.log(data);
  return data;
};
export const postData = async (contact) => {
  const { data } = await axios.post(`${API_BASE_URL}/contacts`, contact);
  return data;
};

export const deleteData = async (id) => {
  const { data } = await axios.delete(`${API_BASE_URL}/contacts/${id}`);
  return data;
};

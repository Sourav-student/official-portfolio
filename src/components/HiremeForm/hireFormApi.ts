import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

type hireForm = {
  name: string,
  email: string,
  phone_no: string,
  message: string,
};

export default async function postHireFormSubmit(data : hireForm) {
  const res = await api.post("/api/hire-form", data);
  return res;
}
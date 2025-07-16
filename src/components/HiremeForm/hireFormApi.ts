import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default async function postHireFormSubmit(data : any) {
  const res = await api.post("/api/hire-form", data);
  return res;
}
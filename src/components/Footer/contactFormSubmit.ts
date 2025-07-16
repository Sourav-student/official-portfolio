import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

type contactForm = {
  name: string,
  phone_no: string,
  message: string
}

export default async function postContactFormSubmit(data: contactForm) {
  const res = await api.post("/api/contact-form", data);
  return res;
}
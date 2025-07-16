'use client';
import { useState } from "react";
import { toast } from 'react-toastify';
import postHireFormSubmit from "./hireFormApi";

export default function HiremeForm() {
  const [hiremeFormData, setHiremeFormData] = useState({
    name: '',
    email: '',
    phone_no: '',
    message: '',
  });

  const [submit, setSubmit] = useState(false)

  const handleSend = async () => {
    if (!hiremeFormData.name || !hiremeFormData.email || !hiremeFormData.phone_no || !hiremeFormData.message) {
      toast.warning("Please fill all the fields");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(hiremeFormData.name)) {
      toast.warning("Name should only contain letters");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hiremeFormData.email)) {
      toast.warning("Please enter a valid email address");
      return;
    }
    if (!/^\d{10}$/.test(hiremeFormData.phone_no)) {
      toast.warning("Phone number should be 10 digits long");
      return;
    }

    setSubmit(true);
    const res = await postHireFormSubmit(hiremeFormData);
    if(res?.data?.success){
    toast.success(res?.data?.message);
    }else{
      toast.error(res?.data?.Message);
    }
    
    setHiremeFormData({
      name: '',
      email: '',
      phone_no: '',
      message: '',
    });
    setSubmit(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-lg">Name</label>
          <input
            type="text"
            name="name"
            value={hiremeFormData.name}
            onChange={(e) => setHiremeFormData({ ...hiremeFormData, name: e.target.value })}
            className="bg-[#1a1a1a] text-white border border-[#00ff88] rounded-md p-2"
            placeholder="Enter here..."
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={hiremeFormData.email}
            onChange={(e) => setHiremeFormData({ ...hiremeFormData, email: e.target.value })}
            className="bg-[#1a1a1a] text-white border border-[#00ff88] rounded-md p-2"
            placeholder="Enter here..."
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone_no" className="text-lg">Phone No.</label>
          <input
            type="tel"
            name="phone_no"
            value={hiremeFormData.phone_no}
            onChange={(e) => setHiremeFormData({ ...hiremeFormData, phone_no: e.target.value })}
            className="bg-[#1a1a1a] text-white border border-[#00ff88] rounded-md p-2"
            placeholder="Enter here..."
            required
          />
        </div>

        <div className="flex flex-col gap-1 sm:col-span-2">
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea
            name="message"
            value={hiremeFormData.message}
            onChange={(e) => setHiremeFormData({ ...hiremeFormData, message: e.target.value })}
            className="bg-[#1a1a1a] text-white border border-[#00ff88] rounded-md p-2 h-32 resize-none"
            placeholder="Enter here..."
            required
          />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          className={`px-6 py-3 rounded-lg transition-all ease-in-out text-lg border cursor-pointer ${submit
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#ffff00] hover:bg-[#00ff88] text-[#000] hover:border-white"
            }`}
          disabled={submit}
          onClick={handleSend}
        >
          {submit ? "Sending..." : "Send"}
        </button>
      </div>
    </>
  )
}
import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone_no: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const ContactData = mongoose.models.ContactData || mongoose.model("ContactData", contactFormSchema);

export default ContactData;
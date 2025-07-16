import mongoose from "mongoose";

const hireFormSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
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
}, { timestamps: true });

const Hireme = mongoose.models.Hireme || mongoose.model("Hireme", hireFormSchema);

export default Hireme;
import { connectDb } from "@/lib/ConnDb";
import ContactData from "@/models/contactFormModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest){
  
  await connectDb();

   try {
    const data = await request.json();
    await ContactData.create(data);

    return NextResponse.json({
      message : "Form submitted!",
      success : true
    })
    
   } catch (error) {
     console.log(error);
     return NextResponse.json({
      message : "Something want wrong!",
      success : false
     })
   }
}
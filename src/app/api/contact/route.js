import dbConnect from "@/utils/dbConnect";
import ContactModel from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();
    // console.log({ body });
    const isEmail = await ContactModel.find({ email: body.email });
    if (isEmail.length === 0) {
      await ContactModel.create(body);
      return NextResponse.json(
        { message: "Message sent successfully" },
        {
          status: 200,
        }
      );
    }
    return NextResponse.json(
      { message: "User already exists" },
      {
        status: 401,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse(
      {
        message: "Server error, please try again!",
      },
      {
        status: 500,
      }
    );
  }
}

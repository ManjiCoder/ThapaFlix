import dbConnect from "@/utils/dbConnect";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();
    // console.log({ body });
    const isEmail = await Contact.find({ email: body.email });
    if (!isEmail) {
      await Contact.create(body);
      return new NextResponse.json(
        { message: "Message sent successfully" },
        {
          status: 200,
        }
      );
    }
    return new NextResponse.json(
      { message: "User already exists" },
      {
        status: 401,
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      {
        message: "Server error, please try again!",
      },
      {
        status: 500,
      }
    );
  }
}

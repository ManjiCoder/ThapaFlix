import dbConnect from "@/utils/dbConnect";
import ContactModel from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();
    // console.log({ body });

    await ContactModel.create(body);
    return NextResponse.json(
      { message: "Message sent successfully" },
      {
        status: 200,
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

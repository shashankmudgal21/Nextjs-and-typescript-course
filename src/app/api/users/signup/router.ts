import { connectDb } from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import { NextResponse, NextRequest } from "next/server";
connectDb();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
      },{status:400});
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = await User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    return NextResponse.json({
        sucess:true,
        message:"User created ",
        user,
    },{status:201})
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

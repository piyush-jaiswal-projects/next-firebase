import { NextRequest, NextResponse } from "next/server";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "@/config/firebase";
import { getLoginErrorMsg } from "@/utils";

const auth = getAuth(firebaseApp);

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return NextResponse.json({
      message: "User Signed up!",
      user: userCredential.user,
    });
  } catch (error: any) {
    const errorMessage = getLoginErrorMsg(error.code);
    return NextResponse.json({ message: errorMessage }, { status: 400 });
  }
}

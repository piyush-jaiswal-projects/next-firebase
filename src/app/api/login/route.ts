import { NextRequest, NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "@/config/firebase";

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

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return NextResponse.json({
      message: "User Logged in!",
      user: userCredential.user,
    });
  } catch (e: any) {
    let errorMessage;

    switch (e.code) {
      case "auth/email-already-in-use":
        errorMessage = "Email Already in Use";
        break;
      case "auth/weak-password":
        errorMessage = "Weak Password";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid Email";
        break;
      default:
        errorMessage = "Internal Server Error";
        break;
    }

    return NextResponse.json({ message: errorMessage }, { status: 400 });
  }
}

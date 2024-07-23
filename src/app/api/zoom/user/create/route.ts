import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { CreateZoomUser } from "@/types";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();
    const tokenUrl = `${process.env.NEXT_PUBLIC_ZOOM_API_BASE_URL}/users`;

    const requestHeaders = {
      Authorization: `Bearer ${body.access_token}`,
    };

    const userData = body.user as CreateZoomUser;

    const requestBody = {
      action: "create",
      user_info: userData,
    };

    const response = await axios.post(tokenUrl, requestBody, {
      headers: requestHeaders,
    });

    return NextResponse.json({
      message: "User created successfully!",
      data: response.data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 400 }
    );
  }
}

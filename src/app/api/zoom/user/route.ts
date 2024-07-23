import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();
    const uri = `${process.env.NEXT_PUBLIC_ZOOM_API_BASE_URL}/users/${body.email}`;

    const requestHeaders = {
      Authorization: `Bearer ${body.access_token}`,
    };

    const response = await axios.get(uri, {
      headers: requestHeaders,
    });

    return NextResponse.json({
      message: "User fetched successfully!",
      data: response.data,
    });
  } catch (error: any) {
    return error.response.data.code === 1001
      ? NextResponse.json(
          {
            message: error.response.data.message,
            code: error.response.data.code,
          },
          { status: 200 }
        )
      : NextResponse.json({ message: "Error fetching user" }, { status: 400 });
  }
}

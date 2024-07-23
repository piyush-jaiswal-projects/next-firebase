import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const clientID = process.env.NEXT_PUBLIC_ZOOM_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_ZOOM_CLIENT_SECRET;
const accountId = process.env.NEXT_PUBLIC_ZOOM_ACCOUNT_ID;
const tokenUrl = "https://zoom.us/oauth/token";

const authHeader = Buffer.from(`${clientID}:${clientSecret}`).toString(
  "base64"
);

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const requestBody = {
      grant_type: "account_credentials",
      account_id: accountId,
    };

    const requestHeaders = {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Host: "zoom.us",
    };

    const response = await axios.post(tokenUrl, requestBody, {
      headers: requestHeaders,
    });

    return NextResponse.json({
      message: "Token generated successfully!",
      access_token: response.data.access_token,
      tokenType: response.data.token_type,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error getting access token", data: error.data },
      { status: 400 }
    );
  }
}

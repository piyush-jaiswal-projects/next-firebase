"use client";
import { SubmitButton } from "@/components/common";
import { useState, useEffect } from "react";
import { getAccessToken, getUser } from "@/services";
import { useRouter } from "next/navigation";

export default function ZoomPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [meetingUrl, setMeetingUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    setEmail(url.pathname.slice(6));
  }, []);

  const generateZoomMeetLink = async () => {
    const accessToken = await getAccessToken();
    if (accessToken === "") {
      setError("Error generating access token!");
      return;
    }
    const user = await getUser(accessToken, email ?? "", setError);
    if (error?.split(" ")[1] === "1001") {
      // requires pro subscription
      router.push("/user")
    } else {
      setMeetingUrl(user.personal_meeting_url);
    }
  };

  return (
    <main className="flex justify-center items-center p-4">
      <div className="w-1/2 text-center">
        <h1 className="text-lg">Generate Zoom Meet Link</h1>
        <br />
        <h3>{email}</h3>
        <br />
        <SubmitButton
          text="Generate"
          onClick={() => {
            generateZoomMeetLink();
          }}
        />
        <br />
        <a
          className="underline text-blue-500"
          href={meetingUrl as string}
          target="_blank"
          rel="noreferrer"
        >
          {meetingUrl}
        </a>
        <label className="text-red-500">{error}</label>
      </div>
    </main>
  );
}

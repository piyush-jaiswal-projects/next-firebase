import { CreateZoomUser } from "@/types";

export default async function createUser(accessToken: string, user: CreateZoomUser) {
    try {
      const response = await fetch(`/api/zoom/user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user, access_token: accessToken }),
      });

      if (!response.ok) {
        console.error("Error creating user!");
        return;
      }

      const res = await response.json();
      return res.data ?? "";
     
    } catch (error) {
      console.log(error);
    }
  }
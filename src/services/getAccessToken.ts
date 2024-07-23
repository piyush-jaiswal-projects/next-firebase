export default async function getAccessToken(): Promise<string> {
    try {
      const response = await fetch(`/api/zoom/token`, {
        method: "GET",
      });

      if (!response.ok) {
        console.error("Error generating Zoom meet link");
        return "";
      }

      const res = await response.json();
      return res.access_token;
    } catch (error:any) {
      return "";
    }
  }
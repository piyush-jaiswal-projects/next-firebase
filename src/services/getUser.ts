export default async function getUser(
  accessToken: string,
  email: string,
  setError: (msg: string) => void
) {
  try {
    const response = await fetch(`/api/zoom/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, access_token: accessToken }),
    });

    if (!response.ok) {
      console.error("Error generating Zoom meet link");
      return;
    }

    const res = await response.json();
    if (res.code === 1001){
        setError(`Code ${res.code} : Zoom ${res.messgae}`);
        return {code: res.code, msg: res.message};
    }
    return res.data ?? "";
  } catch (error) {
    console.log(error);
  }
}

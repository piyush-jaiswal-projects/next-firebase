import { Signin } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Signin className="bg-slate-100 shadow rounded-lg p-4 w-1/3 min-h-[300px]" />
    </div>
  );
}

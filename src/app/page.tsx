import { Signin } from "@/components/ui";
import firebaseConfig from "@/config/firebase";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center items-center w-full">
        <Signin className="bg-slate-100 shadow rounded-lg p-4 w-3/4 min-h-1/2" />
      </div>
    </main>
  );
}

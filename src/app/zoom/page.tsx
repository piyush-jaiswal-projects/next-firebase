"use client";

import { TextLabel } from "@/components/common";
import { useRouter } from "next/navigation";

const Zoom: React.FC = () => {
    const router = useRouter();
    router.push("/");
    return <TextLabel text="Invalid Path!" />
}

export default Zoom;
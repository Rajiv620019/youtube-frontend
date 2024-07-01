import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCards from "@/components/VideoCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      hi there
      <VideoCards />
    </div>
  );
}

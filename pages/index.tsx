import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="h-screen w-screen items-center justify-center flex flex-col">
        <span>
          Main app page. Visit /[domain] or /[domain]/[pageId] routes to see
          more
        </span>
      </div>
    </main>
  );
}

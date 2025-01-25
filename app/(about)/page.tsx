import Image from "next/image";
import TopNav from "@/app/ui/topnav"
import Nav from "@/app/ui/nav"

export default function Home() {
  return (
    <div>
      {/* <TopNav/> */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="font-[family-name:var(--font-geist-mono)] text-5xl">
          Nathan Oesterle
          </div>
          <ul className="inline-flex flex-col sm:flex-row w-full list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="inline-block mx-2 flex-1 text-center text-nowrap">
              Software Engineer
            </li>
            <li className="inline-block mx-2 flex-1 text-center">
              Self-hoster
            </li>
          </ul>
          <Nav></Nav>
        </main>
      </div>
    </div>
  );
}

import Link from "next/link";
import Separator from "./components/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>
        <span className="text-center font-semibold font-mono bg-slate-100 dark:bg-slate-800 p-1.5 rounded-md">@vedanshshetti/</span>
        <span className="font-bold">SimplyUI</span>
      </h1>
      <Separator length="75"/>
      <Link href="/docs">Click to get started!</Link>
    </div>
  );
}

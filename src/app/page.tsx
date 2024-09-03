import Image from "next/image";
import TrendingMoviesPage from "./components/movies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-400">
      <h1 className="text-9xl font-black underline">Streamly</h1>
      <TrendingMoviesPage />
    </main>
  );
}

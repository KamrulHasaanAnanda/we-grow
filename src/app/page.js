import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";

export default async function Home() {

  let songs = await fetch("http://localhost:3002/api/song").then((res) => res.json())
  console.log('songs :>> ', songs);
  let showSongs = songs?.data?.map((song) => <div className="cursor-pointer mt-3 relative rounded-xl">
    <Image src={song?.image} alt="song" width={200} height={250} priority />
    <div className="p-2">
      <h1 className="text-lg font-bold">{song?.title}</h1>
      <p className="text-gray-600 text-sm">{song?.artistname}</p>

    </div>
    <div className="bg-white h-8 w-8 absolute right-2 bottom-[25%] cursor-pointer rounded-[50%] flex justify-center items-center">
      <CiPlay1 className="text-black font-bold text-base" />
    </div>
  </div>)
  return (
    <main className="flex flex-wrap gap-4">
      {showSongs}
    </main>
  );
}

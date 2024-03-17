import Recomended from "@/components/Recomended";



export default async function Home() {

  let songs = await fetch("http://localhost:3002/api/song").then((res) => res.json())
  // console.log('songs :>> ', songs);

  return (
    <Recomended songs={songs} />
  );
}

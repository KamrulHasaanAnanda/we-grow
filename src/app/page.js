import Recomended from "@/components/Recomended";

import { headers } from "next/headers";


export default async function Home() {
  const heads = headers();
  const header_url = heads.get("domain") || "";
  let songs = await fetch(header_url + "/api/song").then((res) => res.json())
  // console.log('header_url :>> ', header_url);

  return (
    <Recomended songs={songs} />
  );
}

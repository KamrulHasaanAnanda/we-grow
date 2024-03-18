
import Trending from "@/components/Trending";

import { headers } from "next/headers";


export default async function Home() {
    const heads = headers();
    const header_url = heads.get("domain") || "";
    let songs = await fetch(header_url + "/api/trending").then((res) => res.json())


    return (
        <Trending songs={songs} />
    );
}

"use client"
import React, { useState } from 'react';
import MusicPlayer from './layout/MusicPlayer';
import { CiPlay1 } from "react-icons/ci";
import Image from "next/image";

function Recommended({ songs }) {
    const [selectedSong, setSelectedSong] = useState(null);

    const selectSongNow = (song) => {
        setSelectedSong(song);
    };

    const showSongs = songs?.data?.map((song, index) => (
        <div key={index} className="cursor-pointer mt-3 relative rounded-lg overflow-hidden w-[40%]  sm:w-1/4 md:w-1/4 lg:w-1/6 xl:w-1/6">
            <Image src={song?.image} alt="song" responsive width={250} height={250} priority />
            <div className="p-2">
                <h1 className=" text-sm sm:text-lg font-bold">{song?.title}</h1>
                <p className="text-gray-600 text-sm">{song?.artistname}</p>
            </div>
            <div onClick={() => selectSongNow(song)} className="bg-white h-8 w-8 absolute right-2 bottom-2 cursor-pointer rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform">
                <CiPlay1 className="text-black font-bold text-lg" />
            </div>
        </div>
    ));

    return (
        <>
            <main className="flex flex-wrap gap-2 p-4">
                {showSongs}
            </main>
            {selectedSong && <MusicPlayer selectedSong={selectedSong} />}
        </>
    );
}

export default Recommended;

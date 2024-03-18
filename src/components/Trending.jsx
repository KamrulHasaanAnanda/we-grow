"use client"
import React, { useEffect, useState } from 'react';
import { CiPlay1 } from "react-icons/ci";
import Image from "next/image";
import searchStore from '@/store/searchStore';

function Trending({ songs }) {
    const { searchValue, setSelectedSong } = searchStore();


    const [searchedSong, setsearchedSong] = useState(songs?.data || []);


    const selectSongNow = (song) => {
        setSelectedSong(song);
    };
    // console.log('searchValue in', searchedSong)

    useEffect(() => {
        if (searchValue?.length > 0) {
            const filteredSongs = songs?.data.filter((song) => {
                return song.title.toLowerCase().includes(searchValue.toLowerCase());
            });
            if (filteredSongs.length > 0) {
                setsearchedSong(filteredSongs);
            }
        } else {
            setsearchedSong(songs?.data);
        }
    }, [searchValue])


    const showSongs = searchedSong?.map((song, index) => (
        <div key={index} className="cursor-pointer mt-3 relative rounded-lg overflow-hidden w-[40%]  sm:w-1/4 md:w-1/4 lg:w-1/6 xl:w-1/6">
            <Image src={song?.image} alt="song" responsive width={250} height={250} priority />
            <div className="p-2">
                <h1 className=" text-sm sm:text-base font-bold">{song?.title}</h1>
                <p className="text-gray-600 text-sm">{song?.artistname}</p>
            </div>
            <div onClick={() => selectSongNow(song)} className="bg-white h-8 w-8 absolute right-2 bottom-2 cursor-pointer rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform">
                <CiPlay1 className="text-black font-bold text-lg" />
            </div>
        </div>
    ));

    return (
        <>
            <main className="flex flex-wrap gap-2 p-4 pb-20">
                {showSongs}
            </main>

        </>
    );
}

export default Trending;

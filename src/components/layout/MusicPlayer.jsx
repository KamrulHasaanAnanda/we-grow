"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoPlayBackOutline, IoPlayForwardOutline } from "react-icons/io5";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import MusicSlider from '../MusicSlider';
import searchStore from '@/store/searchStore';

function MusicPlayer() {
    const { selectedSong } = searchStore();
    // console.log('selectedSong', selectedSong)

    const audio = useRef()
    const [playing, setPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleLoadedMetadata = () => {
        // Set the duration state to the audio file's duration
        const audioDuration = audio.current.duration;
        setDuration(audioDuration);
    };

    const handleTimeUpdate = () => {
        // Update the current time as the audio plays
        setCurrentTime(audio.current.currentTime);
    };

    useEffect(() => {
        if (audio?.current && selectedSong) {
            console.log('audio?.current', audio?.current)
            audio.current.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                audio.current.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [])

    return (
        <div className='fixed p-3 h-16 border-t border-black items-center justify-between shadow-lg bg-[#212124] left-0 bottom-0 w-full' style={{
            display: selectedSong ? "flex" : `none`
        }}>
            <div className='flex items-center gap-3 w-[50%] sm:w-[25%]'>
                <Image src={selectedSong?.image} alt="song" width={50} height={50} />
                <p className=' text-xs truncate text-pretty sm:text-base font-normal text-white'>
                    {selectedSong?.title}
                </p>
            </div>
            <audio ref={audio} onLoadedMetadata={handleLoadedMetadata} src={selectedSong?.url} alt="url" autoPlay>


            </audio>
            <div className='w-[50%]'>
                <div className='flex items-center gap-4 w-full justify-end sm:justify-center'>
                    <IoPlayBackOutline className=' hidden sm:block' />
                    <div className="bg-white h-8 w-8 right-2 bottom-[25%] cursor-pointer rounded-[50%] flex justify-center items-center">
                        {
                            playing ? <CiPause1 onClick={() => {
                                audio.current.pause()
                                setPlaying(false)
                            }} className="text-black font-bold text-base" /> : <CiPlay1

                                onClick={() => {
                                    audio.current.play()
                                    setPlaying(true)
                                }} className="text-black font-bold text-base" />


                        }

                    </div>
                    <IoPlayForwardOutline className=' hidden sm:block' />

                </div>
                <MusicSlider duration={duration} currentTime={currentTime} audioRef={audio} setCurrentTime={setCurrentTime} />
            </div>
            <div className=' w-0 sm:w-[25%]'></div>
        </div>
    )
}

export default MusicPlayer

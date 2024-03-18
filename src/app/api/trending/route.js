import { NextResponse } from "next/server";

export async function GET(request) {
    // Do whatever you want

    let data = [
        {

            url: "http://download.music.com.bd/Music/W/Warfaze/Warfaze/02 - Warfaze - Boshe Aachi (music.com.bd).mp3",
            artistname: "Warfaze",
            copyright: "G-Series",

            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/Warfaze_Warfaze_300.jpg",
            title: "Boshe Aachi"
        },

        {

            url: "http://download.music.com.bd/Music/W/Warfaze/Warfaze/01 - Warfaze - Ekti Chelay (music.com.bd).mp3",
            artistname: "Warfaze",
            copyright: "G-Series",

            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/Shotto_Warfaze_300.jpg",
            title: "Ekti Chelay"
        },
        {

            url: "http://download.music.com.bd/Music/W/Warfaze/Jibon Dhara/Warfaze - Poth Chola (music.com.bd).mp3",
            artistname: "Warfaze",
            copyright: "G-Series",

            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/JibonDhara_Warfaze_300.jpg",
            title: "Poth Chola"
        },
        {

            url: "http://download.music.com.bd/Music/W/Warfaze/Obaak Bhalobasha/Warfaze - Obak Bhalobasha (music.com.bd).mp3",
            artistname: "Warfaze",
            copyright: "G-Series",

            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/Pothchola_Warfaze_300.jpg",
            title: "Obak Bhalobasha"
        },
        {

            url: "http://download.music.com.bd/Music/W/Warfaze/Poth Chola/02 - Warfaze - Tomake (music.com.bd).mp3",
            artistname: "Warfaze",
            copyright: "G-Series",

            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/JibonDhara_Warfaze_300.jpg",
            title: "Tomake"
        },

        {

            url: "http://download.music.com.bd/Music/W/Warfaze/Poth Chola/04 - Warfaze - Obak Bhalobasha (music.com.bd).mp3",
            artistname: "Warfaze",
            copyright: "G-Series",

            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/JibonDhara_Warfaze_300.jpg",
            title: "Obak Bhalobasha"
        },

        {

            url: "http://download.music.com.bd/Music/W/Warfaze/Poth Chola/13 - Warfaze - Pothchola (music.com.bd).mp3",
            artistname: "Warfaze",
            copyright: "G-Series",

            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/Shotto_Warfaze_300.jpg",
            title: "Pothchola"
        },


    ]
    return NextResponse.json({ data, message: "Hello World" }, { status: 200 });
}
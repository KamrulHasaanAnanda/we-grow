import { NextResponse } from "next/server";

export async function GET(request) {
    // Do whatever you want

    let data = [
        {

            url: "http://download.music.com.bd/Music/A/Artcell/Oniket Prantor/Artcell - Oniket Prantor (music.com.bd).mp3",
            artistname: "Artcell",
            copyright: "G-Series",
            duration: "340",
            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/AniketPrantor_300.jpg",
            title: "Oniket Prantor"
        },
        {

            url: "https://download.music.com.bd/Music/A/Artcell/Artcell%20-%20Chera%20Akash%20(music.com.bd).mp3",
            artistname: "Artcell",
            copyright: "G-Series",
            duration: "340",
            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/SporsherOnubhuti_300.jpg",
            title: "Chera Akash"
        }, {

            url: "http://download.music.com.bd/Music/A/Artcell/Artcell - Dhushor Shomoy (music.com.bd).mp3",
            artistname: "Artcell",
            copyright: "G-Series",
            duration: "340",
            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/SporsherOnubhuti_300.jpg",
            title: "Dhushor Shomoy"
        }, {

            url: "http://download.music.com.bd/Music/A/Artcell/Artcell - Dukhya Bilas (music.com.bd).mp3",
            artistname: "Artcell",
            copyright: "G-Series",
            duration: "340",
            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/AniketPrantor_300.jpg",
            title: "Dukhya Bilas"
        },
        {

            url: "http://download.music.com.bd/Music/A/Artcell/Onno Shomoy/01 - Artcell - Onnoshomoy (music.com.bd).mp3",
            artistname: "Artcell",
            copyright: "G-Series",
            duration: "340",
            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/AniketPrantor_300.jpg",
            title: "Onnoshomoy"
        },

        {

            url: "http://download.music.com.bd/Music/A/Artcell/Onno Shomoy/03 - Artcell - Poth Chola (music.com.bd).mp3",
            artistname: "Artcell",
            copyright: "G-Series",
            duration: "340",
            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/AniketPrantor_300.jpg",
            title: "Poth Chola"
        }, {

            url: "http://download.music.com.bd/Music/A/Artcell/Onno Shomoy/05 - Artcell - Mukhosh (music.com.bd).mp3",
            artistname: "Artcell",
            copyright: "G-Series",
            duration: "340",
            image: "https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/AlbumPreviewImageFile/SporsherOnubhuti_300.jpg",

            title: "Mukhosh"
        },



    ]
    return NextResponse.json({ data, message: "Hello World" }, { status: 200 });
}
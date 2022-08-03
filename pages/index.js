// Import next libraries
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Import components
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";

import headerBgAvif from "../public/images/header-bg-dark.avif";
import headerBgPng from "../public/images/header-bg-dark.png";

let data = [
  {
    "title": "title 1",
    "poster": "https://imdb-api.com/posters/original/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
    "link": "/",
  },
  {
    "title": "another title",
    "poster": "https://imdb-api.com/posters/original/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
    "link": "/",
  },
  {
    "title": "title 3",
    "poster": "https://imdb-api.com/posters/original/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
    "link": "/",
  },
  {
    "title": "title for test",
    "poster": "https://imdb-api.com/posters/original/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
    "link": "/",
  },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Film DB</title>
        <meta
          name="description"
          content="Film databse website free for everyone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <Image
            className="w-[71.75rem] flex-none max-w-none"
            srcSet={headerBgAvif}
            src={headerBgPng}
            alt="header-bg"
          />
        </div>
      </div>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-8">
          <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-8">
            <div className="col-start-1 col-end-3 bg-slate-800 rounded-md">
              <div
                role="status"
                className="flex justify-center items-center w-full h-full aspect-video bg-gray-300 rounded-md overflow-hidden"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/27EF723ZDmI?controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <iframe
                  src="https://www.imdb.com/video/imdb/vi362988313/imdb/embed?autoplay=false&enablejsapi=true&playerapiid=imdb_video_player&showinfo=false&rel=0&iv_load_policy=3&modestbranding=1&color=white&theme=dark&html5=true&version=3&player_id=imdb_video_player"
                  width="1920"
                  height="100%"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  frameBorder="no"
                  scrolling="no"
                ></iframe> */}
              </div>
            </div>
            <div className="col-start-3 col-end-4 bg-slate-800 rounded-md">
              <div className="flex justify-center items-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                right part
              </div>
            </div>
          </div>
          <HomeSlider data={data} sectionTitle="Recomanded today:" />
          <HomeSlider data={data} sectionTitle="Top rated:" />
          <HomeSlider data={data} sectionTitle="Most watched movies:" />
          <HomeSlider data={data} sectionTitle="Best of all the time:" />
          <HomeSlider data={data} sectionTitle="Actions:" />
          <HomeSlider data={data} sectionTitle="Romance:" />

        </div>
      </main>
    </div>
  );
}

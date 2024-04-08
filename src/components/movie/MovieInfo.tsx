'use client'

import { Button, Image } from '@nextui-org/react'
import Bookmark from '../Buttons/Bookmark'
import MovieChip from './MovieChip'
import BackButton from '../Buttons/Back'
import Cast from './Cast'

export default function MovieInfo({ data }) {
  const lengthConverter = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  return (
    <main className="flex flex-col h-screen">
      <section className="h-[300px] grid-cols-1 relative">
        <BackButton className="z-10 absolute top-5 left-5" />
        <Image
          className="z-0"
          src="/spiderman.png"
          width="100%"
          height={300}
          alt="spiderman"
        ></Image>
      </section>
      <section className="rounded-xl z-20 bg-white h-full p-6 flex flex-col gap-4 overflow-scroll scrollbar-hide">
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">{data.title}</h1>
            <h1 className="text-medium">{data.original_title}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <Button
              isIconOnly
              color="default"
              variant="light"
              aria-label="Bookmark"
            >
              <Bookmark />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/MaterialSymbolsKidStar.svg"
            width={20}
            alt="Star"
          ></Image>
          <p className="text-default-500">{data.vote_average}/10 IMDb</p>
        </div>
        <div className="flex gap-2">
          {data.genres.map((genre, index) => (
            <MovieChip chips={[genre.name]} key={index} />
          ))}
        </div>
        <div className="flex gap-16 w-full py-2">
          <div>
            <p className="text-default-500">Length</p>
            {lengthConverter(data.runtime)}
          </div>
          <div>
            <p className="text-default-500">Language</p>
            {data.spoken_languages[0].english_name}
          </div>
          <div>
            <p className="text-default-500">Rating</p>
            <p>PG-13</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-2">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-default-500 text-sm">{data.overview}</p>
        </div>
        <Cast castData={data.credits.cast}></Cast>
      </section>
    </main>
  )
}

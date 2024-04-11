'use client'

import { Providers } from '@/app/providers'
import BackButton from '@/components/Buttons/Back'
import Bookmark from '@/components/Buttons/Bookmark'
import LoadingSpinnerScreen from '@/components/loading/LoadingSpinnerScreen'
import Cast from '@/components/movie/Cast'
import MovieChip from '@/components/movie/MovieChip'
import { Button, Image } from '@nextui-org/react'
import useSWR from 'swr'
import { useTheme } from 'next-themes'
import ReactPlayer from 'react-player'

type MovieData = {
  status: number
  message: string
  backdrop_path: string
  title: string
  vote_average: number
  original_title: string
  name: string
  runtime: number
  genres: []
  genre: { name: string }
  spoken_languages: { english_name: string }[] | null
  overview: string
  credits: { cast: [] }
  videos: { results: object[] }
}

export default function Page({ params }: { params: { id: string } }) {
  const { theme } = useTheme()
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR<MovieData>(
    `/api/movie/${params.id}`,
    fetcher
  )

  const lengthConverter = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  if (isLoading) {
    return <LoadingSpinnerScreen />
  }

  if (error || !data || data.status === 404)
    return (
      <main className="h-screen w-screen flex justify-center items-center">
        <h1>Uh, oh. Something went wrong...</h1>
      </main>
    )

  return (
    <main className="flex flex-col h-screen">
      <section className="h-[300px] grid-cols-1 relative">
        <BackButton className="z-10 absolute top-5 left-5" />
        {data.videos.results ? (
          <ReactPlayer
            url={
              'https://www.youtube.com/watch?v=' +
              (data.videos.results &&
                (data.videos.results[0] as { key: string }).key)
            }
            height="100%"
            width="100%"
          ></ReactPlayer>
        ) : (
          <Image
            className="z-0"
            src={'https://image.tmdb.org/t/p/original/' + data.backdrop_path}
            width="100%"
            height={300}
            alt="Cover image"
            radius="none"
            loading="eager"
          ></Image>
        )}
      </section>
      <section
        className={
          (theme === 'light' ? 'bg-white' : 'bg-dark') +
          ' rounded-xl z-20 -mt-4 h-full p-6 flex flex-col gap-4 overflow-scroll scrollbar-hide'
        }
      >
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
          <p className="text-default-500">
            {data.vote_average.toFixed(1)}/10 IMDb
          </p>
        </div>
        <div className="flex gap-2">
          {data.genres.map((genre: MovieData, index: number) => (
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
            {data.spoken_languages && data.spoken_languages[0].english_name}
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

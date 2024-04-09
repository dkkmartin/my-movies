'use client'

import { Card, CardBody, Image } from '@nextui-org/react'
import MovieChipWithID from './MovieChipWithID'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

interface Movie {
  id: number
  poster_path: string
  title: string
  vote_average: number
  genre_ids: number[]
}

export default function MovieCardBig({ movie }: { movie: Movie }) {
  const router = useRouter()
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const {
    data: movieDuration,
    error: movieDurationError,
    isLoading: movieDurationIsLoading,
  } = useSWR(`/api/movie/duration/${movie.id}`, fetcher, {
    refreshInterval: 0,
  })

  const lengthConverter = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  return (
    <Card
      className="w-full"
      shadow="sm"
      isPressable
      onPress={() => {
        router.push(`/movie/${movie.id}`)
      }}
    >
      <CardBody>
        <div className="flex gap-4">
          <Image
            className="min-w-[120px]"
            shadow="sm"
            radius="lg"
            width={120}
            alt={movie.title}
            src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
          />
          <div className="flex flex-col gap-2">
            <b className="text-pretty">{movie.title}</b>
            <div className="flex gap-2 items-center">
              <Image
                src="/MaterialSymbolsKidStar.svg"
                width={20}
                alt="Star"
              ></Image>
              <p className="text-default-500">
                {movie.vote_average.toFixed(1) + '/10 IMDb'}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap w-full">
              {movie.genre_ids.map((chip, index) => (
                <MovieChipWithID key={index} chip={chip}></MovieChipWithID>
              ))}
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/MdiClockOutline.svg" width={20} alt="Star"></Image>
              {movieDurationIsLoading ? null : (
                <p>{lengthConverter(movieDuration && movieDuration.runtime)}</p>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

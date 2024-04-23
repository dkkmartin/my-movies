'use client'

import { Card, CardBody, Divider, Image } from '@nextui-org/react'
import MovieChipWithID from './MovieChipWithID'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import StreamlineInterfaceTimeClockCircleClockLoadingMeasureTimeCircle from '../svg/StreamlineInterfaceTimeClockCircleClockLoadingMeasureTimeCircle'

export interface Movie {
  id: number
  poster_path: string
  profile_path: string
  title: string
  name: string
  original_name: string
  vote_average: number
  genre_ids: number[]
  media_type: string
  known_for_department: string
  gender: number
  known_for: Array<{
    backdrop_path: string
    title: string
    original_title: string
    name: string
  }>
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

  const standardReturn = () => {
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
              <b className="text-pretty">
                {movie.title ? movie.title : movie.original_name}
              </b>
              <div className="flex gap-2 items-center">
                <Image
                  src="/MaterialSymbolsKidStar.svg"
                  width={20}
                  alt="Star"
                ></Image>
                <p className="text-default-500">
                  {movie.vote_average &&
                    movie.vote_average.toFixed(1) + '/10 IMDb'}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap w-full">
                {movie.genre_ids &&
                  movie.genre_ids.map((chip, index) => (
                    <MovieChipWithID key={index} chip={chip}></MovieChipWithID>
                  ))}
              </div>
              <div className="flex gap-2 items-center">
                <StreamlineInterfaceTimeClockCircleClockLoadingMeasureTimeCircle></StreamlineInterfaceTimeClockCircleClockLoadingMeasureTimeCircle>
                {movieDurationIsLoading ? null : (
                  <p>
                    {lengthConverter(movieDuration && movieDuration.runtime)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }

  if (movie.media_type === 'person') {
    return (
      <Card
        className="w-full"
        shadow="sm"
        isPressable
        onPress={() => {
          // change this to person search route
          // router.push(`/movie/${movie.id}`)
        }}
      >
        <CardBody>
          <div className="flex gap-8 justify-center">
            <div className="flex gap-8 ">
              <div className="h-full grid grid-cols-1">
                <div>
                  <b className="text-pretty text-lg">{movie.name}</b>
                  <p>
                    {movie.known_for_department === 'Acting'
                      ? movie.gender === 1
                        ? 'Actress'
                        : 'Actor'
                      : movie.known_for_department}
                  </p>
                </div>

                <div className="max-h-[180px] max-w-[120px]">
                  <Image
                    className="min-w-[120px]"
                    shadow="sm"
                    radius="lg"
                    width={180}
                    height={180}
                    alt={movie.title}
                    src={
                      movie.profile_path
                        ? 'https://image.tmdb.org/t/p/original/' +
                          movie.profile_path
                        : '/actor-image.png'
                    }
                  />
                </div>
              </div>
              <Divider orientation="vertical" className="h-full"></Divider>
            </div>
            <div className="flex flex-col gap-2">
              {movie.known_for.map((mov, index) => (
                <div key={index}>
                  <div>
                    <b className="text-wrap text-sm max-w-[150px] block">
                      {mov.title ? mov.title : mov.name}
                    </b>
                    {mov.backdrop_path ? (
                      <Image
                        shadow="sm"
                        radius="lg"
                        width={150}
                        height={100}
                        alt={movie.title}
                        src={
                          'https://image.tmdb.org/t/p/w300/' + mov.backdrop_path
                        }
                      />
                    ) : null}
                  </div>
                  {index < movie.known_for.length - 1 && (
                    <Divider
                      className="mt-2"
                      orientation="horizontal"
                    ></Divider>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }

  return standardReturn()
}

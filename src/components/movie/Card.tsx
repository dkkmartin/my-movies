'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

interface Movie {
  id: number
  poster_path: string
  title: string
  vote_average: number
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const router = useRouter()
  return (
    <Card
      className="w-[180px] h-full"
      shadow="sm"
      isPressable
      onPress={() => {
        router.push(`/movie/${movie.id}`)
      }}
    >
      <CardBody className="flex-grow-0">
        <Image
          shadow="sm"
          radius="lg"
          width={180}
          alt={movie.title}
          src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
        />
      </CardBody>
      <CardFooter className=" text-small flex flex-col items-start gap-2">
        <b className="text-start">{movie.title}</b>
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
      </CardFooter>
    </Card>
  )
}

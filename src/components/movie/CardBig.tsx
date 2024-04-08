'use client'

import { Card, CardBody, Chip, Image } from '@nextui-org/react'
import MovieChip from './MovieChip'

interface Movie {
  image: string
  title: string
  rating: string
  tags: string[]
  duration: string
}

export default function MovieCardBig({ movie }: { movie: Movie }) {
  return (
    <Card
      className="w-full"
      shadow="sm"
      isPressable
      onPress={() => console.log('item pressed')}
    >
      <CardBody>
        <div className="flex gap-4">
          <Image
            shadow="sm"
            radius="lg"
            width={100}
            alt="spiderman"
            src={movie.image}
          />
          <div className="flex flex-col gap-2">
            <b className="text-pretty">{movie.title}</b>
            <p className="text-default-500">{movie.rating}</p>
            <div className="flex gap-2">
              {movie.tags.map((chip, index) => (
                <MovieChip key={index} chips={[chip]}></MovieChip>
              ))}
            </div>
            <p>{movie.duration}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

'use client'

import { Card, CardBody, Chip, Image } from '@nextui-org/react'

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
                <Chip
                  className="h-5 text-xs py-2"
                  size="sm"
                  color="primary"
                  key={index}
                >
                  {chip}
                </Chip>
              ))}
            </div>
            <p>{movie.duration}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Movie {
  image: string
  title: string
  rating: string
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card
      className="w-[180px]"
      shadow="sm"
      isPressable
      onPress={() => console.log('item pressed')}
    >
      <CardBody>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt="spiderman"
          src={movie.image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between flex flex-col">
        <b className="text-pretty">{movie.title}</b>
        <p className="text-default-500">{movie.rating}</p>
      </CardFooter>
    </Card>
  )
}

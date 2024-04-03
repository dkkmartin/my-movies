import { Button } from '@nextui-org/react'
import MovieCardBig from '../movie/CardBig'

const movies = [
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
    tags: ['action', 'fantasy', 'comedy'],
    duration: '1h 47m',
  },
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
    tags: ['action', 'fantasy', 'comedy'],
    duration: '1h 47m',
  },
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
    tags: ['action', 'fantasy', 'comedy'],
    duration: '1h 47m',
  },
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
    tags: ['action', 'fantasy', 'comedy'],
    duration: '1h 47m',
  },
]

export default function Popular() {
  return (
    <>
      <div className="flex justify-between px-4">
        <h1 className="text-lg font-bold">Popular</h1>
        <Button color="default" variant="bordered" radius="full" size="sm">
          See more
        </Button>
      </div>

      <section className="px-4">
        {movies.map((movie, index) => (
          <div key={index} className=" my-4">
            <MovieCardBig movie={movie}></MovieCardBig>
          </div>
        ))}
      </section>
    </>
  )
}

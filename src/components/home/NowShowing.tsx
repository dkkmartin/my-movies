import { Button } from '@nextui-org/react'
import MovieCard from '../movie/Card'

const movies = [
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
  },
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
  },
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
  },
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
  },
  {
    title: 'Spiderman: No Way Home',
    image: '/spiderman.png',
    rating: '9.1/10 IMDb',
  },
]

export default function NowShowing() {
  return (
    <>
      <div className="flex justify-between px-4">
        <h1 className="text-lg font-bold">Now showing</h1>
        <Button color="default" variant="bordered" radius="full" size="sm">
          See more
        </Button>
      </div>

      <section className="flex gap-4 overflow-auto px-4 pl-4 no-scrollbar">
        {movies.map((movie, index) => (
          <div key={index} className="w-[180px] my-4">
            <MovieCard movie={movie}></MovieCard>
          </div>
        ))}
      </section>
    </>
  )
}

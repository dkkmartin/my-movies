'use client'

import { Button } from '@nextui-org/react'
import MovieCardBig from '../movie/CardBig'
import useSWR from 'swr'
import LoadingSpinner from '../loading/LoadingSpinner'

export default function Popular() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const {
    data: movieData,
    error: movieDataError,
    isLoading: movieDataIsLoading,
  } = useSWR(`/api/movie/popular`, fetcher, {
    refreshInterval: 0,
  })

  if (movieDataIsLoading) {
    return (
      <>
        <div className="flex justify-between px-4">
          <h1 className="text-lg font-bold">Popular</h1>
          <Button color="default" variant="bordered" radius="full" size="sm">
            See more
          </Button>
        </div>
        <LoadingSpinner></LoadingSpinner>
      </>
    )
  }

  if (movieDataError || !movieData || movieData.status === 404)
    return (
      <>
        <div className="flex justify-between px-4">
          <h1 className="text-lg font-bold">Popular</h1>
          <Button color="default" variant="bordered" radius="full" size="sm">
            See more
          </Button>
        </div>
        <main className="flex justify-center items-center py-20">
          <h1>Uh, oh. Something went wrong...</h1>
        </main>
      </>
    )

  return (
    <>
      <div className="flex justify-between px-4">
        <h1 className="text-lg font-bold">Popular</h1>
        <Button color="default" variant="bordered" radius="full" size="sm">
          See more
        </Button>
      </div>

      <section className="px-4">
        {movieData &&
          movieData.results.map((movie: any, index: number) => (
            <div key={index} className=" my-4">
              <MovieCardBig movie={movie}></MovieCardBig>
            </div>
          ))}
      </section>
    </>
  )
}

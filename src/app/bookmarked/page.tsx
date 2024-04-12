'use client'

import Header from '@/components/header/Header'
import MovieCard from '@/components/movie/Card'
import { useState } from 'react'
import useSWR from 'swr'

export default function Bookmarked() {
  // SAVE FOR LATER USE MAYBE
  // function SendData(body: object) {
  //   const fetcher = (url: string) =>
  //     fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(body),
  //     }).then((res) => res.json())
  //   const { data, error, isLoading } = useSWR(`/api/bookmark/add`, fetcher, {
  //     refreshInterval: 0,
  //   })
  //   return { data, error, isLoading }
  // }

  // const response = SendData({
  //   media_type: 'movie',
  //   media_id: 550,
  //   favorite: true,
  // })
  // console.log(response.data)

  const [storage, setStorage] = useState(() => {
    if (localStorage.getItem('bookmarks')) {
      return localStorage.getItem('bookmarks')
    }
  })
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const {
    data: movieData,
    error: movieDataError,
    isLoading: movieDataIsLoading,
  } = useSWR(`/api/movie/popular`, fetcher, {
    refreshInterval: 0,
  })

  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-between px-4">
        <h1 className="text-lg font-bold">Bookmarked</h1>
        <section className="flex flex-col">
          {movieData &&
            movieData.results.map((movie: any, index: number) => (
              <MovieCard key={index} movie={movie}></MovieCard>
            ))}
        </section>
      </div>
    </>
  )
}

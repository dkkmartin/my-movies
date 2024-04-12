'use client'

import Header from '@/components/header/Header'
import MovieCardBig from '@/components/movie/CardBig'
import { useEffect, useState } from 'react'
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

  const [storage, setStorage] = useState<string[]>([])
  const [movieData, setMovieData] = useState<any[]>([])

  useEffect(() => {
    const bookmarks = localStorage.getItem('bookmarks')
    if (bookmarks) {
      setStorage(JSON.parse(bookmarks))
    }
  }, [])

  useEffect(() => {
    async function getMovieData(id: string | number) {
      const response = await fetch(`/api/movie/${id}`)
      const data = await response.json()
      if (data.genres) {
        data.genre_ids = data.genres.map((genre: { id: number }) => genre.id)
        delete data.genres
      }
      setMovieData((prevMovieData) => [...prevMovieData, data])
    }

    storage.forEach((id) => {
      getMovieData(id)
    })
  }, [storage])

  useEffect(() => {
    console.log(movieData)
  }, [movieData])

  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-between px-4 gap-8">
        <h1 className="text-lg font-bold">Bookmarked</h1>
        <section className="flex flex-col gap-4">
          {movieData &&
            movieData.map((movie: any, index: number) => (
              <MovieCardBig key={index} movie={movie}></MovieCardBig>
            ))}
        </section>
      </div>
    </>
  )
}

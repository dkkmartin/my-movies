'use client'

import Header from '@/components/header/Header'
import MovieCardBig from '@/components/movie/CardBig'
import { useEffect, useState } from 'react'

export default function Bookmarked() {
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
        <section className="flex flex-col gap-4 pb-20">
          {movieData &&
            movieData.map((movie: any, index: number) => (
              <MovieCardBig key={index} movie={movie}></MovieCardBig>
            ))}
        </section>
      </div>
    </>
  )
}

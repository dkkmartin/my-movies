'use client'

import { Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import MovieCardBig, { Movie } from '../movie/CardBig'

export default function Search() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const [input, setInput] = useState('')
  const [shouldFetch, setShouldFetch] = useState(false)
  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/movie/search/${input}` : null,
    fetcher,
    {
      refreshInterval: 0,
    }
  )

  useEffect(() => {
    if (input === undefined || input === '') {
      setShouldFetch(false)
    }
  }, [input])

  return (
    <div className="p-4">
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          setShouldFetch(true)
        }}
        type="search"
        label="Search"
      ></Input>
      <section className="flex flex-col gap-2 pt-4">
        {data &&
          data.results.map((movie: Movie, index: number) => (
            <MovieCardBig key={index} movie={movie}></MovieCardBig>
          ))}
      </section>
    </div>
  )
}

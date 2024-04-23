'use client'

import { Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useDebounce } from '@uidotdev/usehooks'
import MovieCardBig, { Movie } from '../movie/CardBig'
import LoadingSpinner from '../loading/LoadingSpinner'

export default function Search() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const { data, error, isLoading } = useSWR(
    debouncedSearchTerm ? `/api/movie/search/${debouncedSearchTerm}` : null,
    fetcher,
    {
      refreshInterval: 0,
    }
  )

  return (
    <div className="p-4">
      <Input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
        type="search"
        label="Search"
      ></Input>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <section className="flex flex-col gap-2 pt-4">
          {data &&
            data.results.map((movie: Movie, index: number) => (
              <MovieCardBig key={index} movie={movie}></MovieCardBig>
            ))}
        </section>
      )}
    </div>
  )
}

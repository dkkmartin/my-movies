'use client'

import { Button } from '@nextui-org/react'
import useSWR from 'swr'

export default function Login() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const {
    data: movieData,
    error: movieDataError,
    isLoading: movieDataIsLoading,
  } = useSWR(`/api/movie/popular`, fetcher, {
    refreshInterval: 0,
  })

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Button color="primary">Authenticate</Button>
    </main>
  )
}

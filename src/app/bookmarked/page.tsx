'use client'

import { Button } from '@nextui-org/react'
import MovieCardBig from '@/components/movie/CardBig'
import LoadingSpinner from '@/components/loading/LoadingSpinner'
import Header from '@/components/header/Header'
import useSWR from 'swr'

export default function Bookmarked() {
  function SendData(body: object) {
    const fetcher = (url: string) =>
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }).then((res) => res.json())
    const { data, error, isLoading } = useSWR(`/api/bookmark/add`, fetcher, {
      refreshInterval: 0,
    })
    return { data, error, isLoading }
  }

  const response = SendData({
    media_type: 'movie',
    media_id: 550,
    favorite: true,
  })
  console.log(response.data)

  return (
    <>
      <Header></Header>
      <div className="flex justify-between px-4">
        <h1 className="text-lg font-bold">Bookmarked</h1>
      </div>
    </>
  )
}

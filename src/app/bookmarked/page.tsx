'use client'

import { Button } from '@nextui-org/react'
import MovieCardBig from '@/components/movie/CardBig'
import LoadingSpinner from '@/components/loading/LoadingSpinner'
import Header from '@/components/header/Header'
import useSWR from 'swr'

export default function Bookmarked() {
  return (
    <>
      <Header></Header>
      <div className="flex justify-between px-4">
        <h1 className="text-lg font-bold">Bookmarked</h1>
      </div>
    </>
  )
}

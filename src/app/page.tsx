'use client'

import Header from '@/components/header/Header'
import { Providers } from './providers'
import NowShowing from '@/components/home/NowShowing'
import Popular from '@/components/home/Popular'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Search from '@/components/home/Search'

export default function Home() {
  const [shouldFetch, setShouldFetch] = useState(false)
  const searchParams = useSearchParams()
  const token = searchParams.get('request_token')
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/auth/session?request_token=${token}` : null,
    fetcher,
    {
      refreshInterval: 0,
    }
  )

  useEffect(() => {
    if (token !== null) {
      setShouldFetch(true)
    }
  }, [token])

  return (
    <Providers>
      <Header></Header>
      <main>
        <Search></Search>
        <NowShowing></NowShowing>
        <Popular></Popular>
      </main>
    </Providers>
  )
}

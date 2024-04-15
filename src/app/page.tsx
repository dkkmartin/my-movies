'use client'

import Header from '@/components/header/Header'
import { Providers } from './providers'
import NowShowing from '@/components/home/NowShowing'
import Popular from '@/components/home/Popular'
import { useSearchParams } from 'next/navigation'
import setCookie from './actions/setCookie'
import { useEffect } from 'react'

export default function Home() {
  const searchParams = useSearchParams()
  const token = searchParams.get('request_token')

  useEffect(() => {
    if (token !== null) {
      setCookie(token)
    }
  }, [token])

  return (
    <Providers>
      <Header></Header>
      <main>
        <NowShowing></NowShowing>
        <Popular></Popular>
      </main>
    </Providers>
  )
}

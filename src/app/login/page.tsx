'use client'

import LoadingSpinnerScreen from '@/components/loading/LoadingSpinnerScreen'
import { Button } from '@nextui-org/react'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(`/api/auth/request`, fetcher, {
    refreshInterval: 0,
  })

  function handleClick() {
    const redirectUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://my-movies-taupe.vercel.app'
        : 'http://localhost:3001'
    router.push(
      `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${redirectUrl}`
    )
  }

  if (isLoading) {
    return <LoadingSpinnerScreen />
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Button onClick={handleClick} color="primary">
        Authenticate
      </Button>
    </main>
  )
}

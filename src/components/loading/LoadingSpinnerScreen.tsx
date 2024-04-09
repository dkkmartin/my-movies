'use client'

import { Spinner } from '@nextui-org/react'

export default function LoadingSpinnerScreen() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Spinner size="lg"></Spinner>
    </main>
  )
}

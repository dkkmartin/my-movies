'use client'

import { Spinner } from '@nextui-org/react'

export default function LoadingSpinner() {
  return (
    <main className="flex justify-center items-center py-20">
      <Spinner size="lg"></Spinner>
    </main>
  )
}

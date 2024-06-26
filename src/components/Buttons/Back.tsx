'use client'

import React, { SVGProps } from 'react'
import { useRouter } from 'next/navigation'

export function BackButton(props: SVGProps<SVGSVGElement>) {
  const router = useRouter()

  function handleClick() {
    router.back()
  }
  return (
    <svg
      onClick={() => handleClick()}
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#FFF"
        d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
      ></path>
    </svg>
  )
}
export default BackButton

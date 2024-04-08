'use client'

import { Chip } from '@nextui-org/react'

type Chips = string[]

export default function MovieChip({ chips }: { chips: Chips }) {
  return (
    <>
      {chips.map((chip, index) => (
        <Chip
          className="h-5 text-xs py-2"
          size="sm"
          color="primary"
          key={index}
        >
          {chip}
        </Chip>
      ))}
    </>
  )
}

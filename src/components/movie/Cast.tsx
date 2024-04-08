'use client'

import { Button } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { useState } from 'react'

export type CastType = CastMember[]
export type CastMember = { name: string; profile_path: string | null }

export default function Cast({ castData }: { castData: CastType }) {
  const [moreButtonClicked, setMoreButtonClicked] = useState(false)

  return (
    <div className="flex gap-4 flex-col w-full">
      <div className="w-full flex justify-between">
        <h3 className="text-xl font-bold">Cast</h3>
        <Button
          onClick={() => setMoreButtonClicked(!moreButtonClicked)}
          color="default"
          variant="bordered"
          radius="full"
          size="sm"
        >
          {moreButtonClicked ? 'See less' : 'See more'}
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        {(moreButtonClicked ? castData : castData.slice(0, 4)).map(
          (cast: CastMember, index: number) => (
            <div key={index} className="flex flex-col items-center w-[72px]">
              <Image
                src={
                  cast.profile_path
                    ? 'https://image.tmdb.org/t/p/original/' + cast.profile_path
                    : '/actor-image.png'
                }
                width="100%"
                height={70}
                alt={cast.name}
              ></Image>
              <p className="text-center text-sm">{cast.name}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

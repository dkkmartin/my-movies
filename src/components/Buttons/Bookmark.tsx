import React, { SVGProps, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useLocalStorage } from '@uidotdev/usehooks'

export function Bookmark(props: SVGProps<SVGSVGElement>) {
  const params = useParams<{ id: string }>()
  const [bookmarks, saveBookmark] = useLocalStorage<string[]>('bookmarks', [])
  const [clicked, isClicked] = useState(false)

  useEffect(() => {
    const bookmarks = localStorage.getItem('bookmarks')
    if (bookmarks !== null) {
      const parsedBookmarks: string[] | null = JSON.parse(bookmarks)
      if (parsedBookmarks !== null) {
        parsedBookmarks.map((id: string) => {
          if (id === params.id) {
            isClicked(true)
          }
        })
      }
    }
  }, [params.id])

  const handleClick = () => {
    const currentBookmarks = bookmarks || []
    if (!currentBookmarks.includes(params.id)) {
      saveBookmark([...currentBookmarks, params.id])
    } else {
      const newBookmarks = currentBookmarks.filter((id) => id !== params.id)
      saveBookmark(newBookmarks)
    }
  }

  return (
    <svg
      onClick={() => {
        handleClick()
        isClicked(!clicked)
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={clicked ? '#ffc319' : '#000'}
        d="M6 19.5V5.615q0-.69.463-1.152T7.615 4h8.77q.69 0 1.152.463T18 5.615V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.615q0-.23-.192-.423T16.385 5h-8.77q-.23 0-.423.192T7 5.615zM7 5h10z"
      ></path>
    </svg>
  )
}
export default Bookmark

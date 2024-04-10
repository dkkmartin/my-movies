'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <Navbar className="fixed top-[calc(100%-64px)]">
      <NavbarContent className="sm:flex gap-4 w-full justify-around" justify="">
        <NavbarItem>
          <Button isIconOnly as={Link} color="primary" href="/" variant="light">
            <Image
              src={'/FluentMoviesAndTv16Regular.svg'}
              width={28}
              height={28}
              alt="Home"
            ></Image>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly as={Link} color="primary" href="#" variant="light">
            <Image
              src={'/FluentTicketDiagonal24Regular.svg'}
              width={28}
              height={28}
              alt="Home"
            ></Image>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            as={Link}
            color="primary"
            href="/bookmarked"
            variant="light"
          >
            <Image
              src={'/MaterialSymbolsBookmarkOutline.svg'}
              width={28}
              height={28}
              alt="Home"
            ></Image>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

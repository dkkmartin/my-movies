'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
import FluentMoviesAndTv16Regular from '../svg/FluentMoviesAndTv16Regular'
import FluentTicketDiagonal16Regular from '../svg/FluentTicketDiagonal16Regular'
import MaterialSymbolsLightBookmarkOutline, {
  NavbarBookmark,
} from '../svg/NavbarBookmark'

export default function NavigationBar() {
  return (
    <Navbar className="fixed top-[calc(100%-64px)]">
      <NavbarContent className="sm:flex gap-24 w-full" justify="center">
        <NavbarItem>
          <Button isIconOnly as={Link} color="primary" href="/" variant="light">
            <FluentMoviesAndTv16Regular></FluentMoviesAndTv16Regular>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly as={Link} color="primary" href="#" variant="light">
            <FluentTicketDiagonal16Regular></FluentTicketDiagonal16Regular>
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
            <NavbarBookmark></NavbarBookmark>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

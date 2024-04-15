import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // let cookie = request.cookies.get('SID')
  // if (!cookie) return NextResponse.redirect(new URL('/login', request.url))
}

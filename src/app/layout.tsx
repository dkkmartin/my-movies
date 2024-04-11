import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/navbar/Navbar'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My movies',
  description: 'My movies',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' max-w-[530px] m-auto'}>
        <Providers>
          {children}
          <NavigationBar></NavigationBar>
        </Providers>
      </body>
    </html>
  )
}

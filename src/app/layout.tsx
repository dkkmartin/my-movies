import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/navbar/Navbar'

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
        {children}
        <NavigationBar></NavigationBar>
      </body>
    </html>
  )
}

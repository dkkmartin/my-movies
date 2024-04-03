import Header from '@/components/header/Header'
import { Providers } from './providers'
import NowShowing from '@/components/home/NowShowing'
import Popular from '@/components/home/Popular'

export default function Home() {
  return (
    <Providers>
      <Header></Header>
      <main>
        <NowShowing></NowShowing>
        <Popular></Popular>
      </main>
    </Providers>
  )
}

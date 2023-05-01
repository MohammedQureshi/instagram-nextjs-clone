import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from './components/Carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Carousel />
    </main>
  )
}

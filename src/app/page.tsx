import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from './components/Carousel'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  let data = null;
  data = await fetch('http://localhost:3000/api/users', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())  
  .catch(err => console.log(err))
  
  return (
    <main>
      <div>
        <Carousel users={data} />
      </div>
    </main>
  )
}

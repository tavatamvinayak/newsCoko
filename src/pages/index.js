import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNews from '@/components/TopNews/TopNews'
import Custom from '@/components/Custom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      <div className=''>

        <>
          <Custom/>
        </>
        
        <main className='p-2  text-center'>
          <h1 className='text-4xl'> International Top News</h1>
          <TopNews/>
        </main>
       
      </div>
      
      </>
  )
}

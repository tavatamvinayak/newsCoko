import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNews from '@/components/TopNews/TopNews'
import Custom from '@/components/Custom'

const inter = Inter({ subsets: ['latin'] })
import LoadingBar from 'react-top-loading-bar'
import { useRef } from 'react'

// spinner






export default function Home() {

  const ref = useRef(null)


  return (
      <>
      <LoadingBar color='#f11946' ref={ref} />




   <div>
    <Custom/>
   </div>
          
        
        
        <main className='p-2  text-center'>
          <h1 className='text-4xl'> International Top News</h1>
          <TopNews/>
        </main>
       
   
        
      </>
  )
}

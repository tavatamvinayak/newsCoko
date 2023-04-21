import React, { useEffect, useState } from 'react'
import IndiaNews from '@/components/TopNews/IndiaNews'
function india() {

  const [JapanNews, setJapanNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=jp&apiKey=77461693cad145858d4b3484d13921ed')
      .then((e) => e.json())
      .then((e) => {
        console.log(e.articles)
        setJapanNews(e.articles )

      })
      .catch((err) => console.error(err))
  }, []);


  return (
    <div>
      <div className='text-center text-3xl'> Japan News Top </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            {
              JapanNews.map((e ,i) => {
                return (
                  <>
                  <IndiaNews i={i} title={e.title} description={e.description} url={e.url} author={e.author} urlToImage={e.urlToImage} />
                  </>
                )
              })
            }


          </div>
        </div>
      </section>
    </div>
  )
}

export default india

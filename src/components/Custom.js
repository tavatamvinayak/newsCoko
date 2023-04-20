import React, { useEffect, useState } from 'react'
import IndiaNews from '@/components/TopNews/IndiaNews'
function Custom() {

    
      const [Search, setSearch] = useState(null);
    const [SearchIN, setSearchIN] = useState(null);



    const SearchNews = (e) => {
        e.preventDefault();
        setSearch(SearchIN)
        console.log(SearchIN)
        

    }


    return (
        <>
            <div className='text-center text-3xl'> Search News Top {Search} </div>

            <form onSubmit={SearchNews} className='text-center'>
                <input type="text" onChange={e => setSearchIN(e.target.value)} className='border border-black' />
                <button type="submit"   >search News </button>
            </form>


            <div>
                <Links Search={Search}/> 
            </div>
        </>
    )
}

export default Custom







function Links({Search}) {

    const [customNews, setcustomNews] = useState([]);
    const [FFFF, setFFFF] = useState(Search);
    useEffect(() => {
        const res = fetch(`https://newsapi.org/v2/top-headlines?q=${FFFF}&apiKey=77461693cad145858d4b3484d13921ed`)
            .then((e) => e.json())
            .then((e) => {
                console.log(e.articles)
                setcustomNews(e.articles)
                
            })
            .catch((err) => console.error(err));

        console.log(Search + "fetch api")


    }, []);

    return (
        <div>
            {Search}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

                        {
                            customNews.map((e) => {
                                return (
                                    <>
                                    <h1>{e.title}</h1>
                                        {/* <IndiaNews title={e.title} description={e.description} url={e.url} author={e.author} urlToImage={e.urlToImage} /> */}
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



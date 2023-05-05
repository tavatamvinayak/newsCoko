import React, { useEffect, useState, useRef } from 'react'



const TopNews = () => {
  
    const [NewsTop, setNewsTop] = useState([]);
    // const NewsTop = [{ title: "123", description: "123", urlToImage: "123", url: "123" }]  /// test

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=77461693cad145858d4b3484d13921ed&pagesize=${`10`}`)
            .then((e) => e.json())
            .then((e) => {
                // console.log(e)
                setNewsTop(e.articles)

            })
            .catch((err) => console.error(err))
    }, []);
    

    NewsTop.map((e) => {

        if (e.description != null) {
            e.description = e.description.slice(0, 60)
        } else {
            e.description = "no write description here"
        }



    })

    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        {
                            NewsTop.map((e, i) => {

                                if (e.urlToImage === null) {
                                    e.urlToImage = "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0418%2Fr1160433_1296x729_16%2D9.jpg"
                                }
                                if (e.author === null) {
                                    e.author = "don't know writer"
                                }
                                return (
                                    <>
                                        <div className=" md:w-1/3 mb-10 px-4" key={i}>
                                            <div className="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" className="object-cover object-center h-full w-full" src={`${e.urlToImage}`} />
                                            </div>
                                            <h2 className="title-font text-x font-medium text-gray-900 mt-6 mb-3">{e.title}</h2>
                                            <p className="leading-relaxed text-base"> {`${e.description = e.description.slice(0, 60)}.........`} </p>
                                            <h2 className=' title-font text-x text-black'>"author" : {e.author} </h2>
                                            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <a href={`${e.url}`} target="_blank" >read Link</a> </button>
                                        </div>

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






export default TopNews;




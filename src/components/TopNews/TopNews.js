import React, { useEffect, useState } from 'react'
import News from './News';




const TopNews = () => {
    const [NewsTop, setNewsTop] = useState([]);
    // const NewsTop = [{ title: "123", description: "123", urlToImage: "123", url: "123" }]  /// test

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=77461693cad145858d4b3484d13921ed')
            .then((e) => e.json())
            .then((e) => {
                console.log(e)
                setNewsTop(e.articles)
               
            })
            .catch((err) => console.error(err))
    }, []);


    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        {
                            NewsTop.map((e, index) => {

                                if(e.urlToImage ===null){
                                    e.urlToImage ="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0418%2Fr1160433_1296x729_16%2D9.jpg"
                                }
                                if(e.author ===null){
                                    e.author = "don't know writer"
                                }
                                return (
                                    <>
                                        
                                            <News title={e.title} description={e.description} url={e.url} author={e.author} urlToImage={e.urlToImage} />
                                      
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



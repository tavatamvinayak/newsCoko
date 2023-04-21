import React, { useEffect, useState } from 'react'

function Custom() {

    const [SearchIN, setSearchIN] = useState();
    const [Search, setSearch] = useState();


    const SearchNews = (e) => {
        e.preventDefault();
        setSearch(SearchIN)
        console.log(SearchIN)
    }



    const [mounted, setMounted] = useState(true);
    const toggle = () => setMounted(!mounted);

    return (
        <>
            <div className='text-center text-3xl'> Search News Top {SearchIN} </div>

            <form onSubmit={SearchNews} className='text-center'>
                <input type="text" onChange={e => setSearchIN(e.target.value)} className='border border-black rounded h-7 px-4' />
                <button type="submit" onClick={toggle} className='mx-4 bg-[#ffeed6] p-3 rounded-lg my-2' > Dubble Click plz Search News </button>
            </form>


            <div>
                <div>
                    {/* {Search} */}
                    <section className="text-gray-600 body-font bg-slate-100" >
                        <div className="container px-5 py-24 mx-auto">

                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">


                                {mounted && <LifecycleDemo Search={Search} />}

                            </div>
                        </div>
                    </section >
                </div >
            </div>
        </>
    )
}


function LifecycleDemo({ Search }) {

    const [Custome, setCustome] = useState([]);

    useEffect(() => {
        const input = Search
        console.log(Search + " fetch search")
        console.log(input)
        const res = fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=77461693cad145858d4b3484d13921ed`)
            .then((e) => e.json())
            .then((e) => {
                console.log(e)
                setCustome(e.articles)
            })
            .catch((err) => console.error(err));

        // console.log(input + "fetch api")
    }, []);
    Custome.map((e) => {
        
        if (e.description != null) {
            e.description = e.description.slice(0, 60)
        } else {
            e.description = "no write description here"
        }
    })

    return (
        <>
            {
                Custome.map((e ,i) => {
                    return (
                        <>

                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6  " key={i}>
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src={e.urlToImage} />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{e.title}</h2>
                                <p className="text-base leading-relaxed mt-2">
                                    {e.description}

                                </p>
                                <p>{e.author}</p>
                                <a className="text-indigo-500 inline-flex items-center mt-3 p-2 rounded-lg bg-[#ffeed6]    " href={`${e.url}`}>Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>

                        </>
                    )
                })
            }

        </>
    )
}






export default Custom








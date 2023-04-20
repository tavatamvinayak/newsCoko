import React from 'react'

function News({urlToImage , title , description , url ,author }) {
    return (
        <>
            <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src={`${urlToImage}`} />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{title}</h2>
                <p className="leading-relaxed text-base"> {description} </p>
                <h2 className=' text-2xl text-black'>"author" : {author} </h2>
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <a href={`${url}`} target="_blank" >read Link</a> </button>
            </div>
        </>
    )
}

export default News

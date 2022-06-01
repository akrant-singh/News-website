import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
export default function News(props) {
  var [articles, setarticles] = useState([])
  var [totalResult, settotalResults] = useState(0)
  var [page, serpage] = useState(1)
  var [pageSize, setpageSize] = useState(12)
  async function getData() {
    setpageSize(1)
    if (props.search == "None")
      var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&language=${props.language}&page=${page}&pageSize=${pageSize}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
    else
      var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&page=${page}&pageSize=${pageSize}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
    var result = await rawdata.json()
    setarticles(result.articles)
    settotalResults(result.totalResults)
  }

  useEffect(() => {
    getData()
  }, [props.category, props.search, props.language])

  var fetchMoreData = async () => {
    setpageSize(++page)
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&language=${props.language}&page=${page}&pageSize=${pageSize}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
    var result = await rawdata.json()
    setarticles(articles.concat(result.articles))
  }

  return (
    <>
      <h5 className='mt-3 background text-light p-2 text-center'>{props.category} News Section</h5>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResult}
        loader={<Spinner />}
      >
        <div className='row'>
          {
            articles.map((item, index) => {
              return <div key={index} className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <NewsItem
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  source={item.source}
                  date={item.publishedAt}
                />
              </div>
            })
          }
        </div>
      </InfiniteScroll>
    </>
  )

}

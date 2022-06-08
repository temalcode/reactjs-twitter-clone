import React from 'react'
import './TrendItem.css'

function TrendItem({category, hashtag, tweets}){
  return(
    <div className="trendItem">
      <p className="trendItem__category">{category}</p>
      <h4 className="trendItem__hashtag">{hashtag}</h4>
      <p className="trendItem__tweets">{tweets} Tweets</p>
    </div>
  )
}

export default TrendItem
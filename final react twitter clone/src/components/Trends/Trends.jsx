import React from 'react'
import './trends.css'
import TrendItem from './TrendItem'

function Trends(){
  return (
    <div className="trends">
      <h3>Trends for you</h3>
      <div>
        <TrendItem category="Trending in world" hashtag="#JavaScript" tweets="12.5K"/>
        <TrendItem category="Trending in Asia" hashtag="#GitHub" tweets="1.8K"/>
        <TrendItem category="Software - Trending" hashtag="#Microsoft" tweets="123.78K"/>
        <TrendItem category="Technology - Trending" hashtag="#ReactJS" tweets="3.8M"/>
        <TrendItem category="Movies" hashtag="#Movie" tweets="1.8K"/>
        <TrendItem category="Mobile Technology" hashtag="#iPhone" tweets="90.1K"/>
      </div>
    </div>
  )
}

export default Trends
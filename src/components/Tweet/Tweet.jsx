import { React, useState, useEffect } from "react";
import Avatar from "@mui/icons-material/AccountCircle";
import "./tweet.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import { Button } from "@mui/material";

function Tweet() {

  const [tweetCaption, setTweetCaption] = useState("");
  const [tweetImg, setTweetImg] = useState("");
  const [tweets, setTweets] = useState();


  // useEffect(() => {
  //   localStorage.setItem("allTweets", JSON.stringify(tweets));
  // }, [tweets])

  return (
    <div className="tweet__wrapper">
      <div className="home__tweet">
        <Avatar className="tweet__profile" />
        <div className="tweet__form">
          <div>
            <input
              type="text"
              placeholder="What's happening ?"
              className="tweet__input"
              onChange={(e) => setTweetCaption(e.target.value)}
              value={tweetCaption}
            />
            <br/>
            <input
              type="text"
              placeholder="Image URL (optional)"
              className="tweet__input-img"
              onChange={(e) => setTweetImg(e.target.value)}
              value={tweetImg}
            />
          </div>
        </div>
      </div>
      <div className="tweet__bottom">
        <div className="tweet__bottom-left">
          <div className="tweet__item">
            <div className="tweet__icon">
              <ImageOutlinedIcon />
            </div>
          </div>
          <div className="tweet__item">
            <div className="tweet__icon">
              <GifBoxOutlinedIcon />
            </div>
          </div>
          <div className="tweet__item">
            <div className="tweet__icon">
              <InsertChartOutlinedOutlinedIcon />
            </div>
          </div>
          <div className="tweet__item">
            <div className="tweet__icon">
              <SentimentSatisfiedAltOutlinedIcon />
            </div>
          </div>
          <div className="tweet__item">
            <div className="tweet__icon">
              <EventRepeatOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="tweet__bottom-left">
          <Button
            type="submit"
            // onClick={() => setTweets([...tweets, { caption: tweetCaption, image: tweetImg }])}
            className="tweet__button"
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

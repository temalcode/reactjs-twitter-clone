import { React, useState, useEffect } from "react";
import Tweet from "../components/Tweet/Tweet";
import Post from "../components/Post/Post";
import "./homePage.css";

function HomePage() {

  const [allTweets, setAllTweets] = useState(
    JSON.parse(localStorage.getItem("allTweets"))
  );

  function getFromStorage() {
    console.log("add to store");
    setAllTweets(JSON.parse(localStorage.getItem("allTweets")));
  }
  // console.log(allTweets);
  // let arr = ["apple", "banana", "mango"]

  useEffect(() => {
    window.addEventListener("storage", getFromStorage);

    return () => {
      window.removeEventListener("storage", getFromStorage);
    };
  }, []);

  return (
    <div className="home">
      <h3 className="home__title">Home</h3>
      <Tweet />

      {allTweets.map((tweet) => {
        return (
          <Post
            key={allTweets.indexOf(tweet)}
            name="Jhon Doe"
            username="@jhondoe"
            caption={tweet.caption}
            image={tweet.image}
          />
        );
      })}

    </div>
  );
}

export default HomePage;

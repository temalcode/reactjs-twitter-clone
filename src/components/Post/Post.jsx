import React from 'react'
import Avatar from '@mui/icons-material/AccountCircle'
import './post.css'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

function Post(props){
  return(
    <div className="post__wrapper">
      <div className="post">
      <div><Avatar className="post__profile"></Avatar></div>
      <div className="post__body">
        <div className="post__title"> {props.name} <span className="post__username">{props.username}</span> </div>
        <div>{props.caption}</div>
        <img src={props.image} alt={props.caption} className="post__image"/>
      </div>
      </div>
      <div className="post__bottom">
        <div className="post__bottom-item post__bottom-chat">
        <ChatBubbleOutlineRoundedIcon />
        </div>
        <div className="post__bottom-item post__bottom-retweet">
        <LoopRoundedIcon />
        </div>
        <div className="post__bottom-item post__bottom-like">
        <FavoriteBorderRoundedIcon />
        </div>
        <div className="post__bottom-item post__bottom-share">
        <IosShareRoundedIcon />
        </div>
      </div>
    </div>
  )
}

export default Post
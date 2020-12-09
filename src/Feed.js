import React from 'react'
import Container from '@material-ui/core/Container';
import { Avatar, Button } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import Farmersprotest1 from "./Farmersprotest1.jpg"
import NDTV from "./NDTV.png"
import Billgates from "./Billgates.jpg"
import BillGatespic from "./BillGatespic.jpg"
import "./Feed.css"



function Feed() {
  return (
    <div className="feed">
      <Container style={{width: "40rem", height:'1000px'}}>
        <div className="home">
          <h2>Home</h2>
        </div>
        <form>
        <div className="tweetBox__input">
          <Avatar />
        <textarea
            placeholder="What's happening?"
            />  
          </div>
          <Button className="tweetBox__tweetButton">
          Tweet
        </Button>
        <div className="post__headlline">
        <Avatar src={Billgates}/>
        <h4>@Bill Gates 15h</h4>
       </div>
       <h3>Here are five books that I’d recommend as we wrap up 2020. I hope you find something that helps you—or the book lover in your life—finish the year on a good note.</h3>
       <img src={BillGatespic} alt="MaskGrouph" className="avatar" style={{width: "35rem"}}/>
       <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>

       <div className="post__headlline" style={{ paddingTop:"3rem"}}>
        <Avatar src={NDTV}/>
        <h4>@NDTV 15h</h4>
       
       <h3>#LeftRightCenter| "This may be the only exception in the world, that during a pandemic, there is such a peaceful protest for the last 2 months": Mahesh Inder Grewal, Akali Dal</h3>
       <img src={Farmersprotest1} alt="MaskGrouph" className="avatar" style={{width: "35rem"}}/>
       </div>


          </form>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        

      </Container>

      
    </div>
  )
}

export default Feed

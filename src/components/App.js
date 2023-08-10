import video from "../data/video.js";
import React, {useState} from 'react';
import Video from "./Video.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)

  function increaseAmt(upOrDown) {
    if (upOrDown === "up") {
      setUpVotes(()=> upVotes + 1 )
    }
    else if (upOrDown === "down" ) {
      setDownVotes(()=> downVotes +1 )
    }
  }


  return (
    <div className="App">
      <Video video={video}/>
      <Votes upVotes={upVotes} downVotes={downVotes} increaseAmt={increaseAmt}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;

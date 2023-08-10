import React from 'react'

function Votes({upVotes, downVotes, increaseAmt}) {
    function handleClick(e) {
        increaseAmt(e.target.value)
    }

  return (
    <div>
      <button value="up" onClick={handleClick}>👍 {upVotes}</button>
      <button value="down" onClick={handleClick}>👎 {downVotes}</button>
    </div>
  )
}

export default Votes
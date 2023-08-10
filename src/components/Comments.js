import React, {useState} from 'react'

function Comments({comments}) {
    const [showComments, setShowComments] = useState(true)

    const renderComments = comments.map((comment) => <p key={comment.id}>{comment.user} <br /> {comment.comment}</p>)
    function toggleComments() {
        setShowComments(!showComments)
    }
    
  return (
    <div>
        <button onClick={toggleComments}>{showComments? "Hide Comments" : "Show Comments"} </button>
        {showComments ? 
            <div className="comments_container">
                <h3>{comments.length} Comments</h3>
                {renderComments}
            </div> :
            null}
    </div>
  )
}

export default Comments
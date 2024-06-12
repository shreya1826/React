import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment(){

    let [comments, setComments] = useState([
        {
            username: "@su",
            remark: "good job",
            rating: "5",
        },
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("added new comment!");
    };

    return(
        <>
        <div>
            <h3>All Comments!</h3>
            
            {comments.map((comment, idx) => (
         <div className="comment" key={idx}>
         <span>Remark: {comment.remark}</span>
         <br /> 
         <span>Rating: {comment.rating}</span>
         <br /> 
         <p>Username: {comment.username}</p>
         <br />
     </div>
            ))}
        </div>
        <hr />
        <CommentsForm addNewComment={addNewComment}/>
        </>
    );
}
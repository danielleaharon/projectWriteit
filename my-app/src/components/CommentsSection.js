import React from "react"
import Comment from "./comment";
import { isAuth } from '../actions/auth';


export default function CommentsSection({ comments, postId, setComments }) {

  const  {username}=isAuth();
    const onClick = () => {
        fetch('http://localhost:8081/comments/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                content: inputRef.current.value,
                post: postId
            })
        }).then(response => response.json()).then(
            data => {
                if (data.status === "success") {
                    inputRef.current.value = '';
                    fetch('http://localhost:8081/comments/postid/' + postId)
                        .then(response => response.json()).then(
                            data => setComments(data)
                        )
                }
            }
        )
    }

    const inputRef = React.useRef(null);

    return (
        <>
            <input ref={inputRef} placeholder="new comment" class="w3-border w3-padding w3-input w3-margin-bottom" />
            <button onClick={onClick} type="button" className="w3-button w3-theme-d1 w3-margin-bottom">Add</button>
            {comments.map((data, key) => {
                return <Comment content={data.content} username={data.username} key={key} />
            })}
        </>
    );
}
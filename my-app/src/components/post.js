import React from "react"
import { isAuth } from '../actions/auth';
import '../home.css';
import { useHistory } from 'react-router-dom';
import NewPostUpdate from "../pages/newpostUpdate";





import Comments from "./comments"

export default function Post(props) {
    const d = new Date(props.post.published);
    const now = new Date();
    const name = props.post.username;
    const { username } = props.post;
    const { comments } = props.post
    const count = Object.keys(comments).length
    const [isToggled, setIsToggled] = React.useState(false);
    const [isUpsdate, setIsUpsdate] = React.useState(true);

    const his=useHistory();

    const showMenu = () =>{
        setIsToggled(!isToggled);
    }
    const Delete=()=>{
        const{_id} =isAuth();

        fetch('http://localhost:8081/posts/userid/'+_id+'/'+props.post._id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
       
        }).then(response => response.json()).then(
            data => {
                console.log(data.status)
                if (data.status === "success") {
                    setIsToggled(!isToggled);
                    his.go(0);
                    


                }
            }
        )
    }

    const update=()=>{
        setIsUpsdate(!isUpsdate);
        setIsToggled(!isToggled);

    }

    var diff = (now - d);
    var diffDays = Math.floor(diff / 86400000); // days
    var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
    var diffMins = Math.floor((diff / 1000) / 60);
    var timestamp = diffMins;
    if (diffHrs) {
        timestamp = diffHrs + " hours, " + timestamp;
    }
    if (diffDays) {
        timestamp = diffDays + " days, " + timestamp;
    }

    return (
    
        <div id="post">
            <div className="w3-container w3-card w3-white w3-round w3-margin" ><br />
            
            {(isAuth()&& isAuth().username == username) ? ( <div className='w3-right w3-opacity'>
                   <i  onClick={showMenu} id="menu" className="fa fa-ellipsis-v"></i>
   
                    { isToggled ? (<div id="myDropdown" >
                        <br></br>
                        <br></br>

                        <l  type="button" className="dropP" onClick={Delete}>Delete</l>
                        <br></br>
                        <l  type="button"className ="dropP" onClick={update}>Update</l>

                    </div>):''}
                </div>) : ('')}
                {/* <span className="w3-right w3-opacity" >{timestamp} min</span> */}
                { isUpsdate ? (
                    <div>
                <h3 className="title">{props.post.title}</h3>
                <h6 className="detailsPost" >by {name}</h6>
                <hr className="w3-clear" />
                <br />
                <textarea value={props.post.content} className="textarea"></textarea>
                <br></br>
                <p type="button" className="readmore">Read more..</p><br></br>
                <br></br>

                <div className="detailsPost">
                    <p >{timestamp} min | {props.post.category} | {isAuth() && <Comments postId={props.post._id} />}
                    </p>

                </div> </div>) :(<NewPostUpdate post={props.post}></NewPostUpdate>)}
                {/* {isAuth()&&  <Comments postId={props.post._id} />}          */}
              

               
                {/* {(isAuth().username == username) ? (<button className="del_btn" ><i className="fa fa-close"></i></button>) : ('')} */}
                <br></br>
                <br></br>

            </div>
        </div>

    );
}
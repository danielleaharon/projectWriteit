import React from "react";
// import io from "socket.io-client";
import NewPost from "../pages/newpost";
// const socket = io.connect("http://localhost:8081");
import Layout from './Layout';
import PostlistComponent from './postlistComponent';
import { useHistory } from 'react-router-dom';
import '../home.css';



function Home() {

    const hi = useHistory();
    const [posts, setPosts] = React.useState([]);
    const [filterPosts, setfilterPosts] = React.useState([]);



    React.useEffect(() => {
        fetch('http://localhost:8081/posts/')
            .then(response => response.json()).then(
                data => {setPosts(data)
                    setfilterPosts(data);

                 }
            )

            document.getElementById("All").style.backgroundColor="#ccc";

    }, []);

    const onClick = category => {
        document.getElementById("Love").style.backgroundColor="white";
        document.getElementById("Work").style.backgroundColor="white";
        document.getElementById("All").style.backgroundColor="white";

       if(category=="All"){
        setfilterPosts(posts)
        document.getElementById(category).style.backgroundColor=" #ccc";

       }else{
        setfilterPosts(posts.filter(item=>item.category== category));

        document.getElementById(category).style.backgroundColor=" #ccc";

       }
    

    }
    const inputRef = React.useRef(null);

    return (
        <>
            <div className="home">
                <Layout posts={posts}>
                    <section class="u-clearfix u-image u-shading u-section-1" id="carousel_5e95" data-image-width="1688" data-image-height="1125">
                        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
                            <div class="u-align-left u-container-style u-expanded-width-xs u-group u-shape-rectangle u-group-1">
                                <div class="u-container-layout u-container-layout-1">
                                    <h3 class="u-text u-text-body-alt-color u-text-1">Come share your secrets&nbsp;blog</h3>
                                    <h1 class="u-custom-font u-font-lato u-text u-text-body-alt-color u-text-2" spellcheck="false">Write it</h1>
                                </div>
                            </div>
                        </div>
                    </section>


                    <br />

                    <br></br>
                    <div className="about">
                        <h2>About us</h2>
                        <p>If you have a secret you want to share but are afraid of?  <br />
                           If you need to unload what's in your head?  <br />
                           Should you get more opinions on various topics?  <br />
                            This is where you can write everything down!</p>

                    </div>
                    <br></br>

                    <div class="tab">
                    <button id="All" onClick={onClick.bind(this,"All")} type="button" value="all" className="button"> All Post</button>
                    <button id="Love"onClick={onClick.bind(this,"Love")} type="button" className="button" value="Love"> Love</button>
                    <button id="Work" onClick={onClick.bind(this,"Work")} type="button" className="button" value="Work"> Work</button>
                    </div>
                    <PostlistComponent posts={filterPosts} />

                </Layout>
            </div>


        </>
    );
}

export default Home;

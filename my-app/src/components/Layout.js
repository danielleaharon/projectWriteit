import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { SearchMode } from './Header';
import Search from '../pages/postlistSearch';


import { BrowserRouter, Route, Switch } from "react-router-dom";

const Layout = ({ children ,posts}) => {
    const [state, setstate] = useState(false);
    // const [searchInput, setSearchInput] = useState([]);
    const [searchInput,setSearchInput]=useState({
        search1: '',
        search2: '',
        search3: '',
    
    });
    const [StartSearch, setStartSearch] = useState(false);
    // const [postsfilter, setPostsfilter] = React.useState([]);
    // setPostsfilter({posts});

    // React.useEffect(() => {
    //     fetch('http://localhost:8081/posts/')
    //         .then(response => response.json()).then(
    //             data => {setPosts(data)

    //              }
    //         )
    //         // document.getElementById("All").style.backgroundColor="#ccc";

    // }, []);
    // const handelSubmit = e =>{
    
    //     e.preventDefault();

    //     setValues({...values,loading:true,error:false})

    //     const user= {name,email,password}
    //     signup(user).then(data=>{
    //         console.log("message"+data.message)
    //         if(data.error){
    //             setPosts({...posts,error:data.error})

    //         }
    //         else{
    //             posts({...values,name:'',email:'',password:'',error:'',loading:false,message:data.message,showForm:false})
    //             hi.goBack('/')
    //         }
    //     });


    // };
    // const handelChange = name=>e=>{
    //     setValues({...values,error:false,[name]:e.target.value})
    // };

   



    return (
        <BrowserRouter>
            <React.Fragment>
                <Header data={state} setData={setstate} setSearchInput={setSearchInput} searchInput={searchInput} />
               
                {state ? (<Search data={searchInput}  posts={posts}/>) :
               ( <>{ children }</>)
                    
                }
                <br></br>
                <br></br>






            </React.Fragment>
            <div className="footer">
                <p>footer</p>
            </div>
        </BrowserRouter>



    );
}
export default Layout
import fetch from 'isomorphic-fetch'
import {API} from '../config'

export const signup= user =>{
    console.log(user);
    return fetch('http://localhost:8081/user/signup',{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
  
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err));
};

export const signin= user =>{
    return fetch('http://localhost:8081/user/signin',{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
  
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    // .catch(err=>console.log(err));
};
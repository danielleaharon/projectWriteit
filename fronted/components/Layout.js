import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const Layout=({children})=>{
    return (
        <React.Fragment>
           <Header/>
            {children}
            <p>footer</p>




        </React.Fragment>



    );
}
export default Layout
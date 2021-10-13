import React from 'react';
import GoogleLogin from "react-google-login";
import {selectSignedIn} from "../features/userSlice";

import "../styling/home.css";
import {useSelector} from "react-redux";

const Homepage = () => {
    const login = (response) => {
        console.log(response);
    }

    const isSignedIn = useSelector(selectSignedIn)
    return (
        <div className="Home__page" style={{display:isSignedIn? "none":""}}>
            {!isSignedIn ? <div className="login__message">
                <h2>&#128512; </h2>
                <h1>A Readers favourite place!</h1>
                <p>
                    We provide high quality online resource for reading blogs. Just sign
                    up and start reading some quality blogs.
                </p>
                <GoogleLogin clientId="1078992692605-mkdofu9cchbfre2i30qputakbga896d9.apps.googleusercontent.com"
                             render={(renderProps) =>(
                                 <button
                                     onClick={renderProps.onClick}
                                     disabled={renderProps.disabled}
                                     className="login__button">
                                     Login with Google
                                 </button>

                             )} onSuccess={login}
                             onFailure={login}
                             isSignedIn={true}
                             cookiePolicy={'single_host_origin'}></GoogleLogin>
            </div> : (
                ""
            )}
        </div>
    )
}

export default Homepage;
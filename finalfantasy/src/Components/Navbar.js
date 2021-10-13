import {Avatar} from "@material-ui/core";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSignedIn, selectUserData} from "../features/userSlice";
import {GoogleLogout} from "react-google-login";

const Navbar = () => {
    const [inputValue,setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch()

    const logout = (response) =>  {
        dispatch(selectUserData(null))
    }

    return (
        <div className="navbar">
            <h1 className="navbar__header">Final Fantasy React </h1>
            {isSignedIn && (
                <div className="blog__search">
                <input className="search"
                                                               placeholder="Search for a blog"
                                                               value={inputValue}
                                                               onChange={(e) => setInputValue(e.target.value)}
            />
            {/*onClick={handleClick} goes after classname*/}
            <button className="submit" >Search</button>
            </div>
            )}

            {isSignedIn ? <div className="navbar__user__data">
                <Avatar src={userData?.imageURL} alt={userData?.name}/>
                <h1 className="signedIn">{userData?.givenName}</h1>
                <GoogleLogout clientId="1078992692605-mkdofu9cchbfre2i30qputakbga896d9.apps.googleusercontent.com"
                              render={(renderProps) => (
                                  <button
                                      className=''
                                      onClick={renderProps.onClick}
                                      disabled={renderProps.disabled}
                                      className="logout__button"
                                      >
                                      Logout
                                  </button>
                              )}
                              buttonText="Logout"
                              onLogoutSuccess={logout}
                />
            </div> :(
                ""
            )}
        </div>
    )
}

export default Navbar;
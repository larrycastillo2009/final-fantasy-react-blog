import React from 'react'
import Homepage from "./Components/Homepage";
import './styling/app.css'
import Navbar from "./Components/Navbar";
import {useSelector} from "react-redux";
import {selectSignedIn} from "./features/userSlice";
import Blogs from "./Components/Blogs";

const App = () => {
    const isSignedIn = useSelector(selectSignedIn)
    return (
        <div className="app">
            <Navbar/>
            <Homepage/>
            {isSignedIn && <Blogs/>}
        </div>
    )
}

export default App
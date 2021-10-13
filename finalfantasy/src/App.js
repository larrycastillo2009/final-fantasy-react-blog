import React from 'react'
import Homepage from "./Components/Homepage";
import './styling/app.css'
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Homepage/>
        </div>
    )
}

export default App
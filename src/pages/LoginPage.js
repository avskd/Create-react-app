import React from "react";
import HeaderZone from "../components/HeaderZone";
import Login from "../components/Login";
import "../styles/App.css"



const Homepage = () => {
    return (
        <div className="font-sans antialiased h-screen flex">
            < HeaderZone />
            <Login />
        </div>
    );
};


export default Homepage;
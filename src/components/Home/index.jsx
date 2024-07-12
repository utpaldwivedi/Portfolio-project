import React from "react";
import Leftbar from './Leftbar'
import Profile from "./Profile"
import './index.css'

export default function Home(){
    return (
        <div className="Home">
            <Leftbar/>
            <Profile/>
        </div>
    )
}
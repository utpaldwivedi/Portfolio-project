import React from "react";
import './index.css'
import Downbar from './Downbar'

export default function Footer(){
    return (
        <div className="footer">
            <Downbar/>
            <p>Built From Scratch With <span className="heart">💚</span> © Copyright 2024, Utpal. All Rights Reserved.</p>
        </div>
    )
}
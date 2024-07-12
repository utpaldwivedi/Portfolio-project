import React from "react";
import './index.css'

export default function Skill({icon,name}){
    return (
        <div className="skill">
            <img className="skillLogo" src={icon} alt={"Logo of "+name}/>
            <span className="skillName">{name}</span>
        </div>
    )
}
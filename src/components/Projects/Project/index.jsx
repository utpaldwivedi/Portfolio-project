import React from "react";
import './index.css'

export default function Project({name,desc,link,icon,orientation}){
    const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;
    return (
        <div className="project">
            {orientation==0 ? 
                <>
                    <div className="projectImage"><img className="dipInRight" src={icon} alt={name+" Pic"}  /></div>
                    <div className="projectDetails">
                        <div className="projectName">{name}</div>
                        <div className="projectDesc">{desc}</div>
                        <div className="projectLinkWrapper"><a href={formattedLink} target="_blank"><button className="projectLink">visit →</button></a></div>
                    </div>
                </>
                : 
                <>
                    <div className="projectDetails">
                        <div className="projectName">{name}</div>
                        <div className="projectDesc">{desc}</div>
                        <div className="projectLinkWrapper"><a href={formattedLink} target="_blank"><button className="projectLink">visit →</button></a></div>
                    </div>
                    <div className="projectImage"><img className="dipInLeft" src={icon} alt={name+" Pic"}  /></div>
                </>
                
                }
        </div>
    )
}
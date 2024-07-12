import React,{useEffect,useState} from "react";
import './index.css'

export default function Project({name,desc,link,icon,orientation}){
    const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;
    const [isMobile,setMobile]=useState(false);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(isMobile==false && window.innerWidth<1000)setMobile(true)
            else if(isMobile==true && window.innerWidth>=1000)setMobile(false)
        })
    },[])

    return (
        <div className="project">
            {isMobile ? 
                <>
                    <div className="projectImage"><img className="dipInRight" src={icon} alt={name+" Pic"}  /></div>
                    <div className="projectDetails">
                        <div className="projectName">{name}</div>
                        <div className="projectDesc">{desc}</div>
                        <div className="projectLinkWrapper"><a href={formattedLink} target="_blank"><button className="projectLink">visit →</button></a></div>
                    </div>
                </>
                :
                orientation==0? 
                <>
                    <div className="projectImage"><img className="dipInRight" src={icon} alt={name+" Pic"}  /></div>
                    <div className="projectDetails">
                        <div className="projectName">{name}</div>
                        <div className="projectDesc">{desc}</div>
                        <div className="projectLinkWrapper"><a href={formattedLink} target="_blank"><button className="projectLink">visit →</button></a></div>
                    </div>
                </>:
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
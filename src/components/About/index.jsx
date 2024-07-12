import React, { useState,useEffect,useRef } from "react";
import './index.css'
import dp from '../../assets/dp.jpg'
import Qualification from "./Qualification";
import edu from '../../assets/education.png'
import exp from '../../assets/suitcase.png'

const educations=[["IIT Kanpur","Biological Sciences & Bioengineering(B.Tech.)","2021-2025"],["GNNPS","Senior Secondry(Class XII)","2021"],["GNNPS","Secondary(Class X)","2019"]]
const experiences=[]

export default function About(){
    const [check,setCheck]=useState(0)
    
    function handleColor(check){
        setCheck(check)
        if(check==0){
            document.querySelector(".eduButton").style.backgroundColor="blue";
            document.querySelector(".expButton").style.backgroundColor="#6024cc";
        }
        else{
            document.querySelector(".expButton").style.backgroundColor="blue";
            document.querySelector(".eduButton").style.backgroundColor="#6024cc";
        }
    }

    const dpRef = useRef(null);
    const aboutMeHeadingRef = useRef(null);
    const aboutMeRef = useRef(null);
    const eduExpRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 0
        };

        const observerAbout = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(entry.target.classList.contains("dp")){
                        entry.target.classList.add("dpAnimate")
                        observerAbout.unobserve(entry.target)
                    }
                    if(entry.target.classList.contains("aboutMeHeading")){
                        entry.target.classList.add("aboutMeHeadingAnimate")
                        observerAbout.unobserve(entry.target)
                    }
                    if(entry.target.classList.contains("aboutMe")){
                        entry.target.classList.add("aboutMeAnimate")
                        observerAbout.unobserve(entry.target)
                    }
                    if(entry.target.classList.contains("eduExp")){
                        entry.target.classList.add("eduExpAnimate")
                        observerAbout.unobserve(entry.target)
                    }
                }
            });
        }, options);

        observerAbout.observe(dpRef.current);   
        observerAbout.observe(aboutMeHeadingRef.current);   
        observerAbout.observe(aboutMeRef.current);   
        observerAbout.observe(eduExpRef.current);   

    }, []);

    return (
        <div className="About">
            <div className="aboutMeBody">
                <div ref={aboutMeHeadingRef} className="aboutMeHeading">About Me😁</div>
                <div ref={dpRef} className="dp"><img src={dp} alt="Profile pic"/></div>
                <div ref={aboutMeRef} className="aboutMe">
                    <p>I am an aspiring Software Developer and ML enthusiast. I love puzzle and problem solving as well as DSA and have keen interest in Mathematics.</p>
                </div>
                <div ref={eduExpRef} className="eduExp">
                    <div className="eduExpButtons">
                        <button className="eduButton" onClick={()=>handleColor(0)}><img src={edu} height={20}/><span>Education</span></button>
                        <button className="expButton" onClick={()=>handleColor(1)}><img src={exp} height={20}/><span>Experience</span></button>
                    </div>
                    {check==0?
                    <Qualification array={educations}/>
                    :
                    <Qualification array={experiences}/>
                    }
                </div>
                <a href="https://drive.google.com/file/d/1Ao0GBAV08nfIptIx2gqrPalMtqL-gofk/view?usp=drive_link" style={{textDecoration:"none"}} target="_blank"><button className="cv">Download CV</button></a>
            </div>
        </div>
    )
}
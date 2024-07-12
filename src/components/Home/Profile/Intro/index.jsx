import React, { useEffect, useState } from "react";
import './index.css'

const skills=["Full-Stack Web Development.","Machine Learning.","DSA and Problem Solving."]

let wordInd=0;
let letterInd=0;


export default function Intro(){
    let [skill,setSkill]=useState("")
    useEffect(()=>{
        function typeText(){
            if(letterInd<skills[wordInd].length){
                skill+=skills[wordInd].charAt(letterInd);
                letterInd++;
                setSkill(skill)
                setTimeout(typeText,50)
            }
            else{
                letterInd=skills[wordInd].length-1
                setTimeout(deleteText,1000)
            }
        }
        function deleteText(){
            if(letterInd>=0){
                skill=skill.slice(0,-1)
                setSkill(skill);
                letterInd--;
                setTimeout(deleteText,50)
            }
            else{
                wordInd++;
                if(wordInd>=skills.length)wordInd=0;
                letterInd=0
                setTimeout(typeText,1000)
        
            }
        }
        typeText()
    },[])
    
    
    return (
        <div className="introSec">
            <div className="name"><p><span className="victory">✌🏻</span> Hi there , I am Utpal Dwivedi</p></div>
            <p>A <span style={{color:"#14e956",fontFamily:"Cyborg"}}>Developer</span> from <span style={{color:"#14e956",fontFamily:"Cyborg"}}>IIT Kanpur</span></p>
            <p>I love<span style={{color:"#14e956",fontFamily:"Cyborg"}}> {skill}</span> </p>
        </div>
    )
}

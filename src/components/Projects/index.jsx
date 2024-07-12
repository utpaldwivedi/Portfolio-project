import React,{useEffect,useRef} from "react";
import './index.css'
import Project from './Project'
import { v4 } from "uuid";
import logoProject from '../../assets/AWS.png'

const images={
    "Lorem":logoProject,
    "Ipsum":logoProject
}

const projectName=["Lorem","Ipsum"]
const projectDesc=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
const projectLink=["www.google.com","www.google.com"]

export default function Projects(){
    const projectDeclarationRef=useRef(null)

    const options={
        threshold:0
    }

    useEffect(()=>{
        const observerProjects=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("projectDeclarationAnimate")
                    observerProjects.unobserve(entry.target)
                }
            })
        },options)
        observerProjects.observe(projectDeclarationRef.current)
    },[])
    

    return (
        <div className="Projects">
            <div ref={projectDeclarationRef} className="projectDeclaration"><span className="curly">{"{"}</span>Project's Showcase<span className="curly">{"}"}</span></div>
            <div className="allProjects">
                {projectName.map((val,ind)=>{
                    return <Project key={v4()} name={val} desc={projectDesc[ind]} link={projectLink[ind]} icon={images[val]} orientation={ind%2} />
                })}
            </div>
            
        </div>
    )
}
import React,{useEffect,useRef} from "react";
import './index.css'
import Skill from './Skill'
import {v4} from 'uuid'

import C from '../../assets/C.png';
import CPlusPlus from '../../assets/C++.png';
import Python from '../../assets/Python.png';
import JavaScript from '../../assets/JavaScript.png';
import HTML5 from '../../assets/HTML5.png';
import CSS from '../../assets/CSS.png';
import Bootstrap from '../../assets/Bootstrap.png';
import ReactLogo from '../../assets/React.png';
import Node from '../../assets/Node.js.png';
import Express from '../../assets/Express.js.png';
import MySQL from '../../assets/MySQL.png';
import PostgreSQL from '../../assets/PostgreSQL.png';
import AWS from '../../assets/AWS.png';
import Git from '../../assets/Git.png';
import Bash from '../../assets/Bash.png';
import Numpy from '../../assets/Numpy.png';
import Pandas from '../../assets/Pandas.png';
import Matplotlib from '../../assets/Matplotlib.png';
import Seaborn from '../../assets/Seaborn.png';
import ScikitLearn from '../../assets/ScikitLearn.png';

const images = {
    "C": C,
    "C++": CPlusPlus,
    "Python": Python,
    "JavaScript": JavaScript,
    "HTML5": HTML5,
    "CSS": CSS,
    "Bootstrap": Bootstrap,
    "React": ReactLogo,
    "Node.js": Node,
    "Express.js": Express,
    "MySQL": MySQL,
    "PostgreSQL": PostgreSQL,
    "AWS": AWS,
    "Git": Git,
    "Bash": Bash,
    "Numpy": Numpy,
    "Pandas": Pandas,
    "Matplotlib": Matplotlib,
    "Seaborn": Seaborn,
    "ScikitLearn": ScikitLearn
};

const prog_names=["C","C++","Python","JavaScript"]
const frontend_names=["HTML5","CSS","Bootstrap","React"]
const backend_names=["Node.js","Express.js"]
const database_names=["MySQL","PostgreSQL"]
const devops_names=["AWS","Git","Bash"]
const ai_ml_names=["Numpy","Pandas","Matplotlib","Seaborn","ScikitLearn"]

export default function Skills(){

    const techStackHeadRef = useRef(null);
    const programmingLangRef = useRef(null);
    const frontendRef = useRef(null);
    const backendRef = useRef(null);
    const databaseRef = useRef(null);
    const devopsRef = useRef(null);
    const ai_mlRef = useRef(null);
    

    useEffect(() => {
        const options = {
            threshold: 0
        };

        const observerSkills = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(entry.target.classList.contains("techStackHead")){
                        entry.target.classList.add("techStackHeadAnimate")
                        observerSkills.unobserve(entry.target)
                    }
                    else if(entry.target.classList.contains("domainContainer")){
                        entry.target.classList.add("domainContainerAnimate")
                        observerSkills.unobserve(entry.target)
                    }
                }
            });
        }, options);

        observerSkills.observe(techStackHeadRef.current);   
        observerSkills.observe(programmingLangRef.current);   
        observerSkills.observe(frontendRef.current);   
        observerSkills.observe(backendRef.current);   
        observerSkills.observe(databaseRef.current);   
        observerSkills.observe(devopsRef.current);   
        observerSkills.observe(ai_mlRef.current);   

    }, []);

    return (
        <div className="techStack">
            <div ref={techStackHeadRef} className="techStackHead">Tech Stack</div>
            <div ref={programmingLangRef} className="programmingLang domainContainer">
                <div className="domainName">Programming Languages</div>
                <div className="domainSkills">
                    {prog_names.map((val)=>{
                        return <Skill key={v4()} icon={images[val]} name={val}/>
                    })}
                </div>
            </div>
            <div ref={frontendRef} className="frontend domainContainer">
                <div className="domainName">Frontend</div>
                <div className="domainSkills">
                    {frontend_names.map((val)=>{
                        return <Skill key={v4()} icon={images[val]} name={val}/>
                    })}
                </div>
            </div>
            <div ref={backendRef} className="backend domainContainer">
                <div className="domainName">Backend</div>
                <div className="domainSkills">
                    {backend_names.map((val)=>{
                        return <Skill key={v4()} icon={images[val]} name={val}/>
                    })}
                </div>
            </div>
            <div ref={databaseRef} className="database domainContainer">
                <div className="domainName">Database</div>
                <div className="domainSkills">
                    {database_names.map((val)=>{
                        return <Skill key={v4()} icon={images[val]} name={val}/>
                    })}
                </div>
            </div>
            <div ref={devopsRef} className="devops domainContainer">
                <div className="domainName">DevOps</div>
                <div className="domainSkills">
                    {devops_names.map((val)=>{
                        return <Skill key={v4()} icon={images[val]} name={val}/>
                    })}
                </div>
            </div>
            <div ref={ai_mlRef} className="ai-ml domainContainer">
                <div className="domainName">AI/ML</div>
                <div className="domainSkills">
                    {ai_ml_names.map((val)=>{
                        return <Skill key={v4()} icon={images[val]} name={val}/>
                    })}
                </div>
            </div>
        </div>
    )
}
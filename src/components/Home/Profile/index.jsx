import React ,{useState,useRef,useEffect}from "react";
import './index.css'
import boy from '../../../assets/boy.png'
import Intro from "./Intro";


export default function Profile(){
    const boyPicRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 0
        };

        const observerHome = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("boyPicAnimate")
                    observerHome.unobserve(entry.target)
                }
            });
        }, options);

        observerHome.observe(boyPicRef.current);   

    }, []);
    return (
        <div className="profile">
            <div className="info"><Intro/></div>
            <div ref={boyPicRef} className="boyPic"><img src={boy} alt="boy photo" height="300"/></div>
        </div>
    )
}
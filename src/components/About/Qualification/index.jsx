import React, { useEffect, useRef, useState } from "react";
import './index.css'
import time from '../../../assets/time.png'
import { v4 } from "uuid";
import plane from '../../../assets/plane.png'


export default function Qualification({array}){
    const hasElements = array.length !== 0;
    const planePicRef=useRef(null)
    const planePicWrapperRef=useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const plane = planePicRef.current;
            const planeWrapper=planePicWrapperRef.current;


            const planeRect = plane.getBoundingClientRect();
            const planeWrapperRect = planeWrapper.getBoundingClientRect();
            const vh=window.innerHeight
            console.log(plane.style)
            if(planeWrapperRect.top>=0 && planeWrapperRect.top<=vh/2){
                plane.style.top=`${vh / 2 - planeWrapperRect.top}px`
                return
            }
            else if(planeWrapperRect.top>=0)return
            else if(planeWrapperRect.top<0){
                if(planeWrapperRect.bottom<vh/2){
                    window.removeEventListener('scroll',handleScroll)
                    return
                }
                plane.style.top=`${vh / 2 + Math.abs(planeWrapperRect.top)}px`
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="qualiLine">
            <div className="leftQuali">
                {array.map((val,ind)=>{
                        if(ind%2==0) return <div className="quali" key={v4()}>
                                    <div className="org">{val[0]}</div>
                                    <div className="desig">{val[1]}</div>
                                    <div className="time"><img src={time} className="timeImg"/>{val[2]}</div>
                                </div>
                        else return <div className="empty180" key={v4()}></div>
                    }                      
                )
                }
            </div>
            <div ref={planePicWrapperRef} className={hasElements?"planePicWrapper":"hidden"}><img ref={planePicRef} className="planePic" src={plane} alt="plane pic"/></div>
            <div className={`rightQuali ${hasElements ? 'show-before' : ''}`}>
                {array.map((val,ind)=>{
                        if(ind%2!=0) return <div className="quali" key={v4()}>
                                    <div className="org">{val[0]}</div>
                                    <div className="desig">{val[1]}</div>
                                    <div className="time"><img src={time} className="timeImg"/>{val[2]}</div>
                                </div>
                        else return <div className="empty180" key={v4()}></div>
                    }                      
                )
                }
            </div>
        </div>
    )
}
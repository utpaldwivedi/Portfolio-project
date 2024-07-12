import React from "react";
import './index.css'
import { Link } from "react-router-dom";

export default function Error(){
    return <div className="error">
        <div className="error404">
            <p className="text404">404</p>
            <p className="pnf">PAGE NOT FOUND</p>
            <Link to="/"><button className="bth">Back to Home</button></Link>
        </div>
    </div>
}
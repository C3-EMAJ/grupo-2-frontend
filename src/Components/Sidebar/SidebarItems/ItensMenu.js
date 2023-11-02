import React from "react";
import { Link } from "react-router-dom";

export default function Item ({route, img, text}){
    return(
        <div>
            <li>
                <Link to={route} className="flex items-center p-1 text-xs text-black rounded-lg hover:bg-orange group">
                    <img src={img}></img>
                    <span className="ml-1.5">{text}</span>
                </Link>
            </li>
        </div>
    );
}
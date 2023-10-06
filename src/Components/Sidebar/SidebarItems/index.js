import React from "react";

function Item ({route, img, text}){
    return(
        <div>
            <li>
                <a href={route ? route : ""} class="flex items-center p-1 text-sm text-black rounded-lg hover:bg-orange group">
                <img src={img}></img>
                <span class="ml-2 whitespace-nowrap">{text}</span>
                </a>
            </li>
        </div>
    );
}

export default Item;
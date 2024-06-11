import React , {useRef , useState , useEffect} from "react";
import './navBar.css'
// import Cursor from "../cursor/cursor";

export default function NavBar () {

  

    useEffect (() => {
        
    },[])

    return (
        <><nav>
        <h1><img src="https://designwithred.com/wp-content/uploads/2018/04/m3.png"></img>artin Portfolio</h1>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
    </>
    )
}
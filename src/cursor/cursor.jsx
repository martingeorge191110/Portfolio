import React , {useEffect, useRef, useState} from "react";
import './cursor.css'


export default function Cursor () {

    const cursorRef = useRef(null)
    const [color, setColor] = useState('black')

    useEffect(() => {
        window.onmousemove = (e) => {
            cursorRef.current.style.top = e.pageY  + 'px'
            cursorRef.current.style.left = e.pageX + 'px'
        }
        document.querySelectorAll('a').forEach((e) => {
            e.onmouseenter = () => {cursorRef.current.classList.add('activeCursor')}
            e.onmouseleave = () => {cursorRef.current.classList.remove('activeCursor')}
        })
    } , [])

    return (
        <div className="cursor" ref={cursorRef}>

        </div>
    )
}
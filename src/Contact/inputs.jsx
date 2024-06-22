import React, { useEffect, useRef, useState } from "react";

export default function Input (props) {

    const inputRef = useRef(null)

    const[inputDetail , setInputDetail] = useState(null)
        function changeInput (inputValue) {
            setInputDetail(inputValue)
        }
        useEffect(() => {
            console.log(inputRef.current.value)
        } , [])

    return (
        <>
        <input ref={inputRef} onChange={(e) => {changeInput(e.currentTarget.value)}} value={inputDetail}  type={props.type} placeholder={props.placeholder}/>
        </>
    )
}
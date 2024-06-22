import React, { useEffect, useRef } from "react";
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Input from "./inputs";


export default function Contact () {

    const inputsDiv = useRef(null)
    useEffect(() => {
        const inputsDivChildren = inputsDiv.current.children
        for(let i = 0 ; i < inputsDivChildren.length-1 ; i++) {
            if(i === 3) {
                inputsDivChildren[i].style.cssText = `
                text-align:left;
    padding: 3rem 1.5rem;
    border: none;
    border-bottom: 1px solid rgb(218, 180, 254);
    background-color: black;
    color: white;
    width: 80%;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
                `
            }else {
                inputsDivChildren[i].style.cssText = `text-align:left;
    padding: 1.5rem;
    border: none;
    border-bottom: 1px solid rgb(218, 180, 254);
    background-color: black;
    color: white;
    width: 80%;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;`
            }
        }
    } , [])

    return (
    <>
        <section className="contact">
            <div className="details">
                <h1>Contact Me Now</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quam veritatis, fugiat doloremque alias ullam aperiam voluptate necessitatibus est. Nam asperiores autem ipsum mollitia eius dicta dignissimos culpa ipsam rerum.</p>
                <p>Telephone Number : <span>+20 1276028978</span>
                </p>
                <ul>
                    <li><FontAwesomeIcon icon={faLinkedin} /> :<span>Linked In Account</span></li>
                    <li><FontAwesomeIcon icon={faGithub} /> :<span>Github Account</span></li>
                    <li><FontAwesomeIcon icon={faGoogle} /> :<span>Gmail Address</span></li>
                </ul>
            </div>
            <div className="inputs" ref={inputsDiv}>
                <Input type="text" placeholder="Customer Name"/>
                <Input type="email" placeholder="Customer Email"/>
                <Input type="number" placeholder="Phone Number"/>
                <Input type="text" placeholder="Message"/>
                <button>Submit</button>
            </div>
        </section>
    </>
)
}
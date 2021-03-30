/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import "./Portfolio.css";
import background4 from "./background4.jpg";
import "./Media-Portfolio.css"; 
import {
    FloatingMenu,
    MainButton,
    ChildButton,
    Directions
  } 
from 'react-floating-button-menu'; 
import { ImHome } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMortarBoard } from "react-icons/go";
import { BsJustify } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import screen from  "./screen1.png";
import screen2 from "./screen2.png";
import screen3 from "./screen3.png";
import screen4 from "./screen4.png";
import screen5 from "./screen5.png";
import screen6 from "./screen6.png";
import Carousel from "react-spring-3d-carousel";
import { uuid } from 'uuidv4';
import { config } from "react-spring";
import { DiGithubBadge } from "react-icons/di";
class Portfolio extends Component{
    state = {
        isOpen: false,
        true:false,
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle,
        }
        slides = [
            {
                key: uuid(),
                content: <img src={screen} alt="1" />,
            },
            {
                key: uuid(),
            content: <img src={screen2} alt="2" />,
            },
            {
                key: uuid(),
            content: <img src={screen3} alt="3" />
            },
            {
                key: uuid(),
            content: <img src={screen4} alt="4" />
            },
            {
                key: uuid(),
            content: <img src={screen5} alt="5" />
            },
            {
                key: uuid(),
            content: <img src={screen6} alt="6" />
            },
        ].map((slide, index) => {
            return { ...slide, onClick: () => this.setState({ goToSlide: index })};
        });
        HOME=(Event)=>{
            Event.preventDefault();
            window.location.href ="/"
        }
        ABOUT=(Event)=>{
            Event.preventDefault();
            window.location.href ="/ABOUT"
        }
        SKILLS=(Event)=>{
            Event.preventDefault();
            window.location.href ="/SKILLS"
        }
        PORTFOLIO=(Event)=>{
            Event.preventDefault();
            window.location.href ="/PORTFOLIO"
        }
        CONTACT=(Event)=>{
            Event.preventDefault();
            window.location.href ="/CONTACT"
        }
    render(){
    return (
        <div className="Portfolio">
                <div className="background-port">
                    <img src={background4} alt="background4" className="background-por" />
                </div>
                <div className="dark" />
            <div className="principally">
                <div className="FloatingMenu">
                    <FloatingMenu
                        slideSpeed={600}
                        direction={Directions.Down}
                        spacing={8}
                        isOpen={this.state.isOpen}
                        className="FloatingMenu2"
                    >
                        <MainButton
                        iconResting={<BsJustify style={{ fontSize: 30}}/>}
                        iconActive={<BsX style={{ fontSize: 30}} />}
                        onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                        size={56}
                        className="Main-Button2"
                        />
                        <ChildButton
                        icon={<ImHome style={{ fontSize: 30 }}/>}
                        background="white"
                        size={50}
                        className="Bs-Person"
                        data-tooltip="HOME"
                        onClick={this.HOME}
                        />
                        <ChildButton
                        icon={<BsPerson style={{ fontSize: 35 }}/>}
                        background="white"
                        size={50}
                        className="Bs-Person"
                        data-tooltip="ABOUT"
                        onClick={this.ABOUT}
                        />
                        <ChildButton
                        icon={<GoMortarBoard style={{ fontSize: 30 }}/>}
                        background="white"
                        className="button90"
                        size={50}
                        className="Bs-Person"
                        data-tooltip="SKILLS"
                        onClick={this.SKILLS}
                        />
                        <ChildButton
                        icon={<BsBriefcase style={{ fontSize: 30 }}/>}
                        background="white"
                        size={50}
                        className="Bs-Person"
                        data-tooltip="PORTFOLIO"
                        onClick={this.PORTFOLIO}
                        />
                        <ChildButton
                        icon={<GoMail style={{ fontSize: 30 }} />}
                        background="white"
                        size={50}
                        className="Bs-Person"
                        data-tooltip="CONTACT"
                        onClick={this.CONTACT}
                        />
                    </FloatingMenu>
                </div>
                <div className="title-content">
                    <div className="title1">
                        <h1>MY <span className="PORT">PORTFOLIO</span></h1>
                    </div>
                    <div className="isometricGrid" >
                        <div className="Carousel" style={{ width: "80%", height: "500px", margin: "0 auto" }}>
                            <Carousel
                                slides={this.slides}
                                goToSlide={this.state.goToSlide}
                                offsetRadius={this.state.offsetRadius}
                                showNavigation={this.state.showNavigation}
                                animationConfig={this.state.config}
                            />    
                        </div> 
                    </div>     
                </div>
                <div className="git-log">
                    <ul className="ul">
                        <li>
                            <a href="https://github.com/hamza411-ezzouggari">
                                <i className="fa fa-twitter" aria-hidden="true">
                                    <DiGithubBadge/>
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>    
            </div>  
            <div className="text-bat">
            <div className="wavy">
            <span >visit</span>
            <span className="my"> my</span>
            <span >github</span>
            <span className="my">for</span>
            <span >more </span>
            <span className="my">information</span>
            <span >about </span>
            <span className="my">my</span>
            <span >projects </span>
            </div>
            </div>          
        </div>
    )
}
}
export default Portfolio

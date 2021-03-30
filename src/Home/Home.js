/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Home.css";
import "./HomeMedia.css";
import me from "./me.jpg";
import img from "./leftimage-bg.jpg";
import "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
  Directions,
} from "react-floating-button-menu";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMortarBoard } from "react-icons/go";
import { BsJustify } from "react-icons/bs";
import { BsX } from "react-icons/bs";
class Home extends Component {
  state = {
    isOpen: false,
    true: false,
  };
  facebook = (event) => {
    event.preventDefault();
    window.location.href = "https://www.facebook.com/ezzouggari.hamza.7";
  };
  Instagram = (event) => {
    event.preventDefault();
    window.location.href = "https://www.instagram.com/hamza_ezzouggari";
  };
  twitter = (event) => {
    event.preventDefault();
    window.location.href = "https://twitter.com/hamza51739682";
  };
  Github = (event) => {
    event.preventDefault();
    window.location.href = "https://github.com/hamza411-ezzouggari";
  };
  Linkedin = (event) => {
    event.preventDefault();
    window.location.href =
      "https://www.linkedin.com/in/ez-zouggari-hamza-59712b1b4";
  };
  HOME = (Event) => {
    Event.preventDefault();
    window.location.href = "/";
  };
  ABOUT = (Event) => {
    Event.preventDefault();
    window.location.href = "/ABOUT";
  };
  SKILLS = (Event) => {
    Event.preventDefault();
    window.location.href = "/SKILLS";
  };
  PORTFOLIO = (Event) => {
    Event.preventDefault();
    window.location.href = "/PORTFOLIO";
  };
  CONTACT = (Event) => {
    Event.preventDefault();
    window.location.href = "/CONTACT";
  };
  handelClick = (Event) => {
    Event.preventDefault();
    window.location.href = "/ABOUT";
  };
  render() {
    return (
      <div className="Home">
        <div className="first-party">
          <img src={img} alt="img" className="images" />
        </div>
        <div className="floating">
          <div className="FloatingMenu">
            <FloatingMenu
              slideSpeed={600}
              direction={Directions.Down}
              spacing={8}
              isOpen={this.state.isOpen}
              className="FloatingMenu2"
            >
              <MainButton
                iconResting={<BsJustify style={{ fontSize: 30 }} />}
                iconActive={<BsX style={{ fontSize: 30 }} />}
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                size={56}
                className="MainButton"
              />
              <ChildButton
                icon={<ImHome style={{ fontSize: 30 }} />}
                background="white"
                size={50}
                className="BsPerson"
                data-tooltip="HOME"
                onClick={this.HOME}
              />
              <ChildButton
                icon={<BsPerson style={{ fontSize: 30 }} />}
                background="white"
                size={50}
                className="BsPerson"
                data-tooltip="ABOUT"
                onClick={this.ABOUT}
              />
              <ChildButton
                icon={<GoMortarBoard style={{ fontSize: 30 }} />}
                background="white"
                className="button90"
                size={50}
                className="BsPerson"
                data-tooltip="SKILLS"
                onClick={this.SKILLS}
              />
              <ChildButton
                icon={<BsBriefcase style={{ fontSize: 30 }} />}
                background="white"
                size={50}
                className="BsPerson"
                data-tooltip="PORTFOLIO"
                onClick={this.PORTFOLIO}
              />
              <ChildButton
                icon={<GoMail style={{ fontSize: 30 }} />}
                background="white"
                size={50}
                className="BsPerson"
                data-tooltip="CONTACT"
                onClick={this.CONTACT}
              />
            </FloatingMenu>
          </div>
          <div className="Floating2">
            <div className="media">
              <FloatingMenu
                slideSpeed={600}
                direction={Directions.Left}
                spacing={8}
                isOpen={this.state.true}
                className="med4"
              >
                <MainButton
                  iconResting={<AiOutlineShareAlt style={{ fontSize: 30 }} />}
                  iconActive={<BsX style={{ fontSize: 30 }} />}
                  onClick={() => this.setState({ true: !this.state.true })}
                  size={56}
                  className="med1"
                />
                <ChildButton
                  icon={<FaFacebookF style={{ fontSize: 30 }} />}
                  background="white"
                  data-tooltip="HOME"
                  className="Facebook"
                  onClick={this.facebook}
                />
                <ChildButton
                  icon={<FaLinkedinIn style={{ fontSize: 30 }} />}
                  background="white"
                  data-tooltip="HOME"
                  className="Linkedin"
                  onClick={this.Linkedin}
                />
                <ChildButton
                  icon={<FaGithub style={{ fontSize: 30 }} />}
                  background="white"
                  data-tooltip="HOME"
                  className="Github"
                  onClick={this.Github}
                />
                <ChildButton
                  icon={<FaTwitter style={{ fontSize: 30 }} />}
                  background="white"
                  data-tooltip="HOME"
                  className="Twitter"
                  onClick={this.twitter}
                />
                <ChildButton
                  icon={<FaInstagram style={{ fontSize: 30 }} />}
                  background="white"
                  data-tooltip="HOME"
                  className="Instagram"
                  onClick={this.Instagram}
                />
                <ChildButton
                  icon={<AiOutlineWhatsApp style={{ fontSize: 30 }} />}
                  background="white"
                  data-tooltip="+380992330547"
                  className="WhatsApp"
                />
              </FloatingMenu>
            </div>
          </div>
        </div>
        <div className="styles">
          <div className="about-me">
            <div className="context-about">
              <div className="me1">
                <img src={me} alt="me" className="logo-me" />
                <div className="content-details fadeIn-bottom fadeIn-right">
                  <h3 className="h3">hamza_Ezzouggari</h3>
                </div>
              </div>
              <div className="content">
                <div className="title">
                  <div className="content__container">
                    <p className="content__container__text">Hello</p>
                    <ul className="content__container__list">
                      <li className="content__container__list__item">
                        world !
                      </li>
                      <li className="content__container__list__item">bob !</li>
                      <li className="content__container__list__item">
                        users !
                      </li>
                      <li className="content__container__list__item">
                        everybody !
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-effect">
                  <div className="IM">
                    <h1 className="IM2">I'M</h1>
                  </div>
                  <div className="Typewriter">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(" A WEB DEVELOPER")
                          .pauseFor(1500)
                          .deleteAll(60)
                          .typeString(" A WEB DESIGNER")
                          .pauseFor(1500)
                          .deleteAll(60)
                          .typeString(" A FREELANCER")
                          .pauseFor(1500)
                          .deleteAll(60)
                          .typeString(" A Student")
                          .pauseFor(1500)
                          .deleteAll(60)
                          .typeString(" A GAMER")
                          .pauseFor(1500)
                          .deleteAll(60)
                          .typeString(" A COMPUTER ENGINEERING ")
                          .start();
                      }}
                    />
                  </div>
                </div>
                <div className="handel">
                  <p>
                    I'm a Freelance Designer and Developer,I strives to build
                    immersive and beautiful web applications through carefully
                    crafted code and user-centric design,I also like to play
                    some Video games
                  </p>
                </div>
                <div className="button">
                  <div className="box-2">
                    <div className="btn btn-two">
                      <span onClick={this.handelClick}>ABOUT ME</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

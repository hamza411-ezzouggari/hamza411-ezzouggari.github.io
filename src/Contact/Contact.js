/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./contact.css";
import "./Media-contact.css";
import background00 from "./background50.jpg";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
  Directions,
} from "react-floating-button-menu";
import { ImHome } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMortarBoard } from "react-icons/go";
import { BsJustify } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import emailjs from "emailjs-com";
require("dotenv").config();
class Contact extends React.Component {
  state = {
    isOpen: false,
    true: false,
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };
  handelNameChange = (e) => {
    this.setState({ Name: e.target.value });
  };
  handelEmailChange = (e) => {
    this.setState({ Email: e.target.value });
  };
  handelSubjectChange = (e) => {
    this.setState({ Subject: e.target.value });
  };
  handelMessageChange = (e) => {
    this.setState({ Message: e.target.value });
  };
  sendEmail = (Event) => {
    const templateParams = {
      name: this.state.Name,
      email: this.state.Email,
      subject: this.state.Subject,
      message: this.state.Message,
    };
    console.log(templateParams);
    emailjs
      .send(
        "service_eie1rqi",
        "template_6qvi5cm",
        templateParams,
        "user_RCArRr6So04oqH2yjPowM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been well sent, thank you");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Your message has not been sent. Try again");
        }
      );
    Event.preventDefault();
    this.handleReset();
  };
  handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      (textarea) => (textarea.value = "")
    );
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
  render() {
    return (
      <div className="Contact">
        <div className="background00">
          <img src={background00} alt="1" className="background09" />
        </div>
        <div className="dark-Contact">
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
                icon={<BsPerson style={{ fontSize: 35 }} />}
                background="white"
                size={50}
                className="BsPerson2"
                data-tooltip="ABOUT"
                onClick={this.ABOUT}
              />
              <ChildButton
                icon={<GoMortarBoard style={{ fontSize: 30 }} />}
                background="white"
                className="button90"
                size={50}
                className="BsPerson2"
                data-tooltip="SKILLS"
                onClick={this.SKILLS}
              />
              <ChildButton
                icon={<BsBriefcase style={{ fontSize: 30 }} />}
                background="white"
                size={50}
                className="BsPerson2"
                data-tooltip="PORTFOLIO"
                onClick={this.PORTFOLIO}
              />
              <ChildButton
                icon={<GoMail style={{ fontSize: 30 }} />}
                background="white"
                size={50}
                className="BsPerson2"
                data-tooltip="CONTACT"
                onClick={this.CONTACT}
              />
            </FloatingMenu>
          </div>
          <div className="input-Value">
            <div className="Contact-me">
              <h1 className="title90">
                <span className="one">Contact</span>
                <span className="one">me</span>
              </h1>
            </div>
            <div className="paragraph">
              <p>
                " I'm interested in freelance opportunities-especially ambitious
                or large projects.However, if you have other request or
                question, don't hesitate to use the form."
              </p>
            </div>
            <div className="Message">
              <form>
                <div className="all-parti">
                  <div className="first">
                    <div className="form__group field">
                      <input
                        name="name"
                        type="input"
                        value={this.state.name}
                        onChange={this.handelNameChange}
                        className="form__field"
                        placeholder="Name"
                        id="name"
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Name
                      </label>
                    </div>
                    <div className="form__group field">
                      <input
                        name="email"
                        type="input"
                        value={this.state.email}
                        onChange={this.handelEmailChange}
                        className="form__field"
                        placeholder="Email"
                        id="email"
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="second">
                    <div className="form__group field">
                      <input
                        name="subject"
                        type="input"
                        value={this.state.subject}
                        onChange={this.handelSubjectChange}
                        style={{ width: "180%" }}
                        className="form__field"
                        placeholder="Subject"
                        id="Subject"
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Subject
                      </label>
                    </div>
                    <div className="form__group field">
                      <textarea
                        name="message"
                        type="input"
                        value={this.state.message}
                        onChange={this.handelMessageChange}
                        style={{ width: "180%", height: "100px" }}
                        className="form__field"
                        placeholder="Message"
                        id="Message"
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Message
                      </label>
                    </div>
                  </div>
                  <div className="submit">
                    <div className="wrap">
                      <buttone
                        className="buttone"
                        type="submit"
                        onClick={this.sendEmail}
                      >
                        Submit
                      </buttone>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="radix">
            <Map
              google={this.props.google}
              zoom={15}
              className={"map"}
              initialCenter={{ lat: 50.016273399999996, lng: 36.2304088 }}
            >
              <Marker position={{ lat: 50.016273399999996, lng: 36.2304088 }} />
            </Map>
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.API_KEY,
})(Contact);

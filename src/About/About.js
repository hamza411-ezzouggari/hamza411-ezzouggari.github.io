/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./About.css";
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
import me from "./me.jpg";
import { FaDownload } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import background from "./background Color.jpg";
import "./Media-About.css";
class About extends React.Component {
  state = {
    isOpen: false,
    true: false,
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
      <div className="About-pra">
        <div className="About">
          <div className="background">
            <img src={background} alt="background" className="background" />
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
                  icon={<BsPerson style={{ fontSize: 32 }} />}
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
            <div className="TITLE">
              <div className="About-me">
                <h1>
                  ABOUT <span className="span1">ME</span>
                </h1>
              </div>
              <div className="title-head-subtitle">
                <div className="line"></div>
                <p>I design and code beautiful things, and I love what I do.</p>
                <div className="line2"></div>
              </div>
            </div>
          </div>
          <div className="personal-info">
            <div className="info-personal">
              <div className="col-xl-6" />
              <div className="image-container">
                <img src={me} alt="me" className="me-3" />
              </div>
            </div>
            <div className="information-left">
              <div className="First-Name">
                <div className="First-Name1">
                  <span className="font-weight-600">First Name : </span>
                  <span className="font-weight-600">Last Name : </span>
                  <span className="font-weight-600">Birthdays : </span>
                  <span className="font-weight-600">Nationality : </span>
                  <span className="font-weight-600">Experience : </span>
                  <span className="font-weight-600">Address : </span>
                </div>
                <div className="First-Name2">
                  <h3 className="h302">Hamza</h3>
                  <h3 className="h302">Ezzouggari</h3>
                  <h3 className="h302">06/12/1998</h3>
                  <h3 className="h302">Morocco</h3>
                  <h3 className="h302">1 years</h3>
                  <h3 className="h302">Kharkiv</h3>
                </div>
              </div>
            </div>
            <div className="information-grith">
              <div className="last-Name">
                <div className="last-Name1">
                  <span className="font-weight-600">Freelance : </span>
                  <span className="font-weight-600">Languages : </span>
                  <span className="font-weight-600">Phone : </span>
                  <span className="font-weight-600">Email : </span>
                </div>
                <div className="last-Name2">
                  <h3>Available</h3>
                  <h3>English / Arabic / French / Russian</h3>
                  <h3>+380992330547</h3>
                  <h3>hamzatari200@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="buds">
            <div className="button">
              <div id="wrap">
                <a
                  href="CV_2021-03-28_Ez Zouggari_Hamza (1).pdf"
                  className="btn-slide2"
                  download
                >
                  <span className="circle2">
                    <FaDownload />
                  </span>
                  <span className="title2">DOWNLOAD MY CV</span>
                  <span className="title-hover2">THANK YOU</span>
                </a>
              </div>
            </div>
            <div className="line5">
              <div className="lin2" />
            </div>
            <div className="education">
              <div className="education-title">
                <h1>EDUCATION</h1>
              </div>
              <div className="date">
                <div className="card-header">
                  <span className="year">
                    <i className="BsCalendar">
                      <BsCalendar />
                    </i>
                    <i className="date">2018 - 2019</i>
                  </span>
                  <div className="card2">
                    <p>Baccalaureate - Morocco</p>
                    <p className="p21">
                      {" "}
                      Study in the Division of Mechanical Sciences and obtain a
                      certificate baccalaureate School Moulay Ismail{" "}
                    </p>
                  </div>
                </div>
                <div className="card-header">
                  <span className="year">
                    <i className="BsCalendar">
                      <BsCalendar />
                    </i>
                    <i className="date">2019 - 2020</i>
                  </span>
                  <div className="card2">
                    <p> Ukraine - Kharkiv </p>
                    <p className="p20">
                      {" "}
                      Study web developer , the odin project ,linda ...{" "}
                    </p>
                  </div>
                </div>
                <div className="card-header">
                  <span className="year">
                    <i className="BsCalendar">
                      <BsCalendar />
                    </i>
                    <i className="date">2020 - now</i>
                  </span>
                  <div className="card2">
                    <p className="p01">
                      {" "}
                      Ukraine - Kharkiv National University of Radio electronic
                    </p>
                    <p className="p19">
                      {" "}
                      Kharkiv National University of Radio Electronics is a
                      higher education institution of the highest level of
                      accreditation in Ukraine. It is one of the oldest
                      technology universities in Ukraine. im student computer
                      science{" "}
                    </p>
                  </div>
                </div>
                <div className="siecle">
                  <div className="i-center1">
                    <i className="i" />
                  </div>
                  <div className="i-center2">
                    <i className="i" />
                  </div>
                  <div className="i-center3">
                    <i className="i" />
                  </div>
                  <div className="lli" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

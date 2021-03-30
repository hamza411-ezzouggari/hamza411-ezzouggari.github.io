/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import "./Skills.css";
import background2 from "./background2.jpg"
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
import TagCloud, {renderData} from 'd3-tagcloud-for-react';
import "./Media-skills.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
class Skills extends Component {
    state = {
        isOpen: false,
        true:false,
        }
        componentDidMount() {
            let chart = am4core.create("chartdiv", am4charts.XYChart);
            chart.hiddenState.properties.opacity = 0;
            chart.paddingRight = 40;
            chart.data = [{
                "name": "React",
                "value": 87,
                "href":"https://img.icons8.com/nolan/64/react-native.png",
            }, {
                "name": "jQuery",
                "value": 65,
                "href":"https://img.icons8.com/ios-filled/50/000000/jquery.png",
            }, {
                "name": "ECMAScript 6",
                "value": 80,
                "href":"https://raw.githubusercontent.com/wingsuitist/ecmascript-logo/master/es-ecmascript-logo.png",
            }, {
                "name": "webpack",
                "value": 75,
                "href":"https://img.icons8.com/dusk/128/000000/webpack.png",
            }, {
                "name": "Redux",
                "value": 70,
                "href":"https://img.icons8.com/material-sharp/144/000000/redux.png",
            }, {
                "name": "Express",
                "value": 75,
                "href":"https://www.pngkin.com/mnp/64-642177.png",
            }, {
                "name": "JSON APIs",
                "value": 88,
                "href":"https://img.icons8.com/color/144/000000/json.png",
            },{
                "name": "JavaScript",
                "value": 80,
                "href":"https://img.icons8.com/color/144/000000/javascript.png",
            },{
                "name": "Node.js",
                "value": 78,
                "href":"https://icon-library.com/images/nodejs-icon/nodejs-icon-16.jpg",
            },{
                "name": "Mongodb",
                "value": 80,
                "href":"https://img.icons8.com/color/144/000000/mongodb.png",
            }
        ];
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.minGridDistance = 0;
        categoryAxis.renderer.labels.template.dx = -26;
        categoryAxis.renderer.minWidth = 100;
        categoryAxis.renderer.tooltip.dx = -4000000000;
        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.fillOpacity = 0;
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;
        valueAxis.renderer.baseGrid.strokeOpacity = 0;
        valueAxis.renderer.labels.template.dy = 20;
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = "value";
        series.dataFields.categoryY = "name";
        series.tooltipText = "{valueX.value}";
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.dy = 0;
        series.columnsContainer.zIndex = 10;
        var columnTemplate = series.columns.template;
        columnTemplate.height = am4core.percent(30);
        columnTemplate.maxHeight = 100;
        columnTemplate.column.cornerRadius(90, 80, 80, 90);
        columnTemplate.strokeOpacity = 0;
        series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueX", min: am4core.color("#D391FA"), max: am4core.color("#190087") });
        series.mainContainer.mask = undefined;
        var cursor = new am4charts.XYCursor();
        chart.cursor = cursor;
        cursor.lineX.disabled = true;
        cursor.lineY.disabled = true;
        cursor.behavior = "none";
        var bullet = columnTemplate.createChild(am4charts.CircleBullet);
        bullet.circle.radius = 20;
        bullet.valign = "100";
        bullet.align = "left";
        bullet.isMeasured = false;
        bullet.interactionsEnabled = false;
        bullet.horizontalCenter = "right";
        bullet.interactionsEnabled = false;
        var hoverState = bullet.states.create("hover");
        var outlineCircle = bullet.createChild(am4core.Circle);
        outlineCircle.adapter.add("radius", function (radius, target) {
            var circleBullet = target.parent;
            return circleBullet.circle.pixelRadius + 6;
        })
        var image = bullet.createChild(am4core.Image);
        image.width = 40;
        image.height = 200;
        image.horizontalCenter = "middle";
        image.verticalCenter = "middle";
        image.propertyFields.href = "href";
        image.adapter.add("mask", function (mask, target) {
            var circleBullet = target.parent;
            return circleBullet.circle;
        })
        
        var previousBullet;
        chart.cursor.events.on("cursorpositionchanged", function (event) {
            var dataItem = series.tooltipDataItem;
            if (dataItem.column) {
                var bullet = dataItem.column.children.getIndex(1);
                if (previousBullet && previousBullet !== bullet) {
                    previousBullet.isHover = false;
                }
                if (previousBullet !== bullet) {
                    var hs = bullet.states.getKey("hover");
                    hs.properties.dx = dataItem.column.pixelWidth;
                    bullet.isHover = true;
                    previousBullet= bullet;
                }
            }
        })
            }
        componentWillUnmount() {
            if (this.chart) {
            this.chart.dispose();
            }
        }
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
        const colorarray = [
            '#D391FA',
            '#A3A3FF',
            '#7879FF',
            '#4949FF',
            '#1F1FFF',
            '#fff',
          ]
          const data = [
            {
            label: 'React',
            fontSize: 10,
            opacity: 8,
            },
            {
            label: 'jQuery',
            fontSize: 9,
            opacity: 9,
            },
            {
            label: 'ECMAScript 6',
            fontSize: 4,
            opacity: 7,
            },
            {
            label: 'webpack',
            fontSize: 4,
            opacity: 4,
            },
            {
            label: 'Redux',
            fontSize: 4,
            opacity: 7,
            },
            {
            label: 'HTML5',
            fontSize: 9,
            opacity: 9,
            },
            {
            label: 'JSON APIs',
            fontSize: 9,
            opacity: 6,
            },
            {
            label: 'JavaScript',
            fontSize: 9,
            opacity: 8,
            },
            {
            label: 'CSS3',
            fontSize: 9,
            opacity: 9,
            },
            {
            label: 'WordPress',
            fontSize: 9,
            opacity: 8,
            },
            {
            label: 'Github',
            fontSize: 6,
            opacity: 5,
            },
            {
            label: 'SASS',
            fontSize: 6,
            opacity: 6,
            },
            {
            label: 'Node.js',
            fontSize: 4,
            opacity: 4,
            },
            {
            label: 'Mongodb',
            fontSize: 9,
            opacity: 8,
            },
            {
            label: 'Redux Saga',
            fontSize: 4,
            opacity: 6,
            },
            {
            label: 'Express',
            fontSize: 4,
            opacity: 5,
            },
            {
            label: 'CSS Javascript',
            fontSize: 4,
            opacity: 6,
            },
          ]
        return (
            <div className="Skills">
                <div className="background2">
                    <img src={background2} alt="background2" className="im3"/>
                </div>
                <div className="background-initial">
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
                                        iconResting={<BsJustify style={{ fontSize: 30}}/>}
                                        iconActive={<BsX style={{ fontSize: 30}} />}
                                        onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                                        size={56}
                                        className="Main-Button"
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
                                        icon={<BsPerson style={{ fontSize: 32 }}/>}
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
                            <div className="tag-cloud">
                            <div className="text-zone">
                                <div className="threeD-2">
                                    <h3>Skills & Experience</h3>
                                </div>
                                <div className="blast-root">
                                    <p>The main area of my expertise is front end development (client side of the web).</p>
                                    <p>HTML, CSS, JS (TypeScript), building small and medium web apps with React, custom plugins, features, animations, and coding interactive layouts.</p>
                                    <p>I have also full-stack developer experience with open source CMS like (WordPress, Drupal, Magento, Keystone.js and other)</p>
                                </div>    
                            </div>
                            <div className="cors">
                            <TagCloud 
                                className='tag-wane'
                                style={{
                                fontFamily: 'sans-serif',
                                fontSize: 30,
                                padding: 5,
                                width: '90%',
                                height: '500px',
                                }}
                                data={data}
                                colorarray={colorarray}
                            >
                                {renderData(data)}
                            </TagCloud>
                            </div>
                            </div>    
                    </div>
                    <div id="chartdiv" style={{ width: "55%", height: "48%", fontSize:"17px"}}></div>
                </div>        
            </div>
        )
    }
    }
    

export default Skills

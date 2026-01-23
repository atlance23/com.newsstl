import './styles/WeatherSlider.css'
import Radar from "./Radar";
import RoadConditions from "./RoadConditions";
import Forecast from './Forecast';
import { Link } from 'react-router-dom';

export default function WeatherSlider() {
    $(document).ready(function(){
        $('#conditionsButton').click(function(){
            $('#roadConditions').show();
            $('#weatherRadar').hide();
            $('#forecast').hide();
        });

        $('#radarButton').click(function(){
            $('#roadConditions').hide();
            $('#weatherRadar').show();
            $('#forecast').hide();
        });

        $('#forecastButton').click(function(){
            $('#roadConditions').hide();
            $('#weatherRadar').hide();
            $('#forecast').show();
        })
    });

    return (
        <>
            <section id="weatherSliderContainer">
                <div className="sliderMenu">
                    <div id="conditionsButton" style={{cursor: "pointer"}}>
                        <p><span className="buttonTitle">CONDITIONS</span> <span className="mobileIcon"></span></p>
                    </div>
                    <div id="radarButton" style={{cursor: "pointer"}}>
                        <p><span className="buttonTitle">RADAR</span> <span className="mobileIcon"></span></p>
                    </div>
                    <div id="winterStorm" style={{cursor: "pointer"}}>
                        <Link to="/winterstorm">
                            <p>
                                <span className="buttonTitle" style={{cursor: "pointer", color: "#fff !importnant", textDecoration: "underline"}}>
                                    WINTER STORM
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="sliderContent">
                    <div className="slide" id="roadConditions">
                        <div style={{padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", paddingBottom: "48px", paddingTop: "48px"}}>
                            <h2 style={{color: "#fff", textTransform: "uppercase", margin: "0"}}>St. Louis Winter Storm & Road Conditions</h2>
                            <p style={{fontFamily: "Montserrat", color: "#fff", width: "80%"}}> Check here for the latest information on the Winter Weather Event that is supposed to take effect on Friday, January 23, 2026</p>
                        </div>
                        <RoadConditions />
                    </div>
                    <div className="slide" id="weatherRadar" style={{display: "none"}}>
                        <div style={{padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", paddingBottom: "48px", paddingTop: "48px"}}>
                            <h2 style={{color: "#fff", textTransform: "uppercase", margin: "0"}}>St. Louis Winter Storm & Road Conditions</h2>
                            <p style={{fontFamily: "Montserrat", color: "#fff", width: "80%"}}> Check here for the latest information on the Winter Weather Event that is supposed to take effect on Friday, January 23, 2026</p>
                        </div>
                        <Radar />
                    </div>
                </div>
            </section>
        </>
    );
}
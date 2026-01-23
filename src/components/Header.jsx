import { Link } from 'react-router-dom';
import './styles/Header.css';

export default function Header() {
    return (
        <>
            <header>
                <div id="headerTopBar">
                    <div className="topBarItem" id="logo">
                        <div>

                        </div>
                        <h1>
                            NEWS STL
                        </h1>
                    </div>
                    <div className="topBarItem" id="categories">
                        <div id="weather">
                            <Link to="/winterstorm" />
                        </div>
                        <div id="local">

                        </div>
                        <div id="financial">

                        </div>
                    </div>
                    <div className="topBarItem" id="cta">
                        <div>Subscribe</div>
                    </div>
                </div>
                <div id="headerBottomBar">
                    <span className="tickerContent"><a style={{color: "#fff"}} href="https://forecast.weather.gov/MapClick.php?lat=38.635355&lon=-90.2009855">Read: NWS Issues Winter Storm Watch for St. Louis Metro</a></span>
                </div>
            </header>
        </>
    )
}
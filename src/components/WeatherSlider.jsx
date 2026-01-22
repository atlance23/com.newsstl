export default function WeatherSlider() {
    return (
        <>
            <section id="weatherSliderContainer">
                <div className="sliderMenu">
                    <div id="conditionsButton">
                        <p><span className="buttonTitle">CONDITIONS</span> <span className="mobileIcon"></span></p>
                    </div>
                    <div id="radarButton">
                        <p><span className="buttonTitle">LIVE RADAR</span> <span className="mobileIcon"></span></p>
                    </div>
                    <div id="forecastButton">
                        <p><span className="buttonTitle">FORECAST</span> <span className="mobileIcon"></span></p>
                    </div>
                </div>
                <div id="roadConditions">

                </div>
                <div id="weatherRadar">

                </div>
                <div id="forecast">

                </div>
            </section>
        </>
    );
}
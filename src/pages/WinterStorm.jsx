import Radar from '../components/Radar';
import './styles/WinterStorm.css';
import { Helmet } from 'react-helmet-async';

export default function WinterStorm() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "url": "https://newsstl.com/winterstorm",
        "publisher":{
            "@type":"Organization",
            "name":"News STL",
        },
        "headline": "Winter Storm Warning Issued for St. Louis Metro: Here's What to Expect",
        "mainEntityOfPage": "https://newsstl.com/winterstorm",
        "articleBody": "ST. LOUIS – The National Weather Service has issued a winter storm warning for Saturday and Sunday across the St. Louis region, as a significant winter weather event is expected to bring heavy snowfall and dangerously cold temperatures this weekend. All counties in the St. Louis metropolitan area located south of the Interstate 70 corridor in both Missouri and Illinois are now included in the winter storm warning. The National Weather Service defines a Winter Storm Warning as an event in which heavy snow accumulations of at least 6 inches within 12 hours, or 8 inches within 24 hours, are expected. The warning may also be issued when sleet accumulation of one-half inch or greater is forecast. Based on the latest data, confidence is high that most of the St. Louis metro area will receive at least four inches of snow, with some counties expected to see significantly higher totals. Four inches represents the minimum expected accumulation, while some forecast models indicate isolated locations could receive up to one foot of snow by Sunday.",
        "image":[
            "https://images.pexels.com/photos/813871/pexels-photo-813871.jpeg"
        ],
        "datePublished":"	2026-01-22T18:30:00Z-06:00"
    }

    const author = "Noah Caldwell"
    const d = new Date;
    const datePublished = d.getDate();
    const currentDate = `${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate() + 1).padStart(2, '0')}.${d.getFullYear()}`;

    return (
        <>
            <Helmet>
                <title>News STL | St. Louis Winter Storm | January 2026</title>
                <meta name="description" content="Latest updates on St. Louis winter storm - Janauary 2026" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <section id="hero">
                <h1>St. Louis Winter Storm - January 2026</h1>
                <p>{`Author: ${author} | Published: ${currentDate} | Updated: ${currentDate}`}</p>
            </section>
            <section id="content">
                <h2>St. Louis Winter Storm Updates | {`${currentDate}`}</h2>
                <p>ST. LOUIS &ndash; <a title="Winter Storm Warning - St. Louis, Missouri" href="https://forecast.weather.gov/showsigwx.php?warnzone=MOZ064&amp;warncounty=MOC510&amp;firewxzone=MOZ064&amp;local_place1=2%20Miles%20WSW%20Brooklyn%20IL&amp;product1=Winter+Storm+Warning&amp;lat=38.6354&amp;lon=-90.201" target="_blank">The National Weather Service</a>&nbsp;has issued a winter storm warning for Saturday and Sunday across the St. Louis region, as a significant winter weather event is expected to bring heavy snowfall and dangerously cold temperatures this weekend.</p>
                <p data-start="338" data-end="505">All counties in the St. Louis metropolitan area located south of the Interstate 70 corridor in both Missouri and Illinois are now included in the winter storm warning.</p>
                <p data-start="507" data-end="789">The National Weather Service defines a Winter Storm Warning as an event in which heavy snow accumulations of at least 6 inches within 12 hours, or 8 inches within 24 hours, are expected. The warning may also be issued when sleet accumulation of one-half inch or greater is forecast.</p>
                <p data-start="791" data-end="1133">Based on the latest data, confidence is high that most of the St. Louis metro area will receive at least four inches of snow, with some counties expected to see significantly higher totals. Four inches represents the minimum expected accumulation, while some forecast models indicate isolated locations could receive up to one foot of snow by Sunday.</p>
                <p data-start="95" data-end="413">Light snow could begin as early as 8 a.m. Saturday, with conditions worsening throughout the day. Much of the St. Louis region may experience prolonged winter storm activity, bringing accumulating snowfall through early Sunday evening, followed by a second round expected to develop between 9 p.m. and midnight Sunday.</p>
                <p data-start="418" data-end="588">By the time the system exits the area, St. Louis City, St. Louis County, and several surrounding counties are forecast to receive approximately 4 to 8 inches of snowfall.</p>
                <p data-start="66" data-end="387">Temperatures Saturday morning are expected to start near zero, with afternoon highs struggling to reach the teens before slowly climbing to around 20 degrees by Sunday. The combination of cold air and gusty winds may result in hazardous wind chill values, with feels-like temperatures dropping as low as minus 10 degrees.</p>
                <p data-start="392" data-end="742">At the same time, a National Weather Service winter storm watch remains in effect for several counties north of Lincoln County in Missouri and Calhoun County in Illinois. While snowfall amounts are forecast to be lower in those areas, locations north of Interstate 70 could still receive approximately 2 to 4 inches of snow by the end of the weekend.</p>
            </section>
            <section style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px", paddingBottom: "80px", paddingTop: "60px", backgroundColor: "#000", color: "#fff", textAlign: "center"}}>
                <h2 style={{margin: "0"}}>St. Louis Winter Storm | Radar</h2>
                <p style={{paddingBottom: "32px"}}>Track weather live with live radar on News STL</p>
                <Radar />
            </section>
        </>
    );
}
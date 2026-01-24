import RoadConditions from '../components/RoadConditions';
import './styles/RoadUpdates.css';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';

export default function StlRoadCondtions() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "url": "https://newsstl.com/winterstorm",
        "publisher":{
            "@type":"Organization",
            "name":"News STL",
        },
        "headline": "[LIVE] St. Louis Road Condition Updates",
        "mainEntityOfPage": "https://newsstl.com/stlroadconditions",
        "articleBody": "ST. LOUIS, MO - January 24, 2026 8:45AM. Road status update: Per the MoDOT road conditions map, all major roads in STL are partially covered with snow. Important points: I-270 North of the I-70 interchange is fully covered. Highway 367 is fully-covered from I-70 to Alton, IL. Highway 67/Lindberg Blvd. in North County is fully covered from I-270 to Highway 367",
        "image":[
            "https://images.pexels.com/photos/813871/pexels-photo-813871.jpeg"
        ],
        "datePublished":"2026-01-24T8:34:00Z-06:00"
    }

    const sanitizedHTML = DOMPurify.sanitize(schema);

    const author = "Noah Caldwell"
    const d = new Date;
    const datePublished = d.getDate();
    const currentDate = `${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate() + 1).padStart(2, '0')}.${d.getFullYear()}`;

    return (
        <>
            <Helmet>
                <title>News STL | St. Louis Road Conditions</title>
                <meta name="description" content="Latest updates on St. Louis road conditions" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <section id="hero">
                <h1>St. Louis Road Conditions</h1>
                <p>{`Author: ${author} | Published: ${currentDate} | Updated: ${currentDate}`}</p>
            </section>
            <section id="content">
                <h2>St. Louis Road Condition Updates | {`${currentDate}`}</h2>
                <p>ST. LOUIS, MO - January 24, 2026 8:45AM</p>
                <p>Road status update:</p>
                <p>Per the MoDOT road conditions map, all major roads in STL are partially covered with snow.</p>
                <p>Important points:</p>
                <ul>
                    <li>I-270 North of the I-70 interchange is fully covered.</li>
                    <li>Highway 367 is fully-covered from I-70 to Alton, IL</li>
                    <li>Highway 67/Lindberg Blvd. in North County is fully covered from I-270 to Highway 367</li>
                </ul>
            </section>
            <section style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px", paddingBottom: "80px", paddingTop: "60px", backgroundColor: "#000", color: "#fff", textAlign: "center"}}>
                <h2 style={{margin: "0"}}>St. Louis Road Conditions | Courtesy of MoDOT</h2>
                <p style={{paddingBottom: "32px"}}>Track road conditions live with News STL</p>
                <RoadConditions />
            </section>
            <script dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        </>
    );
}
import './styles/WinterStorm.css';

export default function WinterStorm() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "url": "https://newsstl.com/winterstorm",
        "publisher":{
            "@type":"Organization",
            "name":"News STL",
            "logo":"http://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1"
        },
        "headline": "Winter Storm Warning Issued for St. Louis Metro: Here's What to Expect",
        "mainEntityOfPage": "https://newsstl.com/winterstorm",
        "articleBody": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
        "image":[
            
        ],
        "datePublished":"	2026-01-22T18:30:00Z-06:00"
    }

    const author = "Noah Caldwell"
    const d = new Date;
    const datePublished = d.getDate();
    const currentDate = d.getDate();

    return (
        <>
            <section id="hero">
                <h1>St. Louis Winter Storm - January 2026</h1>
                <p>{`Author: ${author} | Published: ${datePublished} | Updated: ${currentDate}`}</p>
            </section>
            <section id="content">
                <p>ST. LOUIS &ndash; <a title="Winter Storm Warning - St. Louis, Missouri" href="https://forecast.weather.gov/showsigwx.php?warnzone=MOZ064&amp;warncounty=MOC510&amp;firewxzone=MOZ064&amp;local_place1=2%20Miles%20WSW%20Brooklyn%20IL&amp;product1=Winter+Storm+Warning&amp;lat=38.6354&amp;lon=-90.201" target="_blank">The National Weather Service</a>&nbsp;has issued a winter storm warning for Saturday and Sunday across the St. Louis region, as a significant winter weather event is expected to bring heavy snowfall and dangerously cold temperatures this weekend.</p>
                <p data-start="338" data-end="505">All counties in the St. Louis metropolitan area located south of the Interstate 70 corridor in both Missouri and Illinois are now included in the winter storm warning.</p>
                <p data-start="507" data-end="789">The National Weather Service defines a Winter Storm Warning as an event in which heavy snow accumulations of at least 6 inches within 12 hours, or 8 inches within 24 hours, are expected. The warning may also be issued when sleet accumulation of one-half inch or greater is forecast.</p>
                <p data-start="791" data-end="1133">Based on the latest data, confidence is high that most of the St. Louis metro area will receive at least four inches of snow, with some counties expected to see significantly higher totals. Four inches represents the minimum expected accumulation, while some forecast models indicate isolated locations could receive up to one foot of snow by Sunday.</p>
            </section>
        </>
    );
}
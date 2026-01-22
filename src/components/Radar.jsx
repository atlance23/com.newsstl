import './styles/Radar.css'

export default function Radar() {
    return (
        <>
            <iframe className="radar" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=in&metricTemp=°F&metricWind=mph&zoom=30&overlay=radar&product=ecmwf&level=surface&lat=38.624691&lon=-90.184776&message=true" frameborder="0"></iframe>
        </>
    )
}
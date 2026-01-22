import "./styles/RoadConditions.css"

export default function RoadConditions() {
    return (
        <>
            <iframe className="embed" src="https://traveler.modot.org/map/" loading="lazy" frameborder="0"></iframe>
        </>
    )
}
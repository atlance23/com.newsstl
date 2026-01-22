import "./styles/RoadConditions.css"

export default function RoadConditions() {
    return (
        <div style={{position: "relative", overflow: "hidden", borderRadius: "20px", width: "90%"}}>
            <iframe className="conditions" src="https://traveler.modot.org/map/" frameborder="0"></iframe>
        </div>
    )
}
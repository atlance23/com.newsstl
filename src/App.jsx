import './App.css'
import Header from './components/Header'
import RoadConditions from './components/RoadConditions'

function App() {
  const d = new Date();

  return (
    <>
      <Header />
      <section style={{width: "100vw", padding: "60px 20px", paddingBottom: "20px", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('./news.stl.hero.jpg')", backgroundPosition: "50% 50%", backgroundSize: "cover", textAlign: "center"}}>
        <div style={{width: "70%", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "20px", padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <h2 style={{color: "#fff", margin: "0"}}>St. Louis Winter Storm & Road Conditions</h2>
          <p style={{fontFamily: "Montserrat", color: "#fff", width: "80%"}}> Check here for the latest information on the Winter Weather Event that is supposed to take effect on Friday, January 23, 2026</p>
        </div>
      </section>
      <section style={{width: "100vw", height: "100vh", background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./news.stl.hero.jpg')", backgroundAttachment: "fixed", padding: "60px 20px", paddingBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h2 style={{textAlign: "center", width: "100%", fontWeight: "700", textTransform: "uppercase", color: "#fff"}}>St. Louis Road Conditions as of <span>{String(d.getMonth() + 1).padStart(2, '0')}.{String(d.getDate()).padStart(2, '0')}.{d.getFullYear()}</span></h2>
        <p style={{color: "#fff", paddingBottom: "32px", fontWeight: "500"}}>This is an interactive map of road conditions courtesy of <a href="https://traveler.modot.org/map/" style={{color: "#fff"}}>MoDOT</a></p>
        <RoadConditions />
      </section>
    </>
  )
}

export default App

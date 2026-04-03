import logo from './logo.png'

const benefits = [
  {
    title: 'Hochwertiger Auftritt für Events',
    text: 'MALU fügt sich mit klarem, modernem Look nahtlos in hochwertige Veranstaltungen, Märkte, Messen und Festivals ein.',
  },
  {
    title: 'Zuverlässig & professionell',
    text: 'Klare Abläufe sorgen für kurze Wartezeiten und einen reibungslosen Ablauf.',
  },
]

export default function App() {
  return (
    <div className="site-shell">

      <header className="site-header">
        <div className="container header-inner">

          <div className="header-left">
            <img src={logo} alt="MALU Logo" className="logo" />
          </div>

          <nav className="nav">
            <a href="#start">Start</a>
            <a href="#warum-malu">Warum MALU?</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

        </div>
      </header>

      <main>

     <section id="start" className="hero-section">
  <div className="container">
    
    <p style={{ letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a7369" }}>
      Für Events, Märkte & Festivals
    </p>

    <h1 style={{ fontSize: "48px", margin: "20px 0" }}>
      Mobile Kaffeekultur für Events, die in Erinnerung bleiben.
    </h1>

    <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
      MALU steht für Qualität, Leichtigkeit und eine moderne Kaffeekultur.
      Wir bringen hochwertigen Kaffee, Matcha und frische Getränke dorthin,
      wo Menschen zusammenkommen.
    </p>

    <div style={{ marginTop: "30px" }}>
      <a 
        href="mailto:info@malu2go.de"
        style={{
          padding: "12px 20px",
          background: "#1f1d1a",
          color: "white",
          borderRadius: "10px",
          marginRight: "10px",
          textDecoration: "none"
        }}
      >
        Event anfragen
      </a>

      <a 
        href="#ueber-uns"
        style={{
          padding: "12px 20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          textDecoration: "none"
        }}
      >
        Mehr über uns
      </a>
    </div>

  </div>
<section id="warum-malu" style={{ background: "#ffffff", padding: "80px 0" }}>
  <div className="container">

    <p style={{ letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a7369" }}>
      Warum MALU?
    </p>

    <h2 style={{ fontSize: "36px", margin: "20px 0" }}>
      Mehr als Kaffee – ein Erlebnis für eure Gäste.
    </h2>

    <p style={{ maxWidth: "700px", lineHeight: "1.6", marginBottom: "40px" }}>
      MALU bringt nicht einfach Getränke mit – wir bringen Atmosphäre.
      Unser Auftritt ist modern, ruhig und hochwertig. Dadurch entstehen
      kleine Genussmomente, die Gästen im Kopf bleiben und Events sichtbar aufwerten.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

      <div style={cardStyle}>
        <h3>Hochwertiger Auftritt</h3>
        <p>Modernes, reduziertes Design, das sich perfekt in Events einfügt.</p>
      </div>

      <div style={cardStyle}>
        <h3>Zuverlässig & schnell</h3>
        <p>Klare Abläufe sorgen für kurze Wartezeiten und reibungslose Prozesse.</p>
      </div>

      <div style={cardStyle}>
        <h3>Mehr als ein Foodtruck</h3>
        <p>Ein bewusst gestaltetes Getränkekonzept, das Menschen zusammenbringt.</p>
      </div>

      <div style={cardStyle}>
        <h3>Social Media Effekt</h3>
        <p>Unsere Ästhetik lädt zum Fotografieren, Teilen und Markieren ein.</p>
      </div>

    </div>

  </div>
</section>

      </main>

    </div>
  )
}

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
</section>

      </main>

    </div>
  )
}

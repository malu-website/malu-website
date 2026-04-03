import logo from './logo.png'

const cardStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "16px",
  background: "#f9f7f3"
}

export default function App() {
  return (
    <div className="site-shell">

      {/* HEADER */}
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

        {/* HERO */}
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
          </div>
        </section>

        {/* WARUM MALU */}
        <section id="warum-malu" style={{ background: "#ffffff", padding: "80px 0" }}>
          <div className="container">

            <p style={{ letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a7369" }}>
              Warum MALU?
            </p>

            <h2 style={{ fontSize: "36px", margin: "20px 0" }}>
              Mehr als Kaffee – ein Erlebnis für eure Gäste.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={cardStyle}><h3>Hochwertiger Auftritt</h3></div>
              <div style={cardStyle}><h3>Zuverlässig & schnell</h3></div>
              <div style={cardStyle}><h3>Mehr als ein Foodtruck</h3></div>
              <div style={cardStyle}><h3>Social Media Effekt</h3></div>
            </div>

          </div>
        </section>

        {/* ÜBER UNS */}
        <section id="ueber-uns" style={{ padding: "80px 0" }}>
          <div className="container">
            <h2>Über uns</h2>
            <p>
              Wir sind Marie und Laurids – ein junges Ehepaar aus Essen und die Gründer von MALU.
              Unser Ziel ist es, Menschen kleine Genussmomente im Alltag zu schenken.
            </p>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" style={{ padding: "80px 0", background: "#f1ede6" }}>
          <div className="container">
            <h2>Kontakt</h2>
            <p>info@malu2go.de</p>
          </div>
        </section>

      </main>

    </div>
  )
}

import logo from './logo.png'

const benefits = [
  {
    title: 'Hochwertiger Auftritt für Events',
    text: 'MALU fügt sich mit klarem, modernem Look nahtlos in hochwertige Veranstaltungen ein.',
  },
  {
    title: 'Zuverlässig & professionell',
    text: 'Klare Abläufe sorgen für kurze Wartezeiten und einen reibungslosen Ablauf.',
  },
  {
    title: 'Mehr als ein Foodtruck',
    text: 'Ein bewusst gestaltetes Getränkekonzept, das Menschen zusammenbringt.',
  },
  {
    title: 'Social-Media-Potenzial',
    text: 'Unser Branding lädt zum Teilen ein und erhöht die Sichtbarkeit eures Events.',
  },
]

const values = [
  'Qualität statt Masse',
  'Reduktion & Klarheit',
  'Zeitgemäße Ästhetik',
  'Nähe zur Community',
  'Verlässlichkeit & Professionalität',
]

const offerings = [
  'Hochwertiger Kaffee',
  'Matcha',
  'Moderne Getränkevariationen',
  'Frische Säfte',
]

const targetGroups = [
  'Bewusster, offener Lebensstil',
  'Interesse an Qualität und Ästhetik',
  'Urbanität und Neugier',
  'Wertschätzung für kleine Genussmomente',
  'Wunsch nach Orten, die einladen statt bewerten',
]

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
            <p>Für Events, Märkte & Festivals</p>
            <h1>Mobile Kaffeekultur für Events, die in Erinnerung bleiben.</h1>
            <p>
              MALU steht für Qualität, Leichtigkeit und moderne Kaffeekultur.
              Wir bringen hochwertigen Kaffee, Matcha und Getränke dorthin,
              wo Menschen zusammenkommen.
            </p>
          </div>
        </section>

        {/* WARUM MALU */}
        <section id="warum-malu" className="section">
          <div className="container">
            <h2>Warum MALU?</h2>
            <div>
              {benefits.map((b) => (
                <div key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KONZEPT */}
        <section className="section">
          <div className="container">
            <h2>Unser Konzept</h2>
            <ul>
              {offerings.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* WERTE */}
        <section className="section">
          <div className="container">
            <h2>Unsere Werte</h2>
            <ul>
              {values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ZIELGRUPPE */}
        <section className="section">
          <div className="container">
            <h2>Unsere Zielgruppe</h2>
            <ul>
              {targetGroups.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ÜBER UNS */}
        <section id="ueber-uns" className="section">
          <div className="container">
            <h2>Über uns</h2>
            <p>
              Wir sind Marie und Laurids – ein junges Ehepaar aus Essen und die Gründer von MALU.
              Unser Ziel ist es, Menschen kleine Genussmomente im Alltag zu schenken.
            </p>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="section">
          <div className="container">
            <h2>Kontakt</h2>
            <p>info@malu2go.de</p>
            <p>017664701484</p>
          </div>
        </section>

      </main>

    </div>
  )
}

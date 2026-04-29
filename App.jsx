import logo from './logo.png'

const benefits = [
  {
    title: 'Ein Auftritt, der euer Event sichtbar aufwertet',
    text: 'Unser reduziertes, modernes Design fügt sich nahtlos in hochwertige Formate ein und wirkt bewusst ruhiger und klarer als klassische Foodtrucks.',
  },
  {
    title: 'Reibungslose Abläufe, auch bei hohem Andrang',
    text: 'Ein bewusst fokussiertes Sortiment und klare Prozesse sorgen dafür, dass Gäste schnell bedient werden – ohne Hektik, ohne lange Wartezeiten.',
  },
  {
    title: 'Atmosphäre statt nur Getränke',
    text: 'MALU schafft kleine Momente, in denen Menschen kurz ankommen, durchatmen und sich wohlfühlen – genau das, was gute Events ausmacht.',
  },
  {
    title: 'Sichtbarkeit über das Event hinaus',
    text: 'Unsere Ästhetik lädt zum Fotografieren und Teilen ein – und macht euer Event auch digital erlebbar.',
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
      <header className="site-header">
        <div className="container header-inner">
          <div className="header-brand">
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

        {/* HERO (UPGRADED) */}
        <section id="start" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">

              <span className="eyebrow-pill">
                Für Events, Märkte, Messen & Festivals
              </span>

              <h1>
                Mobiles Kaffee- & Getränkekonzept für Events, die im Kopf bleiben.
              </h1>

              <p className="lead">
                Wir bringen hochwertigen Kaffee, Matcha und moderne Getränke auf euer Event –
                mit einem klaren, ästhetischen Auftritt und einem Ablauf, der einfach funktioniert.
              </p>

              <p>
                MALU ist kein klassischer Foodtruck, sondern ein bewusst gestaltetes Konzept,
                das Atmosphäre schafft und Gäste spürbar erreicht.
              </p>

              <div className="button-group">
                <a
                  className="button button-primary"
                  href="mailto:info@malu2go.de?subject=Eventanfrage%20MALU"
                >
                  Event anfragen
                </a>

                <a
                  className="button button-secondary"
                  href="#ueber-uns"
                >
                  Mehr über uns
                </a>
              </div>
            </div>

            <div className="hero-cards">
              <article className="card card-highlight card-span-2">
                <p className="section-label">Unser Konzept</p>
                <p>
                  Wenige, bewusst ausgewählte Produkte. Klare Prozesse. Ruhige, moderne
                  Ästhetik. So schaffen wir Genussmomente mit Substanz – offen, herzlich und
                  professionell.
                </p>
              </article>

              <article className="card">
                <p className="section-label">Sortiment</p>
                <ul className="tag-list">
                  {offerings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="card">
                <p className="section-label">Mobil einsetzbar</p>
                <p>
                  Flexibel auf Wochenmärkten, an Universitäten, bei Firmenevents, Messen,
                  Festivals und weiteren Formaten.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WARUM MALU */}
        <section id="warum-malu" className="section section-white">
          <div className="container">
            <div className="section-intro max-width-text">
              <p className="section-label">Warum MALU?</p>

              <h2>
                Weil gute Events nicht nur organisiert, sondern auch erlebt werden.
              </h2>

              <p>
                MALU ist mehr als ein Getränkestand. Wir verstehen uns als Teil des
                Gesamterlebnisses – visuell, atmosphärisch und im Ablauf.
              </p>
            </div>

            <div className="grid grid-4">
              {benefits.map((benefit) => (
                <article className="card soft-card" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WERTE + ZIELGRUPPE */}
        <section className="section">
          <div className="container two-column-layout">

            <article className="card dark-card">
              <p className="section-label section-label-dark">Markenwerte</p>
              <h2>Wofür MALU steht</h2>

              <div className="grid grid-2 compact-grid">
                {values.map((value) => (
                  <div className="value-box" key={value}>
                    {value}
                  </div>
                ))}
              </div>
            </article>

            <article className="card">
              <p className="section-label">Für wen wir da sind</p>
              <h2>Unsere Zielgruppe</h2>

              <ul className="tag-list target-list">
                {targetGroups.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

          </div>
        </section>

        {/* ÜBER UNS */}
        <section id="ueber-uns" className="section section-alt">
          <div className="container two-column-layout">

            <div>
              <p className="section-label">Über uns</p>
              <h2>Wir sind Marie und Laurids.</h2>

              <p>
                Ein junges Ehepaar aus Essen – und die Gründer von MALU.
              </p>

              <p>
                MALU ist aus dem Wunsch entstanden, einen Ort zu schaffen,
                an dem Menschen kurz ankommen können – unabhängig davon,
                wo sie herkommen oder wie ihr Tag war.
              </p>
            </div>

            <article className="card">
              <h3>Unsere Motivation</h3>

              <p>
                Für uns ist MALU mehr als ein mobiles Getränkekonzept.
                Es ist ein Herzensprojekt, in dem wir Begegnung,
                Genuss und kleine Pausen im Alltag möglich machen.
              </p>

              <div className="inner-box">
                <h4>Was uns als Team ausmacht</h4>
                <p>
                  Als Gründerpaar verbinden wir Design, Marke und
                  Organisation zu einem klaren, funktionierenden Konzept.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <article className="card callout-card">

              <div>
                <p className="section-label">Event Booking</p>

                <h2>
                  Ihr plant ein Event und sucht ein hochwertiges,
                  mobiles Kaffee- und Getränkekonzept?
                </h2>

                <p>
                  Dann lasst uns sprechen – wir unterstützen euch dabei,
                  euer Event nicht nur zu versorgen, sondern erlebbar zu machen.
                </p>
              </div>

              <a
                className="button button-primary"
                href="mailto:info@malu2go.de"
              >
                Jetzt anfragen
              </a>

            </article>
          </div>
        </section>

      </main>

      <footer id="kontakt" className="site-footer">
        <div className="container footer-grid">

          <div>
            <div className="brand">MALU</div>
            <p className="footer-copy">
              Modernes mobiles Getränkekonzept für hochwertige Events.
            </p>
          </div>

          <div>
            <p className="section-label">Kontakt</p>
            <div className="contact-list">
              <p>Marie & Laurids Kleebolte</p>
              <p>Im Hesgarten 2</p>
              <p>45239 Essen</p>
              <p><a href="mailto:info@malu2go.de">info@malu2go.de</a></p>
              <p><a href="tel:+4917664701484">0176 64701484</a></p>
            </div>
          </div>

          <div>
            <p className="section-label">Kurz gesagt</p>
            <p className="footer-copy">
              MALU steht für Qualität, Leichtigkeit und moderne Kaffeekultur.
            </p>
          </div>

        </div>
      </footer>
    </div>
  )
}

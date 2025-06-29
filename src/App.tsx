import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Portfolio, About, Services, Contact } from "./Pages";
import "./App.css";
// import { useState } from "react";
import TrueFocus from "./components/focusText/TrueFocus";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="opus-nav">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src="/opus-logo.png"
          alt="Opus Logo"
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "25%",
            objectFit: "cover",
            boxShadow: "0 2px 8px 0 rgba(203,175,135,0.18)",
          }}
        />
        <div
          className="shiny-text"
          style={{
            animationDuration: "5s",
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
          }}
        >
          Opus <br />
          Designs
        </div>
      </div>
      <br />
      <ul className="scroll-x">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={location.pathname === "/portfolio" ? "active" : ""}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  // const [dark, setDark] = useState(true);
  const [learnMoreExpanded, setLearnMoreExpanded] = useState(false);

  return (
    <Router>
      <div className={`opus-hero dark`}>
        <header className="opus-header">
          <Navbar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="opus-intro">
                  <h1>
                    Opus Designs is an Interior Design Studio based in Mumbai.
                  </h1>
                  <TrueFocus
                    sentence="Art Meets Architecture. That’s Opus!"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="gainsboro"
                    animationDuration={0.4}
                    pauseBetweenAnimations={0.5}
                  />
                  <br />
                  <p>
                    Interior design studio crafting meaningful spaces with mood,
                    movement, and soul.
                  </p>
                  <br />
                  <button className="opus-cta">Let’s Design Together!</button>
                </section>
                <section className="opus-services">
                  <h2>Who We Work With</h2>
                  <p>
                    We collaborate with people who care about their space —
                    whether it’s a home, a business, or a development. Everyone
                    we work with is different, and that’s exactly how we like
                    it.
                  </p>
                  <br />
                  <div className="opus-service-list">
                    <div className="opus-service">
                      Residential Clients
                      <br /> <br />
                      We design homes that reflect who you are — not what's
                      trending. From thoughtful layouts to meaningful details,
                      every space is tailored to your story, your lifestyle, and
                      your rhythm. It’s not just about how it looks — it’s about
                      how it feels to live in.
                    </div>
                    <div className="opus-service">
                      Commercial Clients <br /> <br />
                      Your space should work as hard as you do. Whether it’s an
                      office, a boutique, or a hospitality venue, we craft
                      environments that align with your brand and inspire the
                      people inside it. Function meets form, strategy meets
                      style.
                    </div>
                    <div className="opus-service">
                      Property Developers <br /> <br />
                      We understand the market — and we know how to make your
                      properties stand out. Our interiors are designed to
                      impress at first glance and connect at an emotional level.
                      From show flats to sales offices, we help you sell the
                      story behind the space.
                    </div>
                  </div>
                </section>
                <section className="opus-about">
                  <h2>Who We Are</h2>
                  <p>
                    With years of experience in interior design, Opus Designs
                    offers more than just beautiful spaces — we craft
                    environments that feel personal, intentional, and deeply
                    lived-in. No templates. No one-size-fits-all. Every space we
                    design starts with a blank canvas and a conversation — about
                    your life, your vision, and the way you want your space to
                    feel. From layout to lighting, materials to mood, we design
                    it all with care. We believe design shouldn’t just impress —
                    it should connect. It should feel like you.
                  </p>
                  <br />
                  <p>Design that fits your life — not the other way around</p>
                  <br />
                  {learnMoreExpanded ? (
                    <>
                      <p>
                        We don’t believe in templates or one-size-fits-all
                        solutions. Every space we design begins with a blank
                        canvas and a conversation — about you, your lifestyle,
                        your aspirations, and the way you want to feel when you
                        walk through your door. From layout to lighting,
                        materials to mood, every element is considered with
                        care.
                      </p>

                      <p>
                        At our core, we believe design should do more than just
                        impress — it should connect. Whether it’s a calm,
                        minimalist home or a bold, branded commercial space, our
                        work is always a reflection of the people behind it.
                      </p>

                      <p>
                        It’s not about following trends — it’s about following
                        truth, purpose, and personality. We’re here to create
                        spaces that don’t just look good in photos, but feel
                        right in real life.
                      </p>
                      <br />
                    </>
                  ) : null}

                  <button
                    className="opus-learn-more"
                    onClick={() => setLearnMoreExpanded((prev) => !prev)}
                  >
                    {learnMoreExpanded ? "Collapse" : "Learn more"}
                  </button>
                </section>
                <section className="opus-projects">
                  <h2>Our Process</h2>
                  <div className="opus-project-list">
                    <div className="opus-project">
                      Understand your space + how you use it
                    </div>
                    <div className="opus-project">
                      Build a look that blend style + comfort
                    </div>
                    <div className="opus-project">
                      Plan every inch with purpose and flow
                    </div>
                    <div className="opus-project">
                      A space that feels unmistakably you!
                    </div>
                  </div>
                </section>
                {/* <section className="opus-process">
                  <h2>Our Process</h2>
                  <ol>
                    <li>Understand your space + how you use it</li>
                    <li>Build a look that blend style + comfort</li>
                    <li>Plan every inch with purpose and flow</li>
                    <li>Final touch? A space that feels unmistakably you!</li>
                  </ol>
                </section> */}
                <section className="opus-testimonials">
                  <h2>Client Reflections</h2>
                  <p>
                    We love working with clients who trust us with their vision
                    — and here’s what they have to say.
                  </p>
                  <blockquote>
                    “A complete joy to work with, incredibly efficient, coming
                    up with ideas and designs that were initially challenging.”
                    <br />
                    <span>— Shalin Shah</span>
                  </blockquote>
                  <blockquote>
                    “Opus Interiors is a fantastic interior design company that
                    I would highly recommend to anyone looking for a
                    professional, responsive, and organised service.”
                    <br />
                    <span>— Suresh Patil</span>
                  </blockquote>
                  <blockquote>
                    They were a pleasure to deal with nothing was too much
                    trouble -they were happy to accommodate any changes I wished
                    to make and everything was co-ordinated on time with their
                    range of trade people.”
                    <br />
                    <span>— Ankit Kesharvani</span>
                  </blockquote>
                </section>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="opus-footer">
          <div>
            © {new Date().getFullYear()} Opus Interiors. All rights reserved.
          </div>
          <div className="opus-footer-links">
            <a href="#">Privacy Policy</a> | <a href="#">T&Cs</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

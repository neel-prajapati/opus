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

function Navbar() {
  const location = useLocation();
  return (
    <nav className="opus-nav">
      <div className={`shiny-text`} style={{ animationDuration: "5s" }}>
        Opus Designs
      </div>
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
                    sentence="Designing Spaces, Crafting Stories!"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="gainsboro"
                    animationDuration={0.4}
                    pauseBetweenAnimations={0.5}
                  />
                  {/* <p>Designing Spaces, Crafting Stories!</p> */}
                  <br />
                  <button className="opus-cta">
                    Book your design consultation
                  </button>
                </section>
                <section className="opus-services">
                  <h2>Who We Work With</h2>
                  <div className="opus-service-list">
                    <div className="opus-service">Residential Clients</div>
                    <div className="opus-service">Commercial Clients</div>
                    <div className="opus-service">Property Developers</div>
                  </div>
                </section>
                <section className="opus-about">
                  <h2>Who We Are</h2>
                  <p>
                    With years of expertise, we provide bespoke interior
                    solutions and a personalised design service.
                    <br /> No templates. No one-size-fits-all. We design spaces
                    that fit your life — not the other way around!
                  </p>
                  <button className="opus-learn-more">Learn more</button>
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
                  <h2>Nice Words From Our Clients</h2>
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

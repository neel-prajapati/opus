import React from "react";

export default function Home() {
  return null; // The homepage is already rendered in App
}

export function Portfolio() {
  const images = [
    "/portfolio1.jpeg",
    "/portfolio2.jpeg",
    "/portfolio3.jpeg",
    "/portfolio4.jpeg",
    "/portfolio5.jpeg",
    "/portfolio6.jpeg",
  ];
  const [current, setCurrent] = React.useState(0);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="opus-page">
      <section className="opus-newsletter">
        <h2>Our Portfolio</h2>
        <p>
          A showcase of our favorite interior design projects. Swipe or use the
          arrows to explore!
        </p>
        <div className="opus-carousel">
          <button
            className="carousel-arrow left"
            onClick={prev}
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <div className="carousel-image-wrapper">
            <img
              src={images[current]}
              alt={`Portfolio ${current + 1}`}
              className="carousel-image"
            />
          </div>
          <button
            className="carousel-arrow right"
            onClick={next}
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot${idx === current ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export function About() {
  return (
    <div className="opus-newsletter">
      <h1>About Us</h1>
      <p>
        Where creativity meets personal connection. Opus Designs is a boutique
        interior design studio driven by the belief that spaces should reflect
        the people who live, work, and grow in them.
      </p>
      <p>
        With a passion for crafting thoughtful, functional, and stunning
        interiors, we collaborate closely with our clients to turn their ideas
        into environments that feel personal and purposeful — not just pretty.
        Whether it's a cozy residence or a high-energy commercial space, we
        bring a balance of style, strategy, and soul to every project.
      </p>
      <br />
      <br />

      <section className="opus-testimonials">
        <h2>What We Stand For:</h2>
        <blockquote>
          <span>Authentic Design: </span>
          <br />
          “No cookie-cutter spaces — everything is tailored.”
        </blockquote>
        <blockquote>
          <span>Collaboration: </span>
          <br />
          "We listen, plan, and design with you.”
        </blockquote>
        <blockquote>
          <span>Function + Aesthetic: </span>
          <br />
          "Every space must look beautiful and work beautifully.”
        </blockquote>
        <blockquote>
          <span>Timeless over Trendy: </span>
          <br />
          "We design with longevity and love in mind. Led by a passion for
          detail and driven by your vision, we’re here to turn spaces into
          stories — one project at a time.”
        </blockquote>
      </section>
    </div>
  );
}

export function Services() {
  return (
    <div className="opus-page">
      <section className="opus-newsletter">
        <h2>Our Services</h2>
        <p>
          We offer a full spectrum of interior design services for homes,
          offices, and commercial spaces. Explore how we can transform your
          environment:
        </p>
        <div className="opus-services-grid">
          <div className="opus-service-card">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Residential Interior"
            />
            <h3>Residential Design</h3>
            <p>
              Personalized home interiors, from cozy apartments to luxury
              villas. We create spaces that reflect your lifestyle and taste.
            </p>
          </div>
          <div className="opus-service-card">
            <img
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80"
              alt="Commercial Interior"
            />
            <h3>Commercial Spaces</h3>
            <p>
              Functional and inspiring offices, retail, and hospitality
              environments that boost productivity and brand image.
            </p>
          </div>
          <div className="opus-service-card">
            <img
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80"
              alt="Renovation"
            />
            <h3>Renovation & Remodeling</h3>
            <p>
              Transform outdated spaces with smart layouts, modern finishes, and
              creative solutions for a fresh new look.
            </p>
          </div>
          <div className="opus-service-card">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80"
              alt="Consultation"
            />
            <h3>Design Consultation</h3>
            <p>
              Expert advice on color, materials, space planning, and décor to
              help you make confident design decisions.
            </p>
          </div>
        </div>{" "}
      </section>
    </div>
  );
}

export function Blog() {
  return (
    <div className="opus-page">
      <h2>Blog</h2>
      <p>Read our latest articles and insights on interior design.</p>
    </div>
  );
}

export function Contact() {
  return (
    <div className="opus-page">
      <section className="opus-newsletter">
        <h1>Contact Us</h1>
        <br />
        <h2>Let’s bring your vision to life.</h2>
        <br />

        <h3>
          We’d love to hear from you — whether you’re ready to start your design
          journey or just have a few questions.
        </h3>
        <h3>Contact us for inquiries, consultations, or collaborations.</h3>
        <br />
        <h3>Enter your email and we'll get in touch with you!</h3>
        <br />

        <form>
          <input type="email" placeholder="Your email address" />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

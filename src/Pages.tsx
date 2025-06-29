// import React from "react";

export default function Home() {
  return null; // The homepage is already rendered in App
}

export function Portfolio() {
  const projects = [
    {
      img: "/portfolio1.jpeg",
      title: "Modern Living Room",
      desc: "A contemporary living space featuring neutral tones, layered textures, and custom lighting for a warm, inviting atmosphere. Designed for both comfort and style, perfect for family gatherings and entertaining guests.",
    },
    {
      img: "/portfolio2.jpeg",
      title: "Luxury Master Suite",
      desc: "A serene master bedroom retreat with plush fabrics, elegant gold accents, and a statement headboard. The design blends timeless luxury with modern simplicity for restful nights and inspired mornings.",
    },
    {
      img: "/portfolio3.jpeg",
      title: "Creative Workspace",
      desc: "A bright, functional office with bespoke shelving, ergonomic furniture, and energizing color pops. Designed to boost productivity and creativity for remote work or business meetings.",
    },
    {
      img: "/portfolio4.jpeg",
      title: "Chic Dining Area",
      desc: "A sophisticated dining space with a marble-top table, designer chairs, and ambient pendant lighting. The perfect setting for memorable dinners and celebrations.",
    },
    {
      img: "/portfolio5.jpeg",
      title: "Elegant Entryway",
      desc: "A welcoming foyer with custom cabinetry, statement art, and layered lighting. Sets the tone for the home with a blend of function and first impressions.",
    },
    {
      img: "/portfolio6.jpeg",
      title: "Nature-Inspired Bathroom",
      desc: "A tranquil bathroom oasis with natural stone, walk-in shower, and soft gold fixtures. Designed for relaxation and daily rejuvenation.",
    },
  ];

  return (
    <div className="opus-page">
      <section className="opus-newsletter">
        <h2>Our Portfolio</h2>
        <p>
          A showcase of our favorite interior design projects. Explore the
          gallery below for inspiration!
        </p>
        <p>Designs that speak for themselves!</p>
        <div className="opus-portfolio-grid">
          {projects.map((proj, idx) => (
            <div className="opus-portfolio-card" key={idx}>
              <img
                src={proj.img}
                alt={proj.title}
                className="portfolio-image"
              />
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
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
      <br />
      <h2>Founder’s Note</h2>
      <div className="about-flex">
        <div className="about-img-col">
          <img
            src="/Melania_Trump.jpg"
            alt="Founder's Image"
            className="about-img"
          />
        </div>
        <div className="about-quote-col">
          <blockquote className="about-quote">
            “Design, for me, has always been deeply personal. It’s not about
            trends — it’s about people. About how you feel in a space, how it
            holds your story, and how it becomes part of your everyday life.
            <br />
            <br />
            That’s the kind of work we do at Opus — thoughtful, collaborative,
            and crafted with soul.”
          </blockquote>
        </div>
      </div>

      <br />
      <br />
      <br />
      <h2>Meet the Team</h2>
      <div className="about-flex">
        <div className="about-img-col">
          <img src="/team.jpg" alt="Founder's Image" className="about-img" />
        </div>
        <div className="about-quote-col">
          <blockquote className="about-quote">
            At Opus, design is never a solo act. Behind every project is a team
            of passionate designers, visual thinkers, and detail-lovers who
            bring their craft to the table every day.
            <br />
            Together, we collaborate, challenge ideas, and turn big visions into
            beautiful realities. <br /> We’re not just building spaces — we’re
            building relationships.
          </blockquote>
        </div>
      </div>

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
        <h3>Enter your details and we’ll get in touch with you:</h3>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            placeholder="Message / Project Description"
            rows={4}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        <br />
        <h3>Follow Us</h3>
        <p>
          Stay inspired, see our latest work, and get behind-the-scenes updates:
        </p>
        <div className="contact-socials">
          <a
            href="https://instagram.com/designs_by_opus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          |
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </section>
    </div>
  );
}

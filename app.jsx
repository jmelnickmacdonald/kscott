import { useEffect, useState } from "react";
import "./styles.css";

import kevin from "./kevin.jpg";
import feature from "./feature.jpg";

import heroVideo from "./hero-coast-web.mp4";
import heroPoster from "./hero-coast-poster.jpg";

import kevinWhiteLogo from "./kevinscottwhite.png";
import kevinNavyLogo from "./kscottlogo2.png";

import royalWhite from "./royal.png";
import royalNavy from "./royalnavy.png";

import knotLogo from "./KSRE_v2_knot_navy_blue.png";

import coastErik from "./erik-mclean-bVE8tpEvjDE-unsplash.jpg";
import coastAudrey from "./audrey-dandurand-EdeJfwWNa70-unsplash.jpg";
import lighthouse from "./robert-langlois-b1zUUDDt7oY-unsplash.jpg";
import redHouse from "./snap-shoot-42GlMxOlD4w-unsplash.jpg";
import halifax from "./jonathan-cooper-73NhUAQBoHI-unsplash.jpg";
import waterfront from "./livia-widjaja-VuO467wMZQI-unsplash.jpg";
import lifestyle from "./karl-hedin-0444my5elHQ-unsplash.jpg";

const properties = [
  {
    image: redHouse,
    status: "Conditionally Sold",
    title: "83 Lakecrest Drive",
    place: "East Uniacke, NS",
    price: "$ 599,000",
    mls: "MLS® 202622474",
  },
  {
    image: waterfront,
    status: "For Sale",
    title: "12337 Highway 3 Highway",
    place: "Rhodes Corner, NS",
    price: "$ 1,099,000",
    mls: "MLS® 202621750",
  },
  {
    image: lighthouse,
    status: "For Sale",
    title: "5019 201 Highway",
    place: "West Paradise, NS",
    price: "$ 949,000",
    mls: "MLS® 202620110",
  },
];

const communities = [
  {
    image: redHouse,
    title: "Annapolis Valley Region",
  },
  {
    image: halifax,
    title: "Halifax & HRM Region",
  },
  {
    image: lighthouse,
    title: "South Shore",
  },
  {
    image: waterfront,
    title: "Yarmouth Region",
  },
  {
    image: coastAudrey,
    title: "Cape Breton Region",
  },
  {
    image: coastErik,
    title: "Highland Region",
  },
];

const posts = [
  {
    image: lifestyle,
    title: "Every Home Has a Story Worth Telling",
  },
  {
    image: kevin,
    title:
      "Market Knowledge is Great, But Your Agent’s Network Can Make All The Difference",
  },
  {
    image: coastErik,
    title: "Which Home Renovations Add the Most Sale Value?",
  },
];

export default function App() {
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      setOnHero(window.scrollY < hero.offsetHeight - 95);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header onHero={onHero} />

      <main id="top">
        <Hero />
        <Intro />
        <About />
        <Quote />
        <Featured />
        <NovaScotia />
        <Communities />
        <Market />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

function Header({ onHero }) {
  return (
    <header className={`site-header ${onHero ? "over-hero" : ""}`}>
      <div className="header-inner">
        <div className="brand-group">
          <img
            className="ks-brand"
            src={onHero ? kevinWhiteLogo : kevinNavyLogo}
            alt="Kevin Scott Real Estate Team"
          />

          <img
            className="royal-brand"
            src={onHero ? royalWhite : royalNavy}
            alt="Royal LePage Atlantic"
          />
        </div>

        <nav className="nav" aria-label="Primary">
          <a href="#top">Home</a>
          <a href="#featured">Properties⌄</a>
          <a href="#luxury">Luxury Pre-Sale</a>
          <a href="#about">About</a>
          <a href="#nova">Nova Scotia</a>
          <a href="#communities">Communities</a>
          <a href="#market">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="menu-toggle" aria-label="Menu">
          ☰
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{
        backgroundImage: `url(${heroPoster})`,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <div className="hero-title">
          <span className="team">
            Kevin Scott <em>Real Estate Team</em>
          </span>

          <span className="trusted">
            Trusted Here.
          </span>

          <span className="from">
            From Anywhere.
          </span>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro">
      <h2>
        Ready When <em>the Ocean Calls.</em>
      </h2>

      <div className="lead">
        When you’re making a move, you don’t just need a REALTOR® —
        you need a team you can trust. A team that knows the local
        market, understands your goals, and shows up with strategy,
        heart, and hustle.
      </div>

      <div className="script">
        That’s where we come in.
      </div>

      <div className="intro-rule" />

      <div className="awards">
        <h3>AWARDS</h3>

        <div className="award-row">
          <div className="award-placeholder">
            ROYAL LEPAGE
            <br />
            RED DIAMOND
            <br />
            <small>AWARD 2022</small>
          </div>

          <div className="award-placeholder royal">
            <img
              src={royalNavy}
              alt="Royal LePage Atlantic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      className="about"
      id="about"
      style={{
        backgroundImage: `url(${halifax})`,
      }}
    >
      <div className="about-inner">
        <div className="about-photo">
          <img src={kevin} alt="Kevin Scott" />
        </div>

        <div className="about-copy">
          <h2>MEET KEVIN</h2>

          <h3>THE FOUNDER AND CEO</h3>

          <p>
            I’m Kevin Scott—an award-winning REALTOR®, a marketing
            guy at heart, and the founder of a growing team of local
            real estate professionals here in Nova Scotia. I made
            the move here myself a few years ago, and since then,
            I’ve proudly made this province home—not just for where
            I live, but for how I live.
          </p>

          <p>
            I’ve built my business around connection—between
            provinces, between people, and between local knowledge
            and big-picture strategy. The Kevin Scott Real Estate
            team understands that connection—as well as the
            neighbourhoods, the communities, and the pace of life
            here.
          </p>

          <p>
            We’ve built our team to serve Nova Scotia with agents
            who live where they work and genuinely care about the
            place that they proudly represent. Our approach is
            client-first, hyper-local, and deeply committed to
            making your experience as smooth and successful as
            possible.
          </p>

          <a className="btn brown" href="#">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote">
      <div className="quote-mark">
        “
      </div>

      <p>
        Whether you’re moving in, moving up, or moving on—we’re here
        to help you do it with confidence.
      </p>

      <div className="welcome serif">
        Welcome home.
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="featured" id="featured">
      <h2 className="section-title">
        Featured <em>Properties</em>
      </h2>

      <div className="feature-hero">
        <div className="feature-image">
          <img
            src={feature}
            alt="Featured property"
          />
        </div>
      </div>

      <div className="feature-info">
        <div className="statusbar">
          For Sale
        </div>

        <div className="feature-body">
          <h3>
            566 Lakeland Drive
          </h3>

          <div className="place">
            Arlington West, NS
          </div>

          <div className="price">
            $ 383,000
          </div>

          <div className="mls">
            MLS® 202610923
          </div>

          <div className="courtesy">
            Listing courtesy of Royal LePage Atlantic (New Minas).
          </div>
        </div>
      </div>

      <div className="property-grid">
        {properties.map((property) => (
          <article
            className="property"
            key={property.title}
          >
            <img
              src={property.image}
              alt={property.title}
            />

            <div className="statusbar">
              {property.status}
            </div>

            <div className="property-body">
              <h3>
                {property.title}
              </h3>

              <div className="place">
                {property.place}
              </div>

              <div className="price">
                {property.price}
              </div>

              <div className="mls">
                {property.mls}
              </div>

              <div className="courtesy">
                Listing courtesy of Royal LePage Atlantic (New Minas).
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="featured-actions">
        <a className="btn brown" href="#">
          See our interactive brochures
        </a>
      </div>
    </section>
  );
}

function NovaScotia() {
  return (
    <section
      className="nova"
      id="nova"
      style={{
        backgroundImage: `url(${coastErik})`,
      }}
    >
      <div className="nova-copy">
        <div className="kicker">
          NOVA SCOTIA
        </div>

        <h2>
          The Joy of Coastal Living
        </h2>

        <p>
          Nova Scotia is more than just a stunning coastal
          destination—it’s a place deeply rooted in history,
          culture, and character. From its storied maritime past to
          its vibrant creative scene, it’s a province which offers
          an unmatched blend of natural beauty and community
          spirit. Whether you’re new here or born here, there’s
          always more to discover.
        </p>

        <a className="btn brown" href="#">
          Learn More
        </a>
      </div>
    </section>
  );
}

function Communities() {
  return (
    <section className="communities" id="communities">
      <h2>
        Nova Scotia <em>Communities</em>
      </h2>

      <div className="community-grid">
        {communities.map((community) => (
          <article
            className="community-card"
            key={community.title}
          >
            <img
              src={community.image}
              alt={community.title}
            />

            <h3>
              {community.title}
            </h3>
          </article>
        ))}
      </div>

      <div className="action">
        <a className="btn brown" href="#">
          Browse All Communities
        </a>
      </div>
    </section>
  );
}

function Market() {
  return (
    <section className="market" id="market">
      <h2>
        From <em>the Market</em>
      </h2>

      <div className="market-grid">
        {posts.map((post) => (
          <article
            className="market-card"
            key={post.title}
          >
            <img
              src={post.image}
              alt={post.title}
            />

            <h3>
              {post.title}
            </h3>
          </article>
        ))}
      </div>

      <div className="action">
        <a className="btn brown" href="#">
          View More Posts
        </a>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      className="cta"
      id="contact"
      style={{
        backgroundImage: `url(${coastAudrey})`,
      }}
    >
      <div className="cta-inner">
        <img
          className="cta-knot"
          src={knotLogo}
          alt=""
        />

        <h2>
          A Friendly Face, A Local Expert,{" "}
          <em>A Smart Move.</em>
        </h2>

        <p>
          From coastal cottages to city homes, these are the
          properties KSRE is proud to represent. View what’s
          available now and what we’ve recently sold across Nova
          Scotia.
        </p>

        <a className="btn" href="#">
          Contact Us
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img
        className="ks-white"
        src={kevinWhiteLogo}
        alt="Kevin Scott Real Estate Team"
      />

      <div className="contact">
        8999 COMMERCIAL ST
        <br />
        New Minas, NS B4N 3E3
        <br />
        E. kevinscott@royallepage.ca
        <br />
        T. 902-321-3468 (NS)
        <br />
        T. 416-473-3468 (ON)
      </div>

      <div className="social">
        <span>◎</span>
        <span>●</span>
        <span>in</span>
      </div>

      <img
        className="royal-white"
        src={royalWhite}
        alt="Royal LePage Atlantic"
      />

      <div className="footer-rule" />

      <div className="newsletter">
        <h3>
          JOIN OUR COMMUNITY
        </h3>

        <p>
          Subscribe now and get our exclusive content on all things
          real estate.
        </p>
      </div>

      <div className="footer-bottom">
        © 2026 Kevin Scott Real Estate Team
      </div>
    </footer>
  );
}

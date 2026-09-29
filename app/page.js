import Link from "next/link";
import CallbackForm from "@/components/CallbackForm";
import FaqList from "@/components/FaqList";
import Photo from "@/components/Photo";
import ServiceCarousel from "@/components/ServiceCarousel";
import { ServiceIcon, MiniIcon } from "@/components/Icons";
import { faqs, industries, matters, posts, quotes, reasons, services, site, stats, steps } from "@/lib/data";

const featureIcons = ["team", "doc", "pin", "globe"];
const matterIcons = ["shield", "scale", "users", "doc", "star"];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    email: site.email,
    areaServed: "IN",
    description: site.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero" aria-label="Hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Your trusted compliance partner —</p>
            <h1>{site.tagline}</h1>
            <p className="lede">
              Expert support for product approvals, regulatory clearances, and licensing in India. BIS, WPC, TEC, CDSCO, BEE, LMPC, and waste compliance — handled from the first inquiry to the final government ink.
            </p>
            <div className="cert-row" aria-label="Core approvals">
              {services.map((item) => (
                <Link key={item.slug} className="cert-pill" href={`/services/${item.slug}`}>
                  <ServiceIcon name={item.icon} size={28} />
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="cta-row">
              <Link className="btn btn-yellow" href="/contact">
                Book Expert Consultation →
              </Link>
              <Link className="btn btn-ghost" href="/contact#callback">
                Request a Call →
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="frame">
              <Photo src="/images/hero.webp" alt="" priority sizes="(max-width: 980px) 100vw, 52vw" />
            </div>
            <span className="yellow-block" />
          </div>
        </div>
        <div className="stats">
          <div className="container stats-inner">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <div>
                  <b>{item.value}</b>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="About company">
        <div className="container about-grid">
          <div className="stack-photos">
            <div className="card a">
              <Photo src="/images/about-a.webp" alt="Team reviewing a product compliance plan" sizes="(max-width: 980px) 100vw, 460px" />
            </div>
            <div className="card b">
              <Photo src="/images/about-b.webp" alt="Documents and a laptop on a desk" sizes="(max-width: 980px) 100vw, 380px" />
            </div>
          </div>
          <div className="prose">
            <p className="kicker">About company</p>
            <h2>
              Your strategic
              <br />
              compliance partner
            </h2>
            <div className="rule" />
            <p>
              Inkvary Compliances is a regulatory compliance consulting company providing support for product approvals, regulatory clearances, and licensing in India.
            </p>
            <p>
              Led by professionals with 8+ years of experience in Indian product compliance, we assist manufacturers, importers, startups, and global brands through complex regulatory frameworks.{" "}
              <Link href="/about">Read More</Link>
            </p>
            <div className="feature-grid">
              {[
                ["Expert Team", "Industry specialists on the file"],
                ["End-to-End Support", "From consultation to approval"],
                ["Pan India Presence", "Support for businesses selling in India"],
                ["Focused Industries", "Electronics, telecom, wireless, medical, waste"],
              ].map(([title, text], index) => (
                <article className="feature" key={title}>
                  <span className="icon-box">
                    <MiniIcon type={featureIcons[index]} />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section paper" aria-label="Why certification matters">
        <div className="container">
          <div className="center">
            <p className="kicker">Why it matters</p>
            <h2>Why certification matters</h2>
            <div className="rule" />
          </div>
          <div className="matter-grid">
            {matters.map((item, index) => (
              <article className="matter" key={item.title}>
                <span className="icon-box">
                  <MiniIcon type={matterIcons[index]} />
                </span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Services">
        <div className="container">
          <div className="center">
            <p className="kicker">Your compliance partner —</p>
            <h2>Our core approval services</h2>
            <div className="rule" />
            <p className="subhead">Eight tracks covering the permissions electronics, telecom, wireless, medical, and packaged products usually need in India.</p>
          </div>
          <ServiceCarousel />
          <div className="center" style={{ marginTop: 8 }}>
            <Link className="btn btn-black" href="/services">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section choose" id="choose" aria-label="Why businesses choose Inkvary">
        <div className="container choose-grid">
          <article className="choose-card">
            <p className="kicker">Why businesses trust</p>
            <h2>Why choose Inkvary</h2>
            <p className="choose-lead">
              A dedicated resource, direct leadership access, and fees that stay below typical market rates without thinning out the technical work.
            </p>
            <ol className="choose-list">
              {reasons.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
          <article className="choose-card">
            <p className="kicker">How we work</p>
            <h2>A simple 4-step process</h2>
            <p className="choose-lead">Each file moves through the same four stages, from the first product question to the granted approval.</p>
            <ol className="choose-steps">
              {steps.map((step) => (
                <li key={step.n}>
                  <b>{step.n}</b>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {industries.concat(["BIS", "ISI", "WPC", "TEC", "CDSCO", "LMPC", "BEE", "CPCB"]).join("   ·   ")}
              &nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <section className="section" aria-label="Knowledge hub">
        <div className="container">
          <div className="center">
            <h2>Explore the knowledge hub</h2>
            <div className="rule" />
            <p className="subhead">Practical notes on Indian product approvals, written for manufacturers and importers who are about to file.</p>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <Link className="blog-card" key={post.slug} href={`/blog/${post.slug}`}>
                <div className="media">
                  <Photo src={post.image} alt="" sizes="(max-width: 700px) 100vw, 360px" />
                </div>
                <div>
                  <small>
                    {post.category} · {post.date}
                  </small>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper" aria-label="Industries">
        <div className="container center">
          <h2>Industries we support</h2>
          <div className="rule" />
          <p className="subhead">Manufacturers, importers, startups, and global brands entering the Indian market.</p>
          <div className="cert-row" style={{ justifyContent: "center", marginTop: 22 }}>
            {industries.map((name) => (
              <span className="cert-pill" key={name}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Client notes">
        <div className="container">
          <div className="center">
            <h2>What clients notice</h2>
            <div className="rule" />
          </div>
          <div className="quote-grid">
            {quotes.map((item) => (
              <article className="quote-card" key={item.role}>
                <div className="stars" aria-label="5 stars">
                  ★★★★★
                </div>
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
                <span className="meta">{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section query" aria-label="Request a call back">
        <div className="container query-grid">
          <div>
            <p className="kicker">Request a call back</p>
            <h2>Speak with a senior technical adviser</h2>
            <div className="rule" />
            <p className="lede">
              Share your name and number. We will open an email with your enquiry so it reaches {site.email} directly. Tell us the product and the market you are entering.
            </p>
          </div>
          <CallbackForm />
        </div>
      </section>

      <section className="section faq-section" aria-label="Frequently asked questions">
        <div className="container">
          <div className="center">
            <h2>Frequently asked questions</h2>
            <div className="rule" />
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}

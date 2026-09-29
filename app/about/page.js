import Link from "next/link";
import Photo from "@/components/Photo";
import { industries, reasons, steps } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Inkvary Compliances supports product approvals, regulatory clearances, and licensing in India, led by professionals with 8+ years in Indian product compliance.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> / About
            </p>
            <p className="kicker">About us</p>
            <h1>From inquiry to final government ink</h1>
            <p className="lede">
              Inkvary Compliances is a regulatory compliance consulting company. We support product approvals, regulatory clearances, and licensing for businesses that want to operate in the Indian market.
            </p>
          </div>
          <div className="detail-photo">
            <Photo src="/images/handshake.webp" alt="Handshake after a compliance briefing" sizes="(max-width: 980px) 100vw, 520px" priority />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container prose" style={{ maxWidth: 860 }}>
          <p>
            The practice is led by professionals with more than eight years in Indian product compliance. Manufacturers, importers, startups, and global brands use that experience when a product has to clear BIS, WPC, TEC, CDSCO, BEE, Legal Metrology, or waste rules before it can be sold.
          </p>
          <p>
            We cover electronics, telecom, wireless, medical devices, and waste management. The work is end to end: confirm what applies, prepare the file, coordinate testing where a laboratory is required, and stay with the application until the authority grants the approval.
          </p>
          <p>
            Each project has a dedicated resource, with direct involvement from the leadership team. When a product needs an approval outside the core set, we bring in a trusted compliance partner rather than leaving that part of the file open.
          </p>
        </div>
      </section>
      <section className="section paper">
        <div className="container">
          <h2>Why teams stay</h2>
          <div className="rule" />
          <div className="blog-grid">
            {reasons.map((item) => (
              <article className="reason" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <p className="kicker">Industries</p>
            <h2>Where the work sits</h2>
            <div className="rule" />
            <ul className="check-list">
              {industries.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            {steps.map((step) => (
              <article className="step" key={step.n}>
                <b>{step.n}</b>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
            <div className="cta-row">
              <Link className="btn btn-yellow" href="/contact">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

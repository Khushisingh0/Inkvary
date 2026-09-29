import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { ServiceIcon } from "@/components/Icons";
import { getService, services, steps } from "@/lib/data";

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.menu, description: service.blurb };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <div className="container detail-grid">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> / <Link href="/services">Services</Link> / {service.title}
            </p>
            <ServiceIcon name={service.icon} size={48} />
            <h1 style={{ marginTop: 12 }}>{service.menu}</h1>
            <p className="lede">{service.summary}</p>
            <div className="cta-row">
              <Link className="btn btn-yellow" href="/contact">
                Discuss this approval
              </Link>
            </div>
          </div>
          <div className="detail-photo">
            <Photo src={service.image} alt="" priority sizes="(max-width: 980px) 100vw, 560px" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div className="prose">
            <p className="kicker">{service.category}</p>
            <h2>How this approval works</h2>
            <div className="rule" />
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <h3 className="display">Who it is for</h3>
            <ul className="check-list">
              {service.applies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="container detail-grid">
          <div>
            <h2>What we handle</h2>
            <div className="rule" />
            <ul className="check-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Papers usually required</h2>
            <div className="rule" />
            <ul className="check-list">
              {service.documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>The same four steps</h2>
          <div className="rule" />
          <div className="blog-grid">
            {steps.slice(0, 3).concat(steps.slice(3)).map((step) => (
              <article className="step" key={step.n} style={{ gridTemplateColumns: "auto 1fr" }}>
                <b>{step.n}</b>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <h2 style={{ marginTop: 48 }}>Related approvals</h2>
          <div className="rule" />
          <div className="service-list">
            {others.map((item) => (
              <Link className="service-row" key={item.slug} href={`/services/${item.slug}`}>
                <ServiceIcon name={item.icon} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.category}</small>
                </span>
                <em>→</em>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

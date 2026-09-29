import Link from "next/link";
import { services } from "@/lib/data";
import { ServiceIcon } from "@/components/Icons";

export const metadata = {
  title: "Services",
  description:
    "BIS CRS, ISI and FMCS, WPC, TEC, CDSCO, LMPC, BEE, and waste management compliance for the Indian market.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="crumb">
          <Link href="/">Home</Link> / Services
        </p>
        <p className="kicker">Our services</p>
        <h2>Approvals we take from inquiry to ink</h2>
        <div className="rule" />
        <p className="subhead">
          Electronic and IT products, electrical goods, wireless devices, telecom equipment, medical devices, imported packs, energy-consuming appliances, and waste obligations.
        </p>
        <div className="service-list" style={{ marginTop: 28 }}>
          {services.map((item) => (
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
  );
}

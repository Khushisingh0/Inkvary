import CallbackForm from "@/components/CallbackForm";
import { site } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description: "Request a consultation with Inkvary Compliances for product approvals and licensing in India.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container query-grid">
        <div>
          <p className="kicker">Contact</p>
          <h2>Request a call back</h2>
          <div className="rule" />
          <p className="lede">
            Tell us the product, who will sell it in India, and which approval you think you need. If you are not sure, say so — mapping the requirement is the first step.
          </p>
          <ul className="check-list">
            <li>Email: {site.email}</li>
            <li>Coverage: {site.location}</li>
            <li>BIS, WPC, TEC, CDSCO, BEE, LMPC, and waste compliance</li>
          </ul>
        </div>
        <CallbackForm id="callback" />
      </div>
    </section>
  );
}

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <article className="article">
      <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: 36 }}>
        Terms & Conditions
      </h1>
      <p>
        The pages on this site describe the consulting support Inkvary Compliances offers. They are not a government notice, and they do not by themselves create a client engagement.
      </p>
      <p>
        Approvals, registrations, and licences are granted by the relevant Indian authorities. Timelines and document lists change with the product and the current rules. A scope, fee, and document plan are confirmed in writing before project work starts.
      </p>
      <p>
        You are responsible for the accuracy of product data, test reports, and authorisations you provide. We are responsible for handling that material with care and for telling you when a requirement is unclear.
      </p>
    </article>
  );
}

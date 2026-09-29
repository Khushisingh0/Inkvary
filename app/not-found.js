import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p className="lede">That address is not on the Inkvary site.</p>
        <div className="cta-row">
          <Link className="btn btn-yellow" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

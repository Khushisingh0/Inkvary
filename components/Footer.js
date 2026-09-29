import Link from "next/link";
import { services, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-light" aria-label="Inkvary home">
            <img src="/logo-white.png" alt="Inkvary" width={168} height={36} />
            <span>Compliances</span>
          </Link>
          <p>
            Your compliance partner for product approvals, regulatory clearances, and licensing in India. From inquiry to final government ink.
          </p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Knowledge Hub</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div>
          <h2>Our Services</h2>
          {services.slice(0, 6).map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`}>
              {item.menu}
            </Link>
          ))}
        </div>
        <div>
          <h2>Government Links</h2>
          <a href="https://www.bis.gov.in/" target="_blank" rel="noreferrer">
            BIS
          </a>
          <a href="https://dot.gov.in/" target="_blank" rel="noreferrer">
            WPC / DoT
          </a>
          <a href="https://www.tec.gov.in/" target="_blank" rel="noreferrer">
            TEC
          </a>
          <a href="https://beeindia.gov.in/" target="_blank" rel="noreferrer">
            BEE
          </a>
          <a href="https://cdsco.gov.in/" target="_blank" rel="noreferrer">
            CDSCO
          </a>
          <a href="https://cpcb.nic.in/" target="_blank" rel="noreferrer">
            CPCB
          </a>
        </div>
        <div>
          <h2>Contact</h2>
          <p>{site.location}</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link className="footer-cta" href="/contact">
            Get Expert Consultation
          </Link>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} Inkvary Compliances. All rights reserved.</span>
        <span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
  );
}

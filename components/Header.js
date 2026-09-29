"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { posts, services, site } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hubOpen, setHubOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setHubOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="site-head">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Regulatory compliance consulting · {site.location}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Inkvary Compliances home">
            <img src="/logo.png" alt="Inkvary" width={168} height={36} />
            <span>Compliances</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <Link className={pathname === "/" ? "active" : ""} href="/">
              Home
            </Link>
            <Link className={pathname.startsWith("/about") ? "active" : ""} href="/about">
              About
            </Link>
            <div
              className="nav-drop"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link className={pathname.startsWith("/services") ? "active" : ""} href="/services">
                Services
              </Link>
              <div className={`drop-panel ${servicesOpen ? "show" : ""}`}>
                {services.map((item) => (
                  <Link key={item.slug} href={`/services/${item.slug}`}>
                    <strong>{item.title}</strong>
                    <small>{item.category}</small>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className="nav-drop"
              onMouseEnter={() => setHubOpen(true)}
              onMouseLeave={() => setHubOpen(false)}
            >
              <Link className={pathname.startsWith("/blog") ? "active" : ""} href="/blog">
                Knowledge Hub
              </Link>
              <div className={`drop-panel narrow ${hubOpen ? "show" : ""}`}>
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <strong>{post.title}</strong>
                    <small>{post.category}</small>
                  </Link>
                ))}
              </div>
            </div>
            <Link className={pathname.startsWith("/contact") ? "active" : ""} href="/contact">
              Contact Us
            </Link>
          </nav>
          <Link className="header-cta" href="/contact">
            Book Consultation
          </Link>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {open ? (
          <div className="mobile-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <button type="button" onClick={() => setServicesOpen((value) => !value)}>
              Services
            </button>
            {servicesOpen
              ? services.map((item) => (
                  <Link key={item.slug} className="sub" href={`/services/${item.slug}`}>
                    {item.title}
                  </Link>
                ))
              : null}
            <Link href="/services">All services</Link>
            <Link href="/blog">Knowledge Hub</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        ) : null}
      </header>
    </div>
  );
}

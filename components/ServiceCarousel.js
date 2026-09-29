"use client";

import Link from "next/link";
import { useRef } from "react";
import { services } from "@/lib/data";
import { ServiceIcon } from "./Icons";
import Photo from "./Photo";

export default function ServiceCarousel() {
  const scroller = useRef(null);

  function move(direction) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("article");
    const amount = card ? card.getBoundingClientRect().width + 18 : 320;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <div className="carousel-wrap">
      <button className="carousel-btn" type="button" aria-label="Previous services" onClick={() => move(-1)}>
        ‹
      </button>
      <div className="carousel" ref={scroller}>
        {services.map((item) => (
          <article key={item.slug} className="service-card">
            <div className="service-photo">
              <Photo src={item.image} alt="" sizes="(max-width: 700px) 86vw, 320px" />
              <span className="service-badge">
                <ServiceIcon name={item.icon} size={42} />
              </span>
            </div>
            <div className="service-copy">
              <h3>{item.menu}</h3>
              <p>{item.blurb}</p>
              <Link href={`/services/${item.slug}`}>Learn More →</Link>
            </div>
          </article>
        ))}
      </div>
      <button className="carousel-btn" type="button" aria-label="Next services" onClick={() => move(1)}>
        ›
      </button>
    </div>
  );
}

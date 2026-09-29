export function ServiceIcon({ name, size = 36 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    "aria-hidden": true,
  };

  if (name === "bis") {
    return (
      <svg {...common}>
        <rect width="48" height="48" rx="12" fill="#1d4ed8" />
        <rect x="11" y="12" width="26" height="18" rx="3" fill="#fff" />
        <path d="M16 18h8M16 22h12M16 26h6" stroke="#1d4ed8" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="32" cy="32" r="7" fill="#F7FF36" />
        <path d="M29.2 32.1 31.2 34.1 35.2 29.6" fill="none" stroke="#111" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "isi") {
    return (
      <svg {...common}>
        <rect width="48" height="48" rx="12" fill="#dc2626" />
        <circle cx="24" cy="23" r="10" fill="#fff" />
        <path d="M24 16.5v4.2M24 25.2v1.6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 34h12" stroke="#F7FF36" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "wpc") {
    return (
      <svg {...common}>
        <rect width="48" height="48" rx="12" fill="#0891b2" />
        <path d="M24 30.5v-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="24" cy="32.2" r="1.5" fill="#F7FF36" />
        <path d="M18.5 22.5a7.5 7.5 0 0 1 11 0M15 18.8a12.5 12.5 0 0 1 18 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "tec") {
    return (
      <svg {...common}>
        <rect width="48" height="48" rx="12" fill="#4f46e5" />
        <rect x="12" y="16" width="24" height="16" rx="3" fill="#fff" />
        <path d="M18 36h12M24 32v4" stroke="#F7FF36" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 22h6M18 26h12" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "cdsco") {
    return (
      <svg {...common}>
        <rect width="48" height="48" rx="12" fill="#059669" />
        <circle cx="24" cy="24" r="10" fill="#fff" />
        <path d="M24 17.5v13M17.5 24h13" stroke="#059669" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "lmpc") {
    return (
      <svg {...common}>
        <rect width="48" height="48" rx="12" fill="#d97706" />
        <path d="M24 14v6M16 22h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 22 12.5 32h7L16 22Zm16 0-3.5 10h7L32 22Z" fill="#fff" />
        <path d="M14 34.5h20" stroke="#F7FF36" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "bee") {
    return (
      <svg {...common}>
        <rect width="48" height="48" rx="12" fill="#16a34a" />
        <path d="M24 34c6-3.2 8-8 8-13a8 8 0 1 0-16 0c0 5 2 9.8 8 13Z" fill="#fff" />
        <path d="M24 21.5 25.4 24l2.8.3-2.1 1.9.6 2.8L24 27.6l-2.7 1.4.6-2.8-2.1-1.9 2.8-.3L24 21.5Z" fill="#16a34a" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect width="48" height="48" rx="12" fill="#0d9488" />
      <path d="M18 20.5 24 15l6 5.5V33H18V20.5Z" fill="#fff" />
      <path d="M22 27.5h4V33h-4v-5.5Z" fill="#0d9488" />
      <path d="M30.5 16.5a6 6 0 0 1 2 4.2" fill="none" stroke="#F7FF36" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MiniIcon({ type }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (type === "team") {
    return (
      <svg {...props}>
        <circle cx="9" cy="8" r="2.4" />
        <path d="M4.5 18.5v-.4c0-2 1.9-3.4 4.5-3.4s4.5 1.4 4.5 3.4v.4" />
        <circle cx="16.5" cy="8.5" r="2" />
        <path d="M15 14.8c1.7.3 3.2 1.3 3.2 3.2v.5" />
      </svg>
    );
  }
  if (type === "doc") {
    return (
      <svg {...props}>
        <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
        <path d="M14 3.6V8h4M8.5 12.5h7M8.5 16h5" />
      </svg>
    );
  }
  if (type === "pin") {
    return (
      <svg {...props}>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    );
  }
  if (type === "globe") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.4 2.2 13.6 0 16M12 4c-2.2 2.4-2.2 13.6 0 16" />
      </svg>
    );
  }
  if (type === "scale") {
    return (
      <svg {...props}>
        <path d="M12 4v16M8 20h8M12 7l-5 6h4.2L12 7Zm0 0 5 6h-4.2L12 7Z" />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3.5 19 6.5v6c0 4.2-2.8 7.2-7 8.5-4.2-1.3-7-4.3-7-8.5v-6L12 3.5Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (type === "users") {
    return (
      <svg {...props}>
        <circle cx="8" cy="9" r="2.2" />
        <circle cx="16" cy="9" r="2.2" />
        <path d="M3.8 18c.4-2.2 2.2-3.4 4.2-3.4s3.8 1.2 4.2 3.4M12 14.6c.4-2.2 2.1-3.4 4-3.4 1.8 0 3.4 1.1 3.9 3.2" />
      </svg>
    );
  }
  if (type === "clock") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4.5L15 15" />
      </svg>
    );
  }
  if (type === "network") {
    return (
      <svg {...props}>
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="18" cy="17" r="2" />
        <path d="M8 12h6M16.2 8.6 9.4 11.2M16.2 15.4 9.4 12.8" />
      </svg>
    );
  }
  if (type === "card") {
    return (
      <svg {...props}>
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="M3.5 10h17" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M12 3.5 14.2 8l5 .6-3.7 3.4.9 4.9L12 14.8 7.6 16.9l.9-4.9L4.8 8.6 9.8 8 12 3.5Z" />
    </svg>
  );
}

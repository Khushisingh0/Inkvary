"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const empty = { name: "", mobile: "", email: "", message: "" };

export default function CallbackForm({ id = "callback", compact = false }) {
  const [values, setValues] = useState(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update(event) {
    setSent(false);
    setError("");
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function submit(event) {
    event.preventDefault();
    if (values.name.trim().length < 2) {
      setError("Enter your name.");
      return;
    }
    if (!/^\d{10}$/.test(values.mobile.trim())) {
      setError("Enter a 10 digit mobile number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    const body = [
      `Name: ${values.name.trim()}`,
      `Mobile: ${values.mobile.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      values.message.trim() || "Please call me back about a product approval.",
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Consultation request — Inkvary"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setValues(empty);
  }

  return (
    <form id={id} className={compact ? "form compact" : "form"} onSubmit={submit} noValidate>
      <label>
        Your Name
        <input name="name" value={values.name} onChange={update} autoComplete="name" />
      </label>
      <label>
        10 digit Mobile No
        <input name="mobile" inputMode="numeric" value={values.mobile} onChange={update} autoComplete="tel" />
      </label>
      <label>
        Email
        <input name="email" type="email" value={values.email} onChange={update} autoComplete="email" />
      </label>
      <label className="wide">
        Message
        <textarea name="message" rows={compact ? 3 : 4} value={values.message} onChange={update} />
      </label>
      {error ? <p className="form-note error">{error}</p> : null}
      {sent ? (
        <p className="form-note ok">
          Your email app should open with this enquiry addressed to {site.email}. If it does not, send the same details there directly.
        </p>
      ) : null}
      <button className="btn btn-yellow" type="submit">
        Submit
      </button>
    </form>
  );
}

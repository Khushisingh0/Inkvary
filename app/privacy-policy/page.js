import { site } from "@/lib/data";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="article">
      <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: 36 }}>
        Privacy Policy
      </h1>
      <p>
        Inkvary Compliances uses the details you send — name, mobile number, email, and message — only to reply to a consultation request. We do not sell that information.
      </p>
      <p>
        The contact form opens an email to {site.email} on your device. The message sits in your own mail app until you send it. If you email us directly, we keep the thread for as long as the enquiry or project needs it.
      </p>
      <p>
        This site does not run advertising cookies. Government websites linked from the footer have their own privacy notices.
      </p>
      <p>Questions about this notice can be sent to {site.email}.</p>
    </article>
  );
}

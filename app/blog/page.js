import Link from "next/link";
import Photo from "@/components/Photo";
import { posts } from "@/lib/data";

export const metadata = {
  title: "Knowledge Hub",
  description: "Notes on BIS, WPC, and waste compliance for teams preparing an Indian product approval.",
};

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="crumb">
          <Link href="/">Home</Link> / Knowledge Hub
        </p>
        <h2>Knowledge hub</h2>
        <div className="rule" />
        <p className="subhead">Short, practical notes for teams about to file an Indian product approval.</p>
        <div className="blog-grid" style={{ marginTop: 28 }}>
          {posts.map((post) => (
            <Link className="blog-card" key={post.slug} href={`/blog/${post.slug}`}>
              <div className="media">
                <Photo src={post.image} alt="" sizes="(max-width: 700px) 100vw, 360px" />
              </div>
              <div>
                <small>
                  {post.category} · {post.date}
                </small>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

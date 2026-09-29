import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { getPost, posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="article">
      <p className="crumb" style={{ marginTop: 28 }}>
        <Link href="/">Home</Link> / <Link href="/blog">Knowledge Hub</Link>
      </p>
      <p className="meta">
        {post.category} · {post.date}
      </p>
      <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: "8px 0 0" }}>
        {post.title}
      </h1>
      <div className="article-hero">
        <Photo src={post.image} alt="" priority sizes="(max-width: 800px) 100vw, 760px" />
      </div>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="cta-row" style={{ marginTop: 28 }}>
        <Link className="btn btn-yellow" href="/contact">
          Talk through your product
        </Link>
      </div>
    </article>
  );
}

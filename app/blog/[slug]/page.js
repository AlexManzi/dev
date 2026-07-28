import { notFound } from "next/navigation";
import Navbar from "@/app/ui/navbar";
import BlogPost from "@/app/ui/blog-post";
import { blogPosts } from "@/app/data/blog.generated";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return post ? { title: `${post.title} | Alex`, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <><Navbar /><BlogPost post={post} /></>;
}

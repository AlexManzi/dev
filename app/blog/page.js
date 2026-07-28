import Navbar from "@/app/ui/navbar";
import BlogIndex from "@/app/ui/blog-index";
import { blogPosts } from "@/app/data/blog.generated";

export default function BlogPage() { return <><Navbar /><BlogIndex posts={blogPosts} /></>; }

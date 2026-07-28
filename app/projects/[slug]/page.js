import { notFound } from "next/navigation";
import Navbar from "@/app/ui/navbar";
import ProjectDetail from "@/app/ui/project-detail";
import { landingData } from "@/app/data/landing";

export function generateStaticParams() {
  return landingData.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = landingData.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <><Navbar /><ProjectDetail project={project} /></>;
}

import ProjectCard from '@/components/ProjectCard'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "我的博客",
    description: "即本站。一个使用 NextJS + Tailwind CSS + shadcn/ui 搭建的博客。",
    link: "/projects/project1",
    tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    image: "/images/liwei-avatar-preview.webp",
    imageUrl: "/images/liwei-avatar-preview.webp"
  },
  {
    title: "项目2",
    description: "项目2是一个创新的应用,旨在解决特定问题。这里简要介绍其特点。",
    link: "/projects/project2",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    image: "/images/liwei-avatar-preview.webp",
    imageUrl: "/images/liwei-avatar-preview.webp"
  },
  {
    title: "项目3",
    description: "项目3展示了高级的前端技术应用。这是对其功能的简要概述。",
    link: "/projects/project3",
    tags: ["Vue.js", "Vuex", "Firebase"]
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <section className="mb-12 sm:mb-16 mt-8 sm:mt-20 bg-background/80 backdrop-blur-md rounded-lg p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">我的项目</h1>
          <p className="text-xl sm:text-xl mb-6 sm:mb-8">这里展示了我正在进行的一些项目</p>
          <Button>添加新项目</Button>
        </section>
        
        <section className="bg-background/80 backdrop-blur-md rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                imageUrl={project.imageUrl || ""}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

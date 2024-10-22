import { notFound } from 'next/navigation'
import { ProjectData } from '@/types/project'

// 模拟项目数据
const projects: ProjectData[] = [
  { id: 'project1', title: '项目1', description: '这是项目1的详细描述', tags: ['标签1', '标签2'] },
  { id: 'project2', title: '项目2', description: '这是项目2的详细描述', tags: ['标签3', '标签4'] },
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

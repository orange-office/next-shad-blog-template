import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <Link href={link} className="block hover:shadow-lg transition-shadow">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default ProjectCard

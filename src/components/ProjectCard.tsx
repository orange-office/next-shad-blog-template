import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  link: string
  tags: string[]
  imageUrl: string  // 新增图片URL属性
}

const ProjectCard = ({ title, description, link, tags, imageUrl }: ProjectCardProps) => {
  return (
    <Link href={link} className="block hover:shadow-lg transition-shadow">
      <Card>
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            width={500}
            height={300}
            className="rounded-t-lg object-cover w-full h-48"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProjectCard

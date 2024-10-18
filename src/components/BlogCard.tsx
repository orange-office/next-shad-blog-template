import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  link: string
}

const BlogCard = ({ title, excerpt, date, link }: BlogCardProps) => {
  return (
    <Link href={link} className="block hover:shadow-lg transition-shadow">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
          <div className="text-sm text-gray-500 mt-2">{date}</div>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default BlogCard

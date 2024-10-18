import { FC, ReactNode } from 'react'
import { format } from 'date-fns'

interface BlogLayoutProps {
  children: ReactNode
  title: string
  date: Date
  author: string
  tags?: string[]
}

const BlogLayout: FC<BlogLayoutProps> = ({ children, title, date, author, tags }) => {
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-sm font-semibold mb-3">{title}</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <time dateTime={date.toISOString()}>{format(date, 'MMMM d, yyyy')}</time>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  )
}

export default BlogLayout

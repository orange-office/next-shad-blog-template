import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

interface PostData {
  date: string;
  title: string;
  id: string;
  contentHtml: string;
  tags?: string[];
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug) as PostData;

  if (!postData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-transparent text-foreground mt-4">
      <div className="container mx-auto px-4 py-16">
        <article className="prose lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">{postData.title}</h1>
          <p>
            发布日期: {postData.date}
          </p>
          {postData.tags && postData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {postData.tags.map((tag: string) => (
                <Link href={`/tags/${encodeURIComponent(tag)}`} key={tag}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </article>
      </div>
    </main>
  )
}

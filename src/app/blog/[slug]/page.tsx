import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)

  if (!postData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <article className="prose lg:prose-xl dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            发布日期: {postData.date}
          </p>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </article>
      </div>
    </main>
  )
}

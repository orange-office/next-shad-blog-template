import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  const tags = new Set(posts.flatMap(post => post.tags ?? []))
  return Array.from(tags).map(tag => ({ tag: encodeURIComponent(tag) }))
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag)
  const posts = getSortedPostsData()
  const tagPosts = posts.filter(post => post.tags && post.tags.includes(decodedTag))

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">标签: {decodedTag}</h1>
        <ul className="space-y-4">
          {tagPosts.map((post) => (
            <li key={post.id} className="bg-card p-4 rounded-lg shadow">
              <Link href={`/blog/${post.id}`} className="text-xl font-semibold hover:underline">
                {post.title}
              </Link>
              <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

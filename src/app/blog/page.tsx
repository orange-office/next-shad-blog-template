import BlogCard from '@/components/BlogCard'
import { Button } from "@/components/ui/button"
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16 mt-20">
          <h1 className="text-4xl font-bold mb-8">博客</h1>
          <p className="text-xl mb-8">在这里,我分享我的技术见解和想法</p>
          <Button>创建新文章</Button>
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPostsData.map((post) => (
              <BlogCard 
                key={post.id}
                title={post.title}
                excerpt={post.excerpt || ''}
                date={post.date}
                link={`/blog/${post.id}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

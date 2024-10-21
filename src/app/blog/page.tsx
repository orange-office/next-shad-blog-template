import BlogCard from '@/components/BlogCard'
import { Button } from "@/components/ui/button"
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <section className="mb-12 sm:mb-16 mt-8 sm:mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">博客</h1>
          <p className="text-xl sm:text-xl mb-6 sm:mb-8">在这里,我分享我的技术见解和想法</p>
          <Button>创建新文章</Button>
        </section>
        
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'

export default function Blog() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-4">
        </div>
        <section id="home" className="mb-16 mt-20">
          <h1 className="text-4xl font-bold mb-8">博客</h1>
          <p className="text-xl">我在这里发布一些技术文章和想法</p>
        </section>
        
      </div>
    </main>
  )
}

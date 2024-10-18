import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import { HomeIcon, RocketLaunchIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <section id="home" className="mb-16 mt-20">
          <h1 className="text-4xl font-bold mb-8">欢迎来到我的个人网站</h1>
          <p className="text-xl">这里是我展示项目和分享想法的地方。</p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mt-16 mb-8 flex items-center">
            <RocketLaunchIcon className="w-8 h-8 mr-2 text-primary" />
            正在开发的项目
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProjectCard 
              title="项目1" 
              description="这是一个正在开发的项目描述"
              link="/projects/project1"
            />
            <ProjectCard 
              title="项目2" 
              description="另一个正在开发的项目描述"
              link="/projects/project2" 
            />
            {/* 添加更多项目卡片 */}
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <NewspaperIcon className="w-8 h-8 mr-2 text-primary" />
            最近更新的博客
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlogCard 
              title="博客文章1" 
              excerpt="这是博客文章1的摘要..."
              date="2023-04-01"
              link="/blog/post-1"
            />
            <BlogCard 
              title="博客文章2" 
              excerpt="这是博客文章2的摘要..."
              date="2023-03-28"
              link="/blog/post-2"
            />
            <BlogCard 
              title="博客文章3" 
              excerpt="这是博客文章4的摘要..."
              date="2023-04-01"
              link="/blog/post-3"
            />
            <BlogCard 
              title="博客文章4" 
              excerpt="这是博客文章4的摘要..."
              date="2023-03-28"
              link="/blog/post-4"
            />
            <BlogCard 
              title="博客文章1" 
              excerpt="这是博客文章1的摘要..."
              date="2023-04-01"
              link="/blog/post-1"
            />
            <BlogCard 
              title="博客文章2" 
              excerpt="这是博客文章2的摘要..."
              date="2023-03-28"
              link="/blog/post-2"
            />
            <BlogCard 
              title="博客文章3" 
              excerpt="这是博客文章4的摘要..."
              date="2023-04-01"
              link="/blog/post-3"
            />
            <BlogCard 
              title="博客文章4" 
              excerpt="这是博客文章4的摘要..."
              date="2023-03-28"
              link="/blog/post-4"
            />
            {/* 添加更多博客卡片 */}
          </div>
        </section>
      </div>
    </main>
  )
}

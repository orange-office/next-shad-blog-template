import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import { RocketLaunchIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const allPostsData = getSortedPostsData()
  const recentPosts = allPostsData.slice(0, 8) // 只取最新的8篇文章

  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <section id="home" className="mb-12 sm:mb-16 mt-8 sm:mt-20 bg-background/70 backdrop-blur-sm rounded-lg p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">欢迎来到我的个人网站</h1>
          <p className="text-lg sm:text-xl">这里是我展示项目和分享想法的地方。</p>
        </section>
        <section className="mb-12 sm:mb-16 bg-background/70 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-16 mb-6 sm:mb-8 flex items-center">
            <RocketLaunchIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-primary" />
            正在开发的项目
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
        
        <section className="bg-background/70 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
            <NewspaperIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-primary" />
            最近更新的博客
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {recentPosts.map((post) => (
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

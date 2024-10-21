import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  date: string;
  title: string;
  excerpt: string;
  id: string;
  tags?: string[]; // 添加这一行
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      excerpt: matterResult.data.excerpt || '',
      ...(matterResult.data as { date: string; title: string; excerpt?: string }),
      tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : []
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 使用 gray-matter 解析 post 元数据部分
  const matterResult = matter(fileContents)

  // 使用 remark 将 markdown 转换为 HTML 字符串
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // 将数据与 id 和 contentHtml 组合
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}

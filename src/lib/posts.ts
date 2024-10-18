import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getSortedPostsData() {
  // 获取 /content/posts 目录下的文件名
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // 移除文件名中的 ".md" 来获取 id
    const id = fileName.replace(/\.md$/, '')

    // 读取 markdown 文件作为字符串
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 使用 gray-matter 解析 post 元数据部分
    const matterResult = matter(fileContents)

    // 将数据与 id 组合
    return {
      id,
      excerpt: matterResult.data.excerpt || '',
      ...(matterResult.data as { date: string; title: string; excerpt?: string })
    }
  })
  // 按日期排序
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

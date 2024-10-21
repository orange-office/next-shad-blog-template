import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeartIcon, XIcon, LinkIcon, Github } from "lucide-react"
import Link from "next/link"
import MatrixRain from "@/components/MatrixRain"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-3xl mx-auto mt-20 relative overflow-hidden">
          <MatrixRain />
          <div className="relative z-10">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-center">关于我</CardTitle>
              <Link href="/about" className="text-center block">
                <p className="mb-6 hover:underline">Neontiy</p>
                <Image src="/images/matrix-neonity-avatar.png" alt="头像" width={96} height={96} className="rounded-full mx-auto mb-4" />
              </Link>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-center mb-8">磁共振产品经理 | 脑科学爱好者 | Web开发爱好者</p>
              <p className="mb-6">
                我是一名磁共振产品经理，同时也是一名脑科学爱好者和web开发爱好者。我热衷于探索新技术并将其应用到实际项目中。
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-center">联系我</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <XIcon className="w-5 h-5" />
                  <a href="https://x.com/neonity2022" target="_blank" rel="noopener noreferrer" className="text-center">Twitter</a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <a href="https://github.com/neonity2020" target="_blank" rel="noopener noreferrer" className="text-center">GitHub</a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <HeartIcon className="w-5 h-5" />
                  <a href="https://www.xiaohongshu.com/user/profile/591355a05e87e739d58f8b5a" target="_blank" rel="noopener noreferrer" className="text-center">小红书</a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5" />
                  <a href="http://m.okjike.com/users/9a5ff53b-544b-4913-8f33-b46e8c16f7da?ref=PROFILE_CARD&utm_source=user_card" target="_blank" rel="noopener noreferrer" className="text-center">即刻</a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </main>
  )
}

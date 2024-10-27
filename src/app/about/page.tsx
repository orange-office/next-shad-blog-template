import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeartIcon, XIcon, LinkIcon, Github } from "lucide-react"
import Link from "next/link"
import Sakura from "@/components/Sakura"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <section className="mb-12 sm:mb-16 mt-8 sm:mt-20 bg-transparent backdrop-blur-md rounded-lg p-6">
          <Card className="max-w-3xl mx-auto relative overflow-hidden">
            <Sakura className="absolute inset-0" />
            <div className="relative z-10">
              <CardHeader className="pb-4">
                <CardTitle className="text-4xl font-bold text-center text-white">关于我</CardTitle>
                <Link href="/about" className="text-center block">
                  <p className="mb-4 hover:underline text-white">Li Wei</p>
                  <Image 
                    src="/images/liwei-avatar.jpg" 
                    alt="头像" 
                    width={96} 
                    height={96} 
                    className="rounded-full mx-auto"
                  />
                </Link>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xl text-center mb-6 text-white">李薇团长</p>
                <p className="mb-6 text-white text-center">
                  每天带给你互联网的精华内容
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-center text-white">联系我</h2>
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
        </section>
      </div>
    </main>
  )
}

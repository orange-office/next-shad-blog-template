---
title: 'NextJS + Shadcn/ui + Cursor 建站 简单工作流'
date: '2024-10-18'
excerpt: '使用NextJS + Shadcn/ui + Cursor 建站的简单工作流'
tags: ['NextJS', 'Shadcn-ui', 'Cursor', 'blog']
---

使用NextJS + Shadcn/ui + Cursor 建站的简单工作流

- 项目初始化
- 网站基本框架、路由的构建

## NextJS 初始化

```Bash
npx create-next-app@latest
```

我一般选择使用 `src` 存储源码，也可以不用
![](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ftop-level-folders.png&w=3840&q=75)

## shadcn/ui 初始化

```Bash
npx shadcn@latest init
```

一般我会把shadcn/ui的组件一次性安装全一些

- `npx shadcn@latest add card`

```Bash
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

```
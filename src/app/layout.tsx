import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from '@/components/NavBar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "我的博客",
  description: "一个使用 Next.js 构建的个人博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="flex-grow bg-background text-foreground">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </main>
          <footer className="bg-muted py-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} 我的博客. 保留所有权利。
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

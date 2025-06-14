import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tejas Portfolio",
  description: "Tejas Kumbhar Full stack developer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-gray-50 text-inherit relative sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[5rem] sm:w-[68rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[5rem] sm:w-[68rem] md:left-[-33rem]lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}

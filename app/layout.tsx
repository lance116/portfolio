import type { Metadata } from 'next'

import './globals.css'
import { AnimatedBackground } from '@/components/animated-background'

export const metadata: Metadata = {
  title: 'Lance Yan',
  description: "Lance's personal website",
  generator: 'Lance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}

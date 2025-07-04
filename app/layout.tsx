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
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}

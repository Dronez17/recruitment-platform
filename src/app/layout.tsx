import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIMBA - Future-Proof Your Workforce',
  description: 'We help you build a workforce that thrives in tomorrow\'s world with our unique Vibe Coding approach.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 
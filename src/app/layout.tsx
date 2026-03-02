import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
  title: 'TP RD',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  )
}

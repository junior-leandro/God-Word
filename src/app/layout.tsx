import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A Palavra de Deus',
  description: 'Citações biblicas diárias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#2f2f2f]  w-screen h-screen">
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AmandaStudio',
  description: 'AmandaStudio - Lash design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://i.imgur.com/iaLdgPn.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
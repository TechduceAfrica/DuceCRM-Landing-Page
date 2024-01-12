import { Outfit } from 'next/font/google'
import './globals.css'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'DuceCRM | Your Key to Better Customer Relationships',
  description: 'DuceCRM integrates with popular social messenger apps and gives users the ability to make voice calls directly from the app, increasing customer satisfaction...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}

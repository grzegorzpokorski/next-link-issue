import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import style from './styles.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={style.body}>{children}</body>
    </html>
  )
}

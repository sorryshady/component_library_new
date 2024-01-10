import localFont from 'next/font/local'
import './globals.css'

const rader = localFont({
  display: 'swap',
  src: '../public/fonts/rader-regular-webfont.woff2',
  variable: '--font-rader',
})

export const metadata = {
  title: 'hover_landing',
  description: 'hover_landing app with next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rader.variable}>{children}</body>
    </html>
  )
}

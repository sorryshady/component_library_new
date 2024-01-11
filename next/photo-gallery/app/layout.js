import localFont from 'next/font/local'
import './globals.css'

const rader = localFont({
  display: 'swap',
  src: '../public/fonts/rader-regular-webfont.woff2',
  variable: '--font-rader',
})

export const metadata = {
  title: 'photo-gallery',
  description: 'photo-gallery using next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rader.variable}>{children}</body>
    </html>
  )
}

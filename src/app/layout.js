// app/layout.js
import './globals.scss'
import { Inter, Archivo, Archivo_Black, Krona_One } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' })
const archivoBlack = Archivo_Black({ subsets: ['latin'], variable: '--font-archivo-black' })
const krona = Krona_One({ subsets: ['latin'], variable: '--font-krona' })

export const metadata = {
  title: 'BidRyde',
  description: 'Reserve your ride',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivo.variable} ${archivoBlack.variable} ${krona.variable}`}>
        {children}
      </body>
    </html>
  )
}

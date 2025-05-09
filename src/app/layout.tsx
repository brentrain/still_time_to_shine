import type { Metadata } from 'next'
import { Poppins, Raleway, Lato, Open_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-lato',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-opensans',
})

export const metadata: Metadata = {
  title: 'Still Time to Shine',
  description: 'A blog about personal growth and development',
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable} ${lato.variable} ${openSans.variable}`}>
      <body className={`${lato.className} font-light min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary shadow-lg w-full">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="text-2xl font-bold text-accent hover:text-accent-light transition-colors font-raleway">
                    Still Time to Shine
                  </span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-accent hover:text-accent-light transition-colors">
                    Home
                  </Link>
                  <Link href="/posts" className="text-accent hover:text-accent-light transition-colors">
                    Blog
                  </Link>
                  <Link href="/about" className="text-accent hover:text-accent-light transition-colors">
                    About
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8 bg-base-50 backdrop-blur-sm rounded-lg shadow-sm my-8">
            {children}
          </main>
          <footer className="bg-primary w-full mt-auto">
            <div className="container mx-auto px-4 py-6 text-center text-accent">
              <p>&copy; {new Date().getFullYear()} Still Time to Shine. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 
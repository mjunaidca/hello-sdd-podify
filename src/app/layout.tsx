import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteShell } from '@/components/site-shell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello A Podcast',
  description: 'A modern, standout podcast experience with sleek design and accessibility.',
  keywords: ['podcast', 'audio', 'episodes', 'modern', 'accessible'],
  authors: [{ name: 'Hello A Team' }],
  creator: 'Hello A Team',
  publisher: 'Hello A',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hello-a-podcast.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Hello A Podcast',
    description: 'A modern, standout podcast experience with sleek design and accessibility.',
    siteName: 'Hello A Podcast',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello A Podcast',
    description: 'A modern, standout podcast experience with sleek design and accessibility.',
    creator: '@helloa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  )
}

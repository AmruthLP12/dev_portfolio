import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amruth - Full Stack Developer Portfolio',
  description: 'Explore Amruth\'s portfolio featuring full stack projects, UI/UX designs, and technical blogs. Showcasing skills in React, Next.js, Django, Appwrite, and more.',
  keywords: [
    'Amruth',
    'Full Stack Developer',
    'Portfolio',
    'React Developer',
    'Next.js Portfolio',
    'Appwrite',
    'Django Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer Bangalore',
  ],
  authors: [{ name: 'Amruth L P', url: 'https://amruthlp.vercel.app/' }],
  creator: 'Amruth L P',
  metadataBase: new URL('https://amruthlp.vercel.app/'),
  openGraph: {
    title: 'Amruth - Full Stack Developer Portfolio',
    description: 'Dive into Amruth\'s full stack projects, technical expertise, and contributions to the web development ecosystem.',
    url: 'https://amruthlp.vercel.app/',
    siteName: 'Amruth Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg', // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: 'Amruth Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amruth - Full Stack Developer Portfolio',
    description: 'Check out Amruth\'s professional portfolio featuring React, Next.js, Django, and more.',
    creator: '@amruthlp12', // Replace with your handle
    images: ['https://amruthlp.vercel.app/og-image.jpg'],
  },
  other: {
    "google-site-verification": "m3gcO3z77CpmDFtlEBa5Qk-g2yMOUvIFj34TKqbJMoU",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        
      </body>
    </html>
  )
}


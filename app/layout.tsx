import type { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import { Providers } from './providers'
import { Header } from '@/src/components/header'
import { Footer } from '@/src/components/footer'
import { siteMetadata } from '@/lib/metadata'
import '@fontsource/roboto-slab/latin-400.css'
import '@fontsource/roboto-slab/latin-700.css'
import '@fontsource/raleway/latin-800.css'
import 'sanitize.css'

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  metadataBase: new URL(siteMetadata.siteUrl),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

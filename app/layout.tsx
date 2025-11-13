import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'موقع الشركة - خدمات احترافية متكاملة',
  description: 'نقدم خدمات تطوير المواقع الإلكترونية، تطبيقات الموبايل، والتسويق الرقمي بأعلى جودة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;
  
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}
// These styles apply to every route in the application
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'ConvertEase - Easy File Conversions',
  description: 'DownloadTube offers a fast, free, and easy way to download your favorite YouTube videos and music directly to your device. Enjoy high-quality video and audio downloads with no subscription required. Explore a variety of formats and resolutions to suit all your playback needs.',
  icons: [
    {
      rel: 'icon',
      url: 'favicon.ico',
      alt: 'DownloadTube Favicon'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icon/favicon-32x32.png',
      alt: 'DownloadTube 32x32 Icon'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/icon/android-chrome-192x192.png',
      alt: 'DownloadTube 192x192 Android Chrome Icon'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/icon/android-chrome-512x512.png',
      alt: 'DownloadTube 512x512 Android Chrome Icon'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/icon/favicon-16x16.png',
      alt: 'DownloadTube 16x16 Icon'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-icon/apple-touch-icon.png',
      alt: 'DownloadTube 180x180 Apple Touch Icon'
    },
  ],
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-2Z9QN49SME" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-2Z9QN49SME');
        `}
      </Script> */}
      <body>{children}</body>
    </html>
  )
}
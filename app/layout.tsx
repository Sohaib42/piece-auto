import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pièces-Auto Bonson',
  description: 'Trouvez une large gamme de pièces automobiles de qualité chez Pièces Auto Bonson...',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
    { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Ajoutez la balise link pour le manifest */}
        {/* Ajoutez d'autres balises link pour les icônes */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="icon" href="/favicon.ico" /> {/* Ajoutez votre favicon.ico */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Autres balises meta pertinentes */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
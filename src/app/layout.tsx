import './globals.css'
import Head from "next/head"

export const metadata = {
  title: 'Instagram',
  description: 'Instagram Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link type="image/png" sizes="16x16" rel="icon" href="/icon16x16.png" />
        <link type="image/png" sizes="32x32" rel="icon" href="/icon32x32.png" />
        <link type="image/png" sizes="96x96" rel="icon" href="/icons96x96.png" />
        <link type="image/png" sizes="120x120" rel="icon" href="/icons120x120.png" />
      </head>
      <body >{children}</body>
    </html>
  )
}

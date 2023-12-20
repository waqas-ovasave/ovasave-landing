import type { Metadata } from 'next'
import './globals.scss'
import React from "react";

export const metadata: Metadata = {
  title: 'Ovasave',
  description: 'Discover how Ovasave can help you learn about yourself and what are your options for your future family',
}

interface RootLayoutProps {
  children?: React.ReactNode
}

const RootLayout: React.FC = ({
  children,
}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;

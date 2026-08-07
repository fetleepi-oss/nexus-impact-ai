import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexus Impact AI',
  description: 'AI Operating System for Impact Organizations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

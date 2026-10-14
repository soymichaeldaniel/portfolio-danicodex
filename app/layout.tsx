import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://danicodex-portfolio.ccus-daniel-pacheco.chatgpt.site'),
  title: { default: 'Michael Daniel — Aprende programación construyendo', template: '%s | Michael Daniel' },
  description: 'Cursos gratuitos, proyectos y recursos para aprender programación de forma práctica con Michael Daniel.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Michael Daniel — Aprende programación construyendo',
    description: 'Cursos gratuitos, proyectos y recursos para aprender programación de forma práctica.',
    url: '/',
    siteName: 'Michael Daniel',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="dark"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

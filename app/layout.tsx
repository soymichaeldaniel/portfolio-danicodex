import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './retro-desktop.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://michaeldanielos.vercel.app'),
  title: 'Michael OS',
  description: 'Explora el escritorio de Michael Daniel: proyectos, cursos gratuitos, tecnología e ideas. Desarrollador frontend y creador de contenido.',
  icons: { icon: '/michael-daniel-logo-transparent.png', apple: '/michael-daniel-logo-transparent.png' },
  openGraph: {
    title: 'Michael OS',
    description: 'Un escritorio, muchas ideas. Explora mis proyectos, cursos y un poco de lo que soy.',
    url: '/',
    siteName: 'Michael OS',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="dark"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

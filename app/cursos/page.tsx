import type { Metadata } from 'next';
import { MichaelDesktop } from '@/components/michael-desktop';
export const metadata: Metadata = {
  title: 'Michael OS',
  description:
    'Rutas gratuitas de Michael Daniel para aprender programación con proyectos prácticos.',
};
export default function CoursesPage() {
  return <MichaelDesktop initialApp="courses" />;
}

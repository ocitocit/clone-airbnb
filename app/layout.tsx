import NavBar from '@/components/navbar/NavBar';
import { Nunito } from 'next/font/google';
import './globals.css';
import Modal from '@/components/modals/Modal';
import ClientOnly from '@/components/ClientOnly';
import RegisterModal from '@/components/modals/RegisterModal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Clone Airbnb'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <ClientOnly> */}
        <RegisterModal />
        <NavBar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}

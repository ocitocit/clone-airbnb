import NavBar from '@/components/navbar/NavBar';
import { Nunito } from 'next/font/google';
import './globals.css';
import ClientOnly from '@/components/ClientOnly';
import RegisterModal from '@/components/modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '@/components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Clone Airbnb'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <NavBar currentUser={currentUser} />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}

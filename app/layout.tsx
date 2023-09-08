import NavBar from '@/components/navbar/NavBar';
import { Nunito } from 'next/font/google';
import './globals.css';
import Modal from '@/components/modals/Modal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Clone Airbnb'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal
          actionLabel='Submit'
          secondaryActionLabel='Cancel'
          title='Modal'
          isOpen
        />
        <NavBar />
        {children}
      </body>
    </html>
  );
}

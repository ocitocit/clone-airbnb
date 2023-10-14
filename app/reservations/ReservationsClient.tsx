'use client';

import { SafeReservation, SafeUser } from '@/types';

interface ReservationsClientProps {
  reservations: SafeReservation;
  currentUser: SafeUser;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({ reservations, currentUser }) => {
  return <div></div>;
};
export default ReservationsClient;

'use client';

import { Range } from 'react-date-range';
import Calendar from '../inputs/Calendar';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disableDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disableDates
}) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border-[1px]
        border-neutral-200
        bg-white
      "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disableDates={disableDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
    </div>
  );
};

export default ListingReservation;

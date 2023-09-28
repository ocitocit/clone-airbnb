"use client"

import useRentModal from "@/hooks/useRentModal"
import Modal from "./Modal"

const RentModal = () => {
  const rentModal = useRentModal()

  return (
    <Modal
      title="Airbnb is your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
    />
  )
}

export default RentModal

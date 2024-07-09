/* eslint-disable tailwindcss/migration-from-tailwind-2 */

import Button from './Button'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-md border-none bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Button type="button" action={onClose} text="X" />
        {children}
      </div>
    </div>
  )
}

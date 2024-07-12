import Button from 'components/buttons/Button';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="relative w-full max-w-md p-6 bg-white rounded-md shadow-lg border-none" onClick={(e) => e.stopPropagation()}>
        <Button variant="ghost" className="absolute top-0 right-0 px-3 py-2" onClick={onClose}>X</Button>
        {children}
      </div>
    </div>
  );
}

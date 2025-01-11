import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = () => {
    onSubmit(title, description);
    setTitle('');
    setDescription('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Add New Policy</h2>
        <input
          type="text"
          placeholder="Policy Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Policy Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Modal.css";

interface ModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ src, alt, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      setIsVisible(false);
      setTimeout(onClose, 500); 
    }
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-95 p-4 ${
        isVisible ? "modal-enter-active" : "modal-exit-active"
      }`}
      onClick={handleBackgroundClick}
    >
      <div className="m-2 bg-red p-2">
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width="500"
            height="500"
            objectFit="contain"
          />
          <button
            className="close-button"
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300); // Ensure to sync this timeout with your CSS transition
            }}
          >
            <svg
              className="close-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useEffect, useState } from "react";
import "./Modal.css"; // Import the CSS file for modal styles

interface ModalProps {
  show: boolean;
  onClose: () => void;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Wait for the animation duration before actually hiding the modal
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [show]);

  if (!isVisible) return null; // Don't render modal if it's not visible

  return (
    <div className={`modal-overlay ${show ? "active" : ""}`}>
      <div className={`modal-container ${show ? "active" : ""}`}>
        <div className="modal-header">
          <h3>Learn More</h3>
        </div>

        <div className="modal-body">
          <p>{content}</p>
        </div>

        <div className="modal-footer">
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

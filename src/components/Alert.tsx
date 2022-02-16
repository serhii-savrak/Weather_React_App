import React, { FC } from "react";
import './Alert.css';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: FC<AlertProps> = ({message, onClose}) => {
  return (
    <div className="main-modal">
      <div className="modal__background" onClick={onClose} style={{display: 'flex', alignItems: 'center'}}>
        <div className="modal__card">
          <header className="modal__card-head">
            <p className="modal__card-title">{message}</p>
          </header>
          <footer className="modal__card-foot" style={{display: 'flex', justifyContent: 'center'}}>
            <button className="modal__button" onClick={onClose}>X</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Alert;

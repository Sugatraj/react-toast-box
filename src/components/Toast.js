// src/components/Toast.js
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ type, title, message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`toast ${type}`}>
      <div className="toast-content">
        <div className={`icon ${type}`}></div>
        <div className="message">
          <span className="title">{title}</span>
          <span className="text">{message}</span>
        </div>
        <button className="close" onClick={onClose}>
          ×
        </button>
      </div>
      <div className={`progress ${type}`}></div>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "danger"]).isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Toast;

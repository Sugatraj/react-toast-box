// src/context/ToastProvider.js
import React, { createContext, useState, useEffect } from "react";
import Toast from "../components/Toast";
import ToastService from "../services/ToastService";
import "../styles/Toast.css";

export const ToastContext = createContext();

export const ToastProvider = ({ children, position = "top-right" }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = ToastService.subscribe(
      (type, title, message, options) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prevToasts) => [
          ...prevToasts,
          { id, type, title, message, ...options },
        ]);
      }
    );
    return () => unsubscribe();
  }, []);

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{}}>
      {children}
      <div className={`toast-container ${position}`}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

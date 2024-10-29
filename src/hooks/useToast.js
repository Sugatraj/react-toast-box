// src/hooks/useToast.js
import { useState, useCallback } from "react";

export const useToast = () => {
  const [toast, setToast] = useState({ isVisible: false });

  const showToast = useCallback((type, title, message) => {
    setToast({ type, title, message, isVisible: true });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return { toast, showToast, hideToast };
};

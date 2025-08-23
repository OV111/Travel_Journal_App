import React from "react";
import { useEffect } from "react";
const Notification = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timerId = setTimeout(() => {
        onClose();
      }, 3000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [message, onClose]);
  if (!message) return null;
  return (
    <React.Fragment>
       <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className="bg-white border border-gray-200 text-gray-800 text-m px-6 py-3 rounded-lg shadow-lg max-w-md mx-auto backdrop-blur-sm">
        <p className="font-medium">{message}</p>
      </div>
    </div>
    </React.Fragment>
  );
};
export default Notification;

import React, { createContext, useContext, useState } from 'react';
const UploadProgressContext = createContext();

// Export a hook to use the context
export const useUploadProgress = () => useContext(UploadProgressContext);

// Provider component
export const UploadProgressProvider = ({ children }) => {
  const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 0, percentage: 0 });
  const [isUploading, setIsUploading] = useState(false);

  // info to be passed to provider
  const value = {
    uploadProgress,
    setUploadProgress,
    isUploading,
    setIsUploading
  };

  return <UploadProgressContext.Provider value={value}>{children}</UploadProgressContext.Provider>;
};

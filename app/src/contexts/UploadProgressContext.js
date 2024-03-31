import React, { createContext, useContext, useState } from 'react';

const UploadProgressContext = createContext();

export const useUploadProgress = () => useContext(UploadProgressContext);

export const UploadProgressProvider = ({ children }) => {
  const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 0, percentage: 0 });
  const [isUploading, setIsUploading] = useState(false);
  const [videoName, setVideoName] = useState(""); 

  // info to be passed to provider
  const value = {
    uploadProgress,
    setUploadProgress,
    isUploading,
    setIsUploading,
    videoName,  
    setVideoName 
  };

  return <UploadProgressContext.Provider value={value}>{children}</UploadProgressContext.Provider>;
};

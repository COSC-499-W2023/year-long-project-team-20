import React, { createContext, useContext, useState } from 'react';
const ViewContext = createContext();

// Define a provider component
export const ViewProvider = ({ children }) => {
  const [viewSelections, setViewSelections] = useState({
    //default view for upload page and library page
    requestPage: 'Send a Request', 
    libraryPage: 'Uploaded Videos', 
  });

  //set new view if user makes a change
  const updateViewSelection = (page, view) => {
    setViewSelections(prev => ({ ...prev, [page]: view }));
  };

  return (
    <ViewContext.Provider value={{ viewSelections, updateViewSelection }}>
      {children}
    </ViewContext.Provider>
  );
};

// Custom hook to use the context
export const useViewContext = () => useContext(ViewContext);

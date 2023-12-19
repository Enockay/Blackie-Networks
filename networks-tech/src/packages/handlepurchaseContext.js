import React, { createContext, useContext } from 'react';

const HandlePurchaseContext = createContext();

export const ProvideHandlePurchase = ({ children, handlePurchase }) => {
  return (
    <HandlePurchaseContext.Provider value={handlePurchase}>
      {children}
    </HandlePurchaseContext.Provider>
  );
};

export const useHandlePurchase = () => {
  return useContext(HandlePurchaseContext);
};
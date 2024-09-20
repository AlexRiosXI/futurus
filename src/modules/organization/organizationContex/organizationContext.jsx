import React, { createContext, useState } from 'react';

export const OrganizationContext = createContext();

const OrganizationContextProvider = (props) => {

  return (
    <OrganizationContext.Provider
      value={{
      }}
    >
      {props.children}
    </OrganizationContext.Provider>
  );
};

export default OrganizationContextProvider;

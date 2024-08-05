import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[430px] mx-auto  box-border">
      {children}
    </div>
  );
};

export default Layout;

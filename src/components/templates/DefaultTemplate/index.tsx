import React, { ReactNode } from "react";

const DefaultTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="m-auto max-w-7xl py-[186px]">{children}</div>
    </div>
  );
};

export default DefaultTemplate;

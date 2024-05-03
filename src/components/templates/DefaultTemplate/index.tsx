import React, { ReactNode } from "react";

const DefaultTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="m-auto flex max-w-7xl flex-col gap-20 px-8 py-8 md:gap-40 lg:gap-[200px] lg:py-[186px]">
        {children}
      </div>
    </div>
  );
};

export default DefaultTemplate;

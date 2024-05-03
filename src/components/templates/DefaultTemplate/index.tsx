import React, { ReactNode } from "react";

const DefaultTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="m-auto flex max-w-7xl flex-col gap-10 px-8 py-8 md:gap-28 lg:gap-[280px] lg:py-[186px]">
        {children}
      </div>
    </div>
  );
};

export default DefaultTemplate;

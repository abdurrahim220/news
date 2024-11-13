import React from "react";

const WarperContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-0">{children}</div>
  );
};

export default WarperContainer;

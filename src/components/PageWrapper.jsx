import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="animate-[pageFade_0.4s_ease-in-out]">
      {children}
    </div>
  );
};

export default PageWrapper;

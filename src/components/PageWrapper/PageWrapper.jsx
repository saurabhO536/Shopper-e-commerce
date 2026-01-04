import React from "react";
import "../PageWrapper/PageWrapper.css";

const PageWrapper = ({ children }) => {
  return <div className="page-animation">{children}</div>;
};

export default PageWrapper;

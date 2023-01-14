import React from "react";
import "../Style/ErrorMsg.css"

const ErrorMsg = ({errorMsg}) => {
  return (
    <div className="errorBack">
      <h4>{errorMsg}</h4>
    </div>
  );
};

export default ErrorMsg;

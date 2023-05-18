import React from "react";

const Button = ({children,handleClick}) => {
  return <button onClick={handleClick} className="btn btn-secondary btn-outline btn-sm md:btn-md">{children}</button>;
};

export default Button;

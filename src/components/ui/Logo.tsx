import React from "react";

const Logo: React.FC = () => {
  return (
    <a
      href="#inicio"
      className="flex items-center"
      aria-label="Logo Vistori Piracicaba"
    >
      <img
        src="/image/logo.jpeg"
        alt="Logo Vistori Piracicaba"
        className="w-28 h-20 mr-2"
      />
    </a>
  );
};

export default Logo;

import React from "react";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  href,
  label = "Read more",
}) => {
  if (href) {
    return (
      <a
        href={href}
        className="border-b-1 hover:border-b-3 border-white uppercase text-white transition-all duration-300"
      >
        {label}
      </a>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="border-b-1 hover:border-b-3 border-white uppercase text-white transition-all duration-300"
      >
        {label}
      </button>
    );
  }
};

export default Button;

import React from "react";
import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  href,
  className,
  label = "Read more",
}) => {
  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Clicked Anchor element:", e.currentTarget);
    console.log("Anchor href:", href);
  };

  if (href) {
    return (
      <Link
        href={href}
        className={
          `border-b-1 hover:border-b-3 border-primary uppercase text-white transition-all duration-300 ` +
          className
        }
        onClick={onAnchorClick}
      >
        <span>{label}</span>
      </Link>
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

import React from "react";
import Image from "next/image";

interface ButtonProps {
  title: string;
  icon: string; // The icon can now be an SVG or any other React component
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disable: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  type,
  disable,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disable}
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-4 bg-blue-500 text-white rounded-3xl w-fit hover:cursor-pointer transform transition-transform duration-200 hover:scale-110"
    >
      <span className="!text-white font-bold">{title}</span>
      <Image src={icon} alt="File SVG" width={20} height={20} />
    </button>
  );
};

export default Button;

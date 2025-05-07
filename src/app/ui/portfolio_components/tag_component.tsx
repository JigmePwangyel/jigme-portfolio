import React from "react";

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <span
      className="bg-blue-100 !text-white px-5 py-1 rounded-full text-xs sm:text-sm md:text-sm lg:text-sm font-medium"
      id="tag"
    >
      {text}
    </span>
  );
};

export default Tag;

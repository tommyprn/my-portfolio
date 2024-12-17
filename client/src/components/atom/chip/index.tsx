import React from "react";

interface ChipProps {
  content: string;
}

function Chip({ content }: ChipProps) {
  return (
    <p className="text-xs text-gold rounded-full bg-gray25 px-2 py-1 font-bold">
      {content}
    </p>
  );
}

export default Chip;

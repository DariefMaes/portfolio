import React from "react";

function ImageCard({
  link,
  height = "h-80",
}: {
  link: string;
  height?: string;
}) {
  return (
    <div className="bg-gray-100 p-8 rounded-3xl w-full">
      <img
        className={`w-full ${height} object-cover object-top rounded-2xl`}
        src={link}
      />
    </div>
  );
}

export default ImageCard;

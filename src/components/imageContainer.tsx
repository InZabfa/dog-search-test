import React from "react";
import ImageDisplay from "./imageDisplay";

interface ImageContainerProps {
  imageUrl: string | null;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl }) => {
  return imageUrl ? <ImageDisplay imageUrl={imageUrl} /> : null;
};

export default ImageContainer;

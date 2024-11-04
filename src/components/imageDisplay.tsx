import React from "react";
import { StyledDiv, StyledImage } from "./imageDisplay.styled";

interface ImageDisplayProps {
  imageUrl: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => (
  <StyledDiv>
    <StyledImage src={imageUrl} alt="Selected Dog" />
  </StyledDiv>
);

export default ImageDisplay;

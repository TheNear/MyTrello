import React, { memo } from "react";
import { CardContainer } from "./CardStyle";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = memo(({ text }) => {
  return <CardContainer>{text}</CardContainer>;
});


export { Card };

import React from "react";
import { CardContainer } from "./CardStyle";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};

export { Card };

type Colors = "blue" | "red" | "green" | "yellow" | "pink";

type RemoveLegacy<T> = T extends "red" ? never : T;
type ModernColors = RemoveLegacy<Colors>;

interface ButtonProps {
  color: ModernColors;
  label: string;
}

export const ModernButton = ({ color, label }: ButtonProps) => {
  return <button style={{ backgroundColor: color }}>{label}</button>;
};

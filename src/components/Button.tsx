import "../css/Button.css";

interface ButtonProps {
  value: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return <button className="button" onClick={onClick}>{value}</button>;
};
export default Button;

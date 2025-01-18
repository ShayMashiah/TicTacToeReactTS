import "../css/RestartButton.css"

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button className="restart-button" onClick={onClick}>Rematch</button>;
};
export default Button;

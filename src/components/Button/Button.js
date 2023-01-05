import "./Button.css";
const Button = (props) => {
  return <button className="button-container">{props.title}</button>;
};

export default Button;

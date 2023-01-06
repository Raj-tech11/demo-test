import "./LeftSection.css";

const LeftSection = (props) => {
  console.log("LeftSection", props);
  return (
    <div className="left-section">
      <p>{props.label}</p>
      <strong>{props.des}</strong>
      <ul>
        <li>left 1</li>
        <li>left 2</li>
        <li>left 2</li>
        <li>left 2</li>
        <li>left 2</li>
      </ul>
    </div>
  );
};

export default LeftSection;

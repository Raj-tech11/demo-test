const Child = (props) => {
  console.log("Hi ", props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Child;

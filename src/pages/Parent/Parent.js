import Child from "./child";
const Parent = () => {
  return (
    <div>
      Parent Component page
      <Child title="Hi Child" description="this is the Description " />
    </div>
  );
};

export default Parent;

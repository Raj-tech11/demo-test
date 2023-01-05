import Child from "../Parent/child";
import Button from "../../components/Button/Button";
const Home = () => {
  return (
    <div>
      Home page
      <Button title="Save" />
      <Child title="You are rendering by Home" description="By Home page " />
    </div>
  );
};

export default Home;

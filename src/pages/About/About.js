import LeftSection from "../../components/LeftSection/LeftSection";
const About = () => {
  return (
    <>
      <p>About page</p>
      <div className="home-container">
        <LeftSection label="From about" />
        <div className="center-section">
          <table>
            <thead>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
            </thead>
            <tbody>
              <tr>Test1</tr>
              <tr>Test2</tr>
              <tr>Test3</tr>
              <tr>Test4</tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default About;

import Image from "./images/logo.png";
import Logo from "./images/logo.svg";
import "./styles.scss";

const App = () => {
  return (
    <>
      <h1>
        React TypeScript Webpack Stater Template - {process.env.NODE_ENV}{" "}
        {process.env.name}{" "}
      </h1>
      <img src={Image} alt="React Logo" width="300" />
      <img src={Logo} alt="React Logo" width="300" />
    </>
  );
};

export default App;

import "../src/Styles/styles.scss"; // Import the Sass file
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};

export default AppLayout;

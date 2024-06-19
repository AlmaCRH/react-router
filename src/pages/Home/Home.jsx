import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <Link to="/about">
        <button>Go to about</button>
      </Link>
    </div>
  );
};

export default Home;

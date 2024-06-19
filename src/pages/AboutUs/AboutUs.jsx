import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <h1>This is About Us</h1>
      <Link to="/"> 
        <p>Go to home</p>
      </Link>
    </div>
  );
};

export default AboutUs;

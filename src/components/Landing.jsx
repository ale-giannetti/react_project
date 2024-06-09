import "./Landing.css";
import Button from "./library/Button";
import { useNavigate } from "react-router-dom";


var title = 'Get Started';


const Landing = () => {

  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate("/card-pages");
  };

  return (
    <div className="splash">
      <h1>Welcome to Lithia Motors</h1>
      <div>
      <Button onClick={handleButtonClick}>{title}</Button> 
      </div>
    </div>

  );
};

export default Landing;

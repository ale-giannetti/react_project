import "./Landing.css";
import Button from "./library/Button";
import { useHistory } from "react-router-dom";


var title = 'Get Started';

const handleButtonClick = () => {
  // Naviga a "/card-pages" quando il bottone viene cliccato
  history.push("/card-pages");
};


const Landing = () => {
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

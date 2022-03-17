import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="background">
      <div className="flex">
        <h1 className="h1">Welcome</h1>
        <h1 className="h1">PI VIDEOGAMES</h1>
        <Link to="/videogames">
          <button className="btn-neon active">PRESS START</button>
        </Link>
      </div>
    </div>
  );
}

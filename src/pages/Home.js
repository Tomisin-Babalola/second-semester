import Counter from "../components/Counter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../App.css";

function Home() {
  return (
    <>
      <Helmet title="Second-Semester | Home" />
      <div className="link-style">
        <Link to="/errorpage" className="link">
          {" "}
          Error page{" "}
        </Link>
        <Link to="/notfound" className="link">
          {" "}
          Not found{" "}
        </Link>
      </div>
      <Counter />
    </>
  );
}

export default Home;

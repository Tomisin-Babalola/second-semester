import Counter from "../components/Counter";
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
    <Helmet title="Second-Semester | Home" />

      <Link to="/errorpage"> Error page </Link>
      <Link to="/notfound"> Not found </Link>
      <Counter />
    </>
  );
}

export default Home;

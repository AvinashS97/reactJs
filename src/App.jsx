// import NetflixSeries, {Footer, Header} from "./components/NetflixSeries";
import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css"
import "./components/Netflix.module.css"; 

// import {Fragment } from "react";
// return <Fragment>//</Fragment>
// import { Header } from "./components/NetflixSeries";
// import { Footer } from "./components/NetflixSeries";

export const App = () => {

  return (
    <section className="container" >
      <h1 className="card-heading">List of Best Netflix Series</h1>
    {/* < Header/> */}
    <NetflixSeries />
    {/* <Footer /> */}
   </section >
)
};




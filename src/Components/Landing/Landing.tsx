import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="Landing">
      <div className="Landing__Right">
        <h2>Welcome!</h2>
        <p>
          This component generates a character sheet and portrait of a fantasy
          character, based on your inputs. It is powered by ChatGPT for doing
          both! Right now it is still quite unpolished, but I'm hoping to flesh
          out the functionalities over time!
        </p>
        <Link to="/CharacterMaker"><button>Go to generator</button></Link>
      </div>
    </section>
  );
};

export default Landing;

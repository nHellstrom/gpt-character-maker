import React, { useContext } from "react";
import "./CustomConnectionSettings.css";
import { ApiContext } from "../context";

const CustomConnectionSettings = () => {

  const connectionString = useContext(ApiContext);

  const handleClick = () => {
    
    console.log(connectionString);
  }

  return (
    <section className="ConnectionSettings">
      <label>
        <span className="ConnectionSettings__Label">
        Custom API Key
        <br />
        (obtained from OpenAI):
        </span>
        <input type="text" defaultValue={"--Not Implemented--"} />
        <button onClick={handleClick}>Set</button>
      </label>
    </section>
  );
};

export default CustomConnectionSettings;

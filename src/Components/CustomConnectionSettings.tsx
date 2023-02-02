import React, { useContext } from "react";
import "./CustomConnectionSettings.css";
import { ApiContext } from "../context";

const CustomConnectionSettings = () => {

  const connectionString = useContext(ApiContext);

  return (
    <section className="ConnectionSettings">
      <label>
        <span className="ConnectionSettings__Label">
        Custom API Key
        <br />
        (obtained from OpenAI):
        </span>
        <input type="text" defaultValue={"--Not Implemented--"} />
        <button onClick={() => console.log(connectionString)}>Set</button>
      </label>
    </section>
  );
};

export default CustomConnectionSettings;

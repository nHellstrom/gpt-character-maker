import { useState } from "react";
import "./CharacterMaker.css";

interface ICharacterData {
  race: string;
  role: string;
  alignmentX: string;
  alignmentY: string;
}

const CharacterMaker = () => {
  const [race, setRace] = useState<string>("human");
  const [role, setRole] = useState<string>("ranger");
  const [alignmentX, setAlignmentX] = useState<string>("lawful");
  const [alignmentY, setAlignmentY] = useState<string>("good");
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [responseImg, setResponseImg] = useState<string | undefined>(undefined);
  const [traits, setTraits] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);


  const fetchBiography = async (charData: ICharacterData) => {
    const uri = "https://localhost:7129/Communications";
    const request = {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(charData),
    };
    try {
      const response = await fetch(uri, request);
      const data = await response.json();
      setResponse(data.choices[0].text);
    } catch (e) {
      console.error("Error fetching biography 🔥", e)
      setError(true);
      // alert(`Error fetching biography 😢 ${e}`)
    }
  };

  const fetchPortrait = async (charData: ICharacterData) => {
    const uri = "https://localhost:7129/Communications/Image";
    const request = {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(charData),
    };
    try {
      const response = await fetch(uri, request);
      const data = await response.json();
      console.log("Image response json:", data);
      setResponseImg(data.data[0].url);
    } catch (e) {
      console.error("Error fetching image 🔥", e)
      setError(true);
      // alert(`Error fetching image 😢 ${e}`)
    }
  };

  const postToApi = () => {
    const charData: ICharacterData = {
      race: race,
      role: role,
      alignmentX: alignmentX,
      alignmentY: alignmentY,
    };
    fetchBiography(charData);
    fetchPortrait(charData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(e);
    try {
      postToApi();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="CharacterMaker">
      <form className="CharacterMaker__Form">
        <label>
          Race:
          <select
            value={race}
            onChange={(e) => setRace(e.target.value)}
            className="CharacterMaker__Selector"
          >
            <option value="human">Human</option>
            <option value="orc">Orc</option>
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
            <option value="">Custom...</option>
          </select>
          {!["human", "orc", "elf", "dwarf"].includes(race) ? (
            <input
              type="text"
              className="CharacterMaker__FormCustomInput"
              onChange={(e) => setRace(e.target.value)}
            ></input>
          ) : (
            ""
          )}
        </label>

        <label>
          Profession:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="CharacterMaker__Selector"
          >
            <option value="ranger">Ranger</option>
            <option value="warrior">Warrior</option>
            <option value="wizard">Wizard</option>
            <option value="thief">Thief</option>
            <option value="">Custom...</option>
          </select>
          {!["ranger", "warrior", "wizard", "thief"].includes(role) ? (
            <input
              type="text"
              className="CharacterMaker__FormCustomInput"
              onChange={(e) => setRole(e.target.value)}
            ></input>
          ) : (
            ""
          )}
        </label>

        <label>
          Lawfulness:
          <select
            value={alignmentX}
            onChange={(e) => setAlignmentX(e.target.value)}
            className="CharacterMaker__Selector"
          >
            <option value="lawful">Lawful</option>
            <option value="neutral">Neutral</option>
            <option value="chaotic">Chaotic</option>
            <option value="">Custom...</option>
          </select>
          {!["lawful", "neutral", "chaotic"].includes(alignmentX) ? (
            <input
              type="text"
              className="CharacterMaker__FormCustomInput"
              onChange={(e) => setAlignmentX(e.target.value)}
            ></input>
          ) : (
            ""
          )}
        </label>

        <label>
          Morality:
          <select
            value={alignmentY}
            onChange={(e) => setAlignmentY(e.target.value)}
            className="CharacterMaker__Selector"
          >
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="evil">Evil</option>
            <option value="">Custom...</option>
          </select>
          {!["good", "neutral", "evil"].includes(alignmentY) ? (
            <input
              type="text"
              className="CharacterMaker__FormCustomInput"
              onChange={(e) => setAlignmentY(e.target.value)}
            ></input>
          ) : (
            ""
          )}
        </label>

        <b>
          A {alignmentX} {alignmentY} {race} {role}
        </b>

        <button onClick={handleSubmit} className="CharacterMaker__Button">
          Submit
        </button>
      </form>
      <div className="CharacterMaker__OutputArea">
        <div className="CharacterMaker__Output-PortraitContainer">
          {
            <>
              {responseImg !== undefined ? (
                <img
                  src={responseImg}
                  alt="ChatGPT-made character image"
                  className="CharacterMaker__Output-PortraitImage"
                />
              ) : (
                "🧙‍♂️"
              )}
            </>
          }
        </div>
        {
          <p className="CharacterMaker__Output-Text">
            {!error && (response ??
              "Response will come here! It may take up to a minute, please be patient. You will be notified if the process has failed.")}
            {error && <b>An error has occured while trying to communicate with the server! Please see the console for specific information. Sorry!</b>}
          </p>
        }
      </div>
    </section>
  );
};

export default CharacterMaker;

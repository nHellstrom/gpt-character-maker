import { useState } from "react";
import "./CharacterMaker.css"

interface ICharacterData {
    "race": string,
    "role": string,
    "alignmentX": string,
    "alignmentY": string
}

const CharacterMaker = () => {
    const [race, setRace] = useState<string>("human");
    const [role, setRole] = useState<string>("ranger");
    const [alignmentX, setAlignmentX] = useState<string>("lawful");
    const [alignmentY, setAlignmentY] = useState<string>("good");
    const [response, setResponse] = useState<string | undefined>(undefined);

    const postToApi = async () => {
        const charData : ICharacterData = {race: race, role: role, alignmentX: alignmentX, alignmentY: alignmentY};
        const uri = "https://localhost:7129/Communications";
        const request = {
            method: "POST",
            headers: {
                "accept" : "text/plain",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(charData)
        }
        console.log(JSON.stringify(charData));
        const response = await fetch(uri, request);
        const data = await response.json();
        // const data = JSON.parse(response);
        console.log(data);
        setResponse(data.choices[0].text)
    }

    const handleSubmit = (e : any) => {
        e.preventDefault();
        // console.log(e);
        try {
            postToApi()
        }
        catch (e) {
            console.error(e);
        }
    }

    return <section className="CharacterMaker">
        <h2>RPG Character Generator</h2>
        <form className="CharacterMaker__Form">
            <label>Race:&emsp;
            <select value={race} onChange={e => setRace(e.target.value)}>
                <option value="human">Human</option>
                <option value="orc">Orc</option>
                <option value="elf">Elf</option>
                <option value="dwarf">Dwarf</option>
            </select>
            </label>

            <label>Profession:&emsp;
            <select value={role} onChange={e => setRole(e.target.value)}>
                <option value="ranger">Ranger</option>
                <option value="warrior">Warrior</option>
                <option value="wizard">Wizard</option>
                <option value="thief">Thief</option>
            </select>
            </label>

            <label>Lawfulness:&emsp;
            <select value={alignmentX} onChange={e => setAlignmentX(e.target.value)}>
                <option value="lawful">Lawful</option>
                <option value="neutral">Neutral</option>
                <option value="chaotic">Chaotic</option>
            </select>
            </label>

            <label>Morality:&emsp;
            <select value={alignmentY} onChange={e => setAlignmentY(e.target.value)}>
                <option value="good">Good</option>
                <option value="neutral">Neutral</option>
                <option value="evil">Evil</option>
            </select>
            </label>
            
            <b>A {alignmentX} {alignmentY} {race} {role}</b>

            <button onClick={handleSubmit}>Submit</button>

        </form>
            {<p>{response ?? "Response will come here!"}</p>}
    </section>
}

export default CharacterMaker;
import { useState } from "react";
import "./CharacterMaker.css"

const CharacterMaker = () => {
    const [race, setRace] = useState<string>("human");
    const [charClass, setCharClass] = useState<string>("ranger");
    const [alignmentX, setAlignmentX] = useState<string>("lawful");
    const [alignmentY, setAlignmentY] = useState<string>("good");

    const handleSubmit = () => {
        // prevent default and submit to the api
    }

    return <section className="CharacterMaker">
        <h2>RPG Character Generator</h2>
        <form className="CharacterMaker__Form">
            

            <select value={race} onChange={e => setRace(e.target.value)}>
                <option value="human">Human</option>
                <option value="orc">Orc</option>
                <option value="elf">Elf</option>
                <option value="dwarf">Dwarf</option>
            </select>

            <select value={charClass} onChange={e => setCharClass(e.target.value)}>
                <option value="ranger">Ranger</option>
                <option value="warrior">Warrior</option>
                <option value="wizard">Wizard</option>
                <option value="thief">Thief</option>
            </select>

            <select value={alignmentX} onChange={e => setAlignmentX(e.target.value)}>
                <option value="lawful">Lawful</option>
                <option value="neutral">Neutral</option>
                <option value="chaotic">Chaotic</option>
            </select>

            <select value={alignmentY} onChange={e => setAlignmentY(e.target.value)}>
                <option value="good">Good</option>
                <option value="neutral">Neutral</option>
                <option value="evil">Evil</option>
            </select>

            <b>A {alignmentX} {alignmentY} {race} {charClass}</b>

            <button onClick={handleSubmit}>Submit</button>

        </form>
        
    </section>
}

export default CharacterMaker;
import { useState } from "react";
import "./CharacterMaker.css"

const CharacterMaker = () => {
    const [race, setRace] = useState<string | undefined>(undefined);

    return <section className="CharacterMaker">
        <p>Hello!</p>
        <form className="CharacterMaker__Form">
            <h3>Race: {race}</h3>
            <select value={race ?? "human"} onChange={e => setRace(e.target.value)}>
                <option value="human">Human</option>
                <option value="orc">Orc</option>
                <option value="elf">Elf</option>
                <option value="dwarf">Dwarf</option>
            </select>
        </form>
        
    </section>
}

export default CharacterMaker;
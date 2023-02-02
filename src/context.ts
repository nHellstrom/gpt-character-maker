import { createContext } from "react";
import { IConnectionString, ICharacter } from "./GlobalInterfaces";

export const ApiContext = createContext<IConnectionString>({useCustom: false, connectionString: undefined});
export const HistoryContext = createContext<ICharacter[]>([])


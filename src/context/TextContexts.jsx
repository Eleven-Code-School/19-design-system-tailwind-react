import { createContext, useEffect, useState } from "react";
import { dbTexts } from "../../db";

export const TextsContext = createContext(null);

export const TextsProvider = ({ children }) => {
    const [texts, setTexts] = useState("");

    useEffect(() => {
        setTexts(dbTexts);
    }, []);

    return <TextsContext.Provider value={{ texts, setTexts }}>{children}</TextsContext.Provider>;
};

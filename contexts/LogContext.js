import React from "react";
import { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

const LogContext = createContext();

export function LogContextProvider({ children }) {
    const [logs, setLogs] = useState(
        Array.from({ length: 10 })
            .map((_, index) => ({
                id: uuid4(),
                title: `Log ${index}`,
                body: `Log ${index}`,
                date: new Date().toISOString(),
            }))
            .reverse()
    );

    const onCreate = ({ title, body, date }) => {
        const log = {
            id: uuid4(),
            title,
            body,
            date,
        };
        setLogs([log, ...logs]);
    };

    return (
        <LogContext.Provider value={{ logs, onCreate }}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;
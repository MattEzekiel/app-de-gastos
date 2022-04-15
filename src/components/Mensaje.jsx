import React from "react";

export default function Mensaje({ children, tipo }) {

    return (
        <p className={`alerta ${tipo}`}>{children}</p>
    )
}
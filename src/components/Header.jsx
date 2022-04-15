import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

export default function Header({
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    gastos,
    setGasto
}) {

    return (
        <header>
            <h1>Control de Gastos</h1>
            { isValidPresupuesto? (
                <ControlPresupuesto
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setGasto={setGasto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
    )
}
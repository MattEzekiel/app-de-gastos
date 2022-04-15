import React, {useEffect, useState} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function ControlPresupuesto({
    presupuesto,
    gastos,
    setGasto,
    setPresupuesto,
   setIsValidPresupuesto
}) {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce(( total, gasto ) => gasto.cantidad + total, 0 );
        const totalDispongible = presupuesto - totalGastado;
        const nuevoPorcentaje= (((presupuesto - totalDispongible)/presupuesto) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDispongible);

        setTimeout(() => {
            setPorcentaje(Number(nuevoPorcentaje));
        },1000)
    },[gastos])

    const formatearCantidad = presupuesto => {
        return presupuesto.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
        })
    }

    const handleResetApp = () => {
      const resultado = confirm('¿Deseas reiniciar prepuesto y gastos?');

      if (resultado) {
          setGasto([]);
          setPresupuesto(0);
          setIsValidPresupuesto(false);
      }
    }

    return (
        <div className={"contenedor-presupuesto contenedor sombra dos-columnas"}>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className={"contenido-presupuesto"}>
                <button
                    className={"reset-app"}
                    type={"button"}
                    onClick={handleResetApp}
                >Reiniciar gastos</button>
                <p><span>Presupuesto:</span> {formatearCantidad(presupuesto)}</p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible:</span> {formatearCantidad(disponible)}
                </p>
                <p><span>Gastado:</span> {formatearCantidad(gastado)}</p>
            </div>
        </div>
    )
}
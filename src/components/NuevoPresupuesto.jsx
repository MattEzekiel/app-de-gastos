import React, {useState} from 'react';
import Mensaje from "./Mensaje";

export default function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {

    const [mensaje,setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setIsValidPresupuesto(false)
            return setMensaje('No es un presupuesto válido');
        } else {
            setMensaje('');
            setIsValidPresupuesto(true);
        }
    }

    return (
        <div className={"contenedor-presupuesto contenedor sombra"}>
            <form
                className={"formulario"}
                onSubmit={handlePresupuesto}>
                <div className={"campo"}>
                    <label
                        htmlFor="presupuesto"
                    >Definir Presupuesto</label>
                    <input
                        type="number"
                        className={"nuevo-presupuesto"}
                        placeholder={"Añade tu presupuesto"}
                        name={"presupuesto"}
                        id={"presupuesto"}
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                    <button
                        type={"submit"}
                    >Añadir</button>
                    { mensaje && (
                        <Mensaje tipo={"error"}>{mensaje}</Mensaje>
                    )}
                </div>
            </form>
        </div>
    )
}
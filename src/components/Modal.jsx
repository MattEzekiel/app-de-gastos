import CerrarBtn from '../img/cerrar.svg';
import {useEffect, useState} from "react";
import Mensaje from "./Mensaje";

export default function Modal({
                                  setModal,
                                  animarModal,
                                  setAnimarModal,
                                  guardarGasto,
                                  gastoEditar,
                                  setGastoEditar
}) {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }
    },[])

    const cerrarModal = () => {
        setAnimarModal(false);
        setGastoEditar({});

        setTimeout(() => {
            setModal(false);
        },500);
    }

    const handleSumbit = e => {
      e.preventDefault();

      if ([nombre,cantidad, categoria].includes('')) {
          return setMensaje('Todos los campos son obligatorios');
      } else {
          guardarGasto({ nombre, cantidad, categoria, id, fecha });
      }
    }

    return (
        <div className={"modal"}>
            <div className={"cerrar-modal"}>
                <img
                    src={CerrarBtn}
                    alt="Cerrar modal"
                    onClick={cerrarModal}
                />
            </div>
            <form
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleSumbit}
            >
                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                { mensaje && (
                    <Mensaje tipo={"error"}>{mensaje}</Mensaje>
                )}
                <div className={"campo"}>
                    <label htmlFor="nombre">Nombre del gasto</label>
                    <input
                        type="text"
                        name={"nombre"}
                        id={"nombre"}
                        placeholder={"Agregue el nombre del gasto"}
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className={"campo"}>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        name={"cantidad"}
                        id={"cantidad"}
                        placeholder={"Agregue la cantidad del gasto"}
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className={"campo"}>
                    <label htmlFor="categoria">Cantidad</label>
                    <select
                        name="categoria"
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="" disabled>-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <button type={"submit"}>{gastoEditar.nombre ? 'Guardar cambios' : 'Añadir gasto'}</button>
            </form>
        </div>
    )
}
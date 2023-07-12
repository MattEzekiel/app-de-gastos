import Gasto from "./Gasto";

export default function ListadoGastos({
    gastos,
    setGastoEditar,
    eliminarGasto,
    gastosFiltrados,
    filtro
}) {
    return (
        <div className={"listado-gastos contenedor"}>

            {
                filtro ? (
                        <>
                            <h2>{gastosFiltrados.length > 0 ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>
                            {gastosFiltrados.map(gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))}
                        </>
                ) :
                (
                    <>
                        <h2>{gastos.length > 0 ? 'Gastos' : 'No hay gastos cargados'}</h2>
                        {gastos.map( gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}
export default function Filtros({ filtro, setFiltro }) {
    
    return (
        <div className={"filtros sombra contenedor"}>
            <form>
                <div className={"campo"}>
                    <label htmlFor="filtrar">Filtrar Gastos</label>
                    <select
                        name="filtrar"
                        id="filtrar"
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="" disabled>-- Seleccione --</option>
                        <option value="">Mostrar todas las categorías</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
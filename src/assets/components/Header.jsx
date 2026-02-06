function Header({ vista, setVista }) {
    return (
        <div className="header">
            <h1>API Tester Alumnos</h1>
{/* Estos botones permiten navegar entre las diferentes vistas de la aplicación. Contienen un ternario que activa o desactiva "active" que activa un estilo CSS específico para resaltar la vista actual. */}
            <div className="nav">
                <button className={vista === "crear" ? "active" : ""} onClick={() => setVista("crear")} type="button">Crear</button>
                <button className={vista === "buscar" ? "active" : ""} onClick={() => setVista("buscar")} type="button" >Buscar</button>
                <button className={vista === "buscarNotas" ? "active" : ""} onClick={() => setVista("buscarNotas")} type="button" >Buscar con Notas</button>
                <button className={vista === "eliminar" ? "active" : ""} onClick={() => setVista("eliminar")} type="button" >Eliminar</button>
            </div>
        </div>
    );
}

export default Header;

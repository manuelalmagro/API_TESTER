import { useState } from "react";

function EliminarAlumnoPorID() {
    const URL = "https://servidorclasedaw.onrender.com/alumno12/alumnos";

    const [id, setId] = useState(1);
    const [borrado, setBorrado] = useState(false);

    function eliminarAlumno() {
        fetch(`${URL}/${id}`, { method: "DELETE" }).then(() =>
            setBorrado(true)
        );
    }

    return (
        <div>
            <h2>Eliminar Alumno</h2>

            <div className="field">
                <label>ID</label>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>

            <button className="btn" onClick={eliminarAlumno}>Eliminar</button>

            {borrado && (
                <div className="result">
                    <p>Alumno eliminado correctamente</p>
                </div>
            )}
        </div>
    );
}

export default EliminarAlumnoPorID;

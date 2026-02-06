import { useState } from "react";

function BuscarAlumnoPorID() {
    const URL = "https://servidorclasedaw.onrender.com/alumno12/alumnos";

    const [id, setId] = useState(1);
    const [alumno, setAlumno] = useState(null);

    function buscarAlumno() {
        fetch(`${URL}/${id}`)
            .then((res) => res.json())
            .then((data) => setAlumno(data));
    }

    return (
        <div>
            <h2>Buscar Alumno</h2>

            <div className="field">
                <label>ID</label>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>

            <button className="btn" onClick={buscarAlumno}>Buscar</button>

            {alumno && (
                <div className="result">
                    <p>Nombre: {alumno.nombre} {alumno.apellido1} {alumno.apellido2}</p>
                    <p>Edad: {alumno.edad}</p>
                    <p>Sexo: {alumno.sexo}</p>
                    <p>Curso: {alumno.curso}</p>
                    <img src={alumno.foto}></img>
                </div>
            )}
        </div>
    );
}

export default BuscarAlumnoPorID;
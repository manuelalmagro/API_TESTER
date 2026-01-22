import { useState } from "react";

function BuscarAlumnoPorID() {
    const BASE_URL = "https://servidorclasedaw.onrender.com/alumno12/alumnos";

    const [id, setId] = useState(1);
    const [alumno, setAlumno] = useState(null);

    async function buscarAlumno() {
        setAlumno(null);
            let respuesta = await fetch(`${BASE_URL}/${id}`);
            const data = await respuesta.json();
            setAlumno(data);
    }

    return (
        <div className="buscarAlumnos">
            <h2>Buscar alumno por ID</h2>

            <label>ID del Alumno:</label>

            <input type="number" min="1" max="20" value={id} onChange={(e) => setId(Number(e.target.value))}/>

            <button type="button" onClick={buscarAlumno}>Buscar Alumno</button>

            {alumno && (
                <div className="alumnoCargado">
                    <h3>Alumno encontrado</h3>
                    <p>Nombre: {alumno.nombre}</p>
                    <p>Apellido 1: {alumno.apellido1}</p>
                    <p>Apellido 2: {alumno.apellido2}</p>
                    <p>Edad: {alumno.edad}</p>
                    <p>Sexo: {alumno.sexo}</p>
                    <p>Curso: {alumno.curso}</p>
                </div>
            )}
        </div>
    );
}

export default BuscarAlumnoPorID;
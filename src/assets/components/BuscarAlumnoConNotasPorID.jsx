import { useState } from "react";

function BuscarAlumnoConNotasPorID() {
    const BASE_URL = "https://servidorclasedaw.onrender.com/alumno12/alumnos";

    const [id, setId] = useState(1);
    const [alumno, setAlumno] = useState(null);
    const [notas, setNotas] = useState([]);

    function buscarAlumno() {
        fetch(`${BASE_URL}/${id}`)
            .then((res) => res.json())
            .then((data) => setAlumno(data));

        fetch(`${BASE_URL}/${id}/notas`)
            .then((res) => res.json())
            .then((data) => setNotas(data));
    }

    return (
        <div>
            <h2>Buscar Alumno con Notas</h2>

            <div className="field">
                <label>ID</label>
                <input type="number" min="1" value={id} onChange={(e) => setId(Number(e.target.value))}/>
            </div>

            <button className="btn" type="button" onClick={buscarAlumno}>Buscar</button>

            {alumno && (
                <div className="result" style={{ textAlign: "left" }}>
                    <p><b>{alumno.nombre} {alumno.apellido1} {alumno.apellido2}</b></p>
                    <p>Edad: {alumno.edad} | Sexo: {alumno.sexo} | Curso: {alumno.curso}</p>

                    {notas.length > 0 && (
                        <>
                            <h3>Notas</h3>
                            <ul>
                                {notas.map((n) => (
                                    <li key={n.codigo}>
                                        <b>{n.codigo}</b> - {n.nombre}: {n.nota}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {alumno.foto && (
                        <img src={alumno.foto} alt="foto" style={{ marginTop: "10px" }}/>
                    )}
                </div>
            )}
        </div>
    );
}

export default BuscarAlumnoConNotasPorID;

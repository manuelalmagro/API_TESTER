import { useState } from "react";

function CrearAlumno() {
    const URL = "https://servidorclasedaw.onrender.com/alumno12/alumnos";

    const [alumno, setAlumno] = useState({
        nombre: "",
        apellido1: "",
        apellido2: "",
        edad: "",
        sexo: "",
        curso: "",
    });

    const [mensajeExito, setMensajeExito] = useState("");
    const [mensajeError, setMensajeError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setMensajeExito("");
        setMensajeError("");

        let errores = [];

        if (alumno.nombre.trim() === "") errores.push("Nombre");
        if (alumno.apellido1.trim() === "") errores.push("Apellido 1");
        if (alumno.apellido2.trim() === "") errores.push("Apellido 2");
        if (alumno.edad.trim() === "" || isNaN(alumno.edad)) errores.push("Edad");
        if ((String(alumno.sexo).trim().toUpperCase() === "") || (String(alumno.sexo).trim().toUpperCase() !== "M" && String(alumno.sexo).trim().toUpperCase() !== "F")) errores.push("Sexo");
        if (alumno.curso.trim() === "" || isNaN(alumno.curso) || alumno.curso > 2 || alumno.curso < 1) errores.push("Curso");

        if (errores.length > 0) {
            setMensajeError("Datos incorrectos: " + errores.join(", "));
            return;
        }

        const nuevoAlumno = {
            ...alumno,
            edad: Number(alumno.edad),
            curso: Number(alumno.curso),
            sexo: alumno.sexo.trim().toUpperCase(),
            foto: "https://thispersondoesnotexist.com/?" + Math.random()
        };

        fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoAlumno),
        })
            .then((res) => res.json())
            .then(() => {
                setMensajeExito("Alumno creado correctamente");

                setAlumno({
                    nombre: "",
                    apellido1: "",
                    apellido2: "",
                    edad: "",
                    sexo: "",
                    curso: "",
                });
            });
    }

    return (
        <div>
            <h2>Crear Alumno</h2>
{/* El ...alumno es un operador de propagación que permite copiar todas las propiedades del objeto alumno al nuevo objeto, manteniendo los valores actuales de las demás propiedades mientras se actualiza una específica. */}
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Nombre</label>
                    <input type="text" value={alumno.nombre} onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })}/>
                </div>

                <div className="field">
                    <label>Apellido 1</label>
                    <input type="text" value={alumno.apellido1} onChange={(e) => setAlumno({ ...alumno, apellido1: e.target.value })}/>
                </div>

                <div className="field">
                    <label>Apellido 2</label>
                    <input type="text" value={alumno.apellido2} onChange={(e) => setAlumno({ ...alumno, apellido2: e.target.value })}/>
                </div>

                <div className="field">
                    <label>Edad</label>
                    <input type="text" value={alumno.edad} onChange={(e) => setAlumno({ ...alumno, edad: e.target.value })}/>
                </div>

                <div className="field">
                    <label>Sexo (M/F)</label>
                    <input type="text" value={alumno.sexo} onChange={(e) => setAlumno({ ...alumno, sexo: e.target.value })}/>
                </div>

                <div className="field">
                    <label>Curso (1/2)</label>
                    <input type="text" value={alumno.curso} onChange={(e) => setAlumno({ ...alumno, curso: e.target.value })}/>
                </div>

                <button className="btn">Crear Alumno</button>
            </form>

            {mensajeExito && (
                <p style={{ color: "green", marginTop: "10px" }}>
                    {mensajeExito}
                </p>
            )}

            {mensajeError && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    {mensajeError}
                </p>
            )}
        </div>
    );
}

export default CrearAlumno;

import './Formulario.css';


function Formulario({setCitas, citas}) {

    const crearCita = (e) => {
        e.preventDefault();
        const confirmBoton = window.confirm('¿Deseas agregar la cita?')
        if(confirmBoton)
        {
            setCitas([
                ...citas,
                {
                    id: Date.now(),
                    nombre: e.target.nombre.value,
                    nombreDueño: e.target.nombreDueño.value,
                    fecha: e.target.fecha.value,
                    hora: e.target.hora.value,
                    sintomas: e.target.sintomas.value
                }
            ])
            e.target.reset();
        }
        
    }

    return (
        <form name="form" onSubmit={crearCita}>
            <label>Nombre mascota</label>
            <input type="text" name="nombre" placeholder="Nombre mascota" required></input>
            <label>Nombre dueño</label>
            <input type="text" name="nombreDueño" resource='' placeholder="Nombre dueño de la mascota" required></input>
            <label>Fecha</label>
            <input type="date" name="fecha" required></input>
            <label>Hora</label>
            <input type="time" name="hora" required></input>
            <label>Sintomas</label>
            <textarea name="sintomas" required></textarea>
            <button type="submit">AGREGAR CITA</button>
        </form>
        
    )

}


export default Formulario;
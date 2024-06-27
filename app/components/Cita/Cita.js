import './Cita.css';

function Citas({ id, mascota, dueño, fecha, hora, sintomas, citas, setCitas }) {
    const eliminarCita = (e) => {
        const confirmBoton= window.confirm('Estas seguro que deseas elimianr la cita')
        if(confirmBoton){
        setCitas(citas.filter(c=> c.id !== id));
        }
    };
    return (
        <div className='tarjeta'>
            <ul>
                <li><b>Nombre:</b> {mascota}</li>
                <li><b>Dueño:</b> {dueño}</li>
                <li><b>Fecha:</b> {fecha}</li>
                <li><b>Hora:</b> {hora}</li>
                <li><b>Síntomas:</b> {sintomas}</li>
            </ul>
            <button onClick={eliminarCita} type="button">ELIMINAR x</button>
        </div>
    );
}


export default Citas;
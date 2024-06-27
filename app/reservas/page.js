"use client";
import React, { useState } from 'react';
import styles from './page.module.css'

export default function reservas() {

    const [citas, setCitas] = useState([]);

    const agregarCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita]);
    }

    const eliminarCita = (e) => {
        const confirmacionBtn = window.confirm("¿Estás seguro que queres eliminar la consulta?");
        if (confirmacionBtn) {
             const nuevasCitas = citas.filter((cita, index) => index !== e);
            setCitas(nuevasCitas);
        }
       
    }

    const [nuevaCita, setNuevaCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const citaNueva = (e) => {
        setNuevaCita({
            ...nuevaCita,
            [e.target.name]: e.target.value
        });
    }

    const citaFin = (e) => {
        e.preventDefault();

        if (!nuevaCita.mascota || !nuevaCita.dueño || !nuevaCita.fecha || !nuevaCita.hora || !nuevaCita.sintomas) {
            alert('Por favor completa todos los campos.');
            return;
        }

        const confirmacion = window.confirm("¿Estás seguro de hacer esta consulta?");
        if (confirmacion) {
            agregarCita(nuevaCita);
            setNuevaCita({
                mascota: '',
                dueño: '',
                fecha: '',
                hora: '',
                sintomas: ''
            });
        }
    }

    return (
        <>
         <div className={styles.padre}>
            <form className={styles.formulario} onSubmit={citaFin}>
                
            <label>Nombre Mascota</label>
            <input className={styles.inputClass} type="text" name="mascota" value={nuevaCita.mascota} onChange={citaNueva} placeholder="nombre de la mascota"/>
    
            <label>Nombre Dueño</label>
            <input className={styles.inputClass} id="dueño" type="text" name="dueño" value={nuevaCita.dueño}  placeholder="Nombre dueño de la mascota" onChange={citaNueva}/>
    
            <label>Fecha</label>
            <input className={styles.inputClass} id="fecha" type="date" name="fecha"value={nuevaCita.fecha} onChange={citaNueva}/>
    
            <label>Hora</label>
            <input className={styles.inputClass} id="hora" name="hora" type="time" value={nuevaCita.hora}onChange={citaNueva}/>
    
            <label>Síntomas</label>
            <textarea id="sintomas"placeholder='Escriba aqui sus sintomas' name="sintomas"value={nuevaCita.sintomas} onChange={citaNueva}></textarea>
            <div className={styles.divBtn}>
                <button className={styles.btnForm} type="submit">AGREGAR CITA</button>
            </div>
                
            </form>
       




        <div className={styles.padreTurnos}>
            {citas.map((cita, index) => (
                <div key={index} className={styles.cartita}>
                    <p><span className={styles.spanP}>Mascota:</span> {cita.mascota}</p>
                    <p><span className={styles.spanP}>Dueño:</span> {cita.dueño}</p>
                    <p><span className={styles.spanP}>Fecha:</span> {cita.fecha}</p>
                    <p><span className={styles.spanP}>Hora:</span> {cita.hora}</p>
                    <p><span className={styles.spanP}>Síntomas:</span> {cita.sintomas}</p>
                    <button className={styles.btnTurno} onClick={() => eliminarCita(index)}>Eliminar × </button>
                </div>
            ))}
        </div>

        </div>
        </>
    )
}
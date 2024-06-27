import Subtitulo from "../components/Subtitulo/Subtitulo";
import styles from "./quienes-somos.module.css"

export default function SobreNosotros() {
  return (
    <>
    <Subtitulo texto={"Sobre nosotros"}></Subtitulo>
    <div className={styles.contenedor}>
    <div className={styles.dobleP}>

      <p className={styles.texto}>
        Somos Marcos y Palma, donde nos dedicamos apasionadamente al cuidado y bienestar de
        tus mascotas. Desde nuestra fundación, nos hemos comprometido a
        proporcionar atención veterinaria de la más alta calidad en un ambiente
        cálido y acogedor. 
      </p>
      <p className={styles.texto}>En nuestra veterinaria, entendemos que tus
        mascotas son parte de tu familia. Por eso, nuestro equipo de
        veterinarios altamente capacitados y nuestro personal amable están aquí
        para ofrecer cuidado personalizado y compasivo para cada animal que
        entra por nuestras puertas.</p>
    </div>
    </div>
    </>
  );
}


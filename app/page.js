import Image from "next/image";
import Titulo from "./components/Titulo/Titulo";
import Subtitulo from "./components/Subtitulo/Subtitulo";
import styles from "./page.module.css"

export default function Home() {
  return(
    <>
      <Titulo/>
      <Subtitulo texto={"Pagina principal"}></Subtitulo>
      <div className="imagen">
      <Image
        src={"/imagenVeterinario.jpg"}
        width={600}
        height={400}
        />
        </div>
    </>
  )
}

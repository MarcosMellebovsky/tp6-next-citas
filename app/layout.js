import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TP6 - EFSI",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="/reservas">Reservas</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="/quienes-somos">Sobre nosotros</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
       {children}
      </body>

    </html>
  );
}

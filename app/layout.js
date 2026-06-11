import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: 'VEKCIA Seguros | Protección para Autos, Flotillas y Transporte',
  description:
    'Especialistas en seguros para autos, flotillas, tráileres y transporte de carga. Comparamos las mejores aseguradoras para ofrecerte la cobertura ideal para proteger tu patrimonio, operación y tranquilidad.',
  keywords: [
    'seguros',
    'seguro de auto',
    'seguro para flotillas',
    'seguro para trailers',
    'seguro de transporte',
    'seguro empresarial',
    'seguro de carga',
    'qualitas',
    'gnp',
    'hdi',
    'atlas',
    'chubb',
    'vekcia seguros'
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
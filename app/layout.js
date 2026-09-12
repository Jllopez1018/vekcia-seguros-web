import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "VEKCIA Seguros | Protección para Personas y Empresas",

  description:
    "Soluciones de seguros para personas, familias y empresas. Protección para autos, flotillas, transporte de carga, patrimonio, gastos médicos y viajes.",

  keywords: [
    "VEKCIA Seguros",
    "seguros",
    "seguro de auto",
    "seguro para flotillas",
    "seguro de transporte",
    "seguro de carga",
    "seguros empresariales",
    "seguros patrimoniales",
    "gastos médicos",
    "seguro de viaje",
  ],

  icons: {
    icon: "/logos/logo-fav.png",
    shortcut: "/logos/logo-fav.png",
    apple: "/logos/logo-fav.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo + Descripción */}
        <div className="text-center mb-16">

          <img
            src="/logos/logot.png"
            alt="VEKCIA"
            className="h-30 mx-auto mb-1"
          />

          <p
            className="
              text-slate-400
              leading-8
              max-w-3xl
              mx-auto
            "
          >
             Soluciones de protección para personas, familias y empresas mediante
            seguros de autos, flotillas, transporte de carga, vehículos
            especializados, patrimonio y gastos médicos.
          </p>

        </div>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Sobre VEKCIA */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              VEKCIA Seguros
            </h3>

            <p className="text-slate-400 leading-8">
                Brindamos asesoría especializada para proteger el patrimonio,
                operaciones y bienestar de nuestros clientes mediante soluciones
                aseguradoras respaldadas por las principales compañías del mercado.
            </p>
          </div>

          {/* Servicios */}
         {/* Servicios */}

        <div>
        <h3 className="text-xl font-bold mb-6">
            Servicios
        </h3>

        <ul className="space-y-4 text-slate-400">

            <li>
            <Link
                href="#servicios"
                className="hover:text-white transition-colors"
            >
                Autos y Flotillas Vehiculares
            </Link>
            </li>

            <li>
            <Link
                href="#servicios"
                className="hover:text-white transition-colors"
            >
                Transporte de Carga y Logística
            </Link>
            </li>

            <li>
            <Link
                href="#servicios"
                className="hover:text-white transition-colors"
            >
                Vehículos Especializados
            </Link>
            </li>

            <li>
            <Link
                href="#servicios"
                className="hover:text-white transition-colors"
            >
                Seguros Patrimoniales
            </Link>
            </li>

            <li>
            <Link
                href="#servicios"
                className="hover:text-white transition-colors"
            >
                Gastos Médicos y Protección Familiar
            </Link>
            </li>

        </ul>
        </div>

          {/* Empresas del Grupo */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Empresas del Grupo
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="https://tracking.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA GPS
                </Link>
              </li>

              <li>
                <Link
                  href="https://tech.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA Technologies
                </Link>
              </li>

              <li>
                <Link
                  href="https://vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA Group
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2026 VEKCIA Seguros. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
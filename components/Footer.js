import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--vekcia-blue)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo + Descripción */}
        <div className="text-center mb-16">

          <img
            src="/logos/logo-texto.png"
            alt="VEKCIA Seguros"
            className="h-30 mx-auto mb-2"
          />

          <p
            className="
              text-white/70
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

            <p className="text-white/70 leading-8">
              Brindamos asesoría especializada para proteger el patrimonio,
              operaciones y bienestar de nuestros clientes mediante soluciones
              aseguradoras respaldadas por las principales compañías del mercado.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Servicios
            </h3>

            <ul className="space-y-4 text-white/70">

              <li>
                <Link
                  href="#autos-flotillas"
                  className="hover:text-[var(--vekcia-green)] transition-colors"
                >
                  Autos y Flotillas Vehiculares
                </Link>
              </li>

              <li>
                <Link
                  href="#transporte-carga"
                  className="hover:text-[var(--vekcia-green)] transition-colors"
                >
                  Transporte de Carga y Logística
                </Link>
              </li>

              <li>
                <Link
                  href="#vehiculos-especializados"
                  className="hover:text-[var(--vekcia-green)] transition-colors"
                >
                  Vehículos Especializados
                </Link>
              </li>

              <li>
                <Link
                  href="#seguros-patrimoniales"
                  className="hover:text-[var(--vekcia-green)] transition-colors"
                >
                  Seguros Patrimoniales
                </Link>
              </li>

              <li>
                <Link
                  href="#gastos-medicos"
                  className="hover:text-[var(--vekcia-green)] transition-colors"
                >
                  Gastos Médicos y Protección Familiar
                </Link>
              </li>

              <li>
                <Link
                  href="#seguros-viaje"
                  className="hover:text-[var(--vekcia-green)] transition-colors"
                >
                  Seguros de Viaje
                </Link>
              </li>

            </ul>
          </div>

          {/* Grupo */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              VEKCIA Group
            </h3>

            <p className="text-white/70 leading-8 mb-6">
              VEKCIA Seguros forma parte del ecosistema VEKCIA, enfocado en
              desarrollar soluciones para personas y empresas.
            </p>

            <Link
              href="https://vekcia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-[var(--vekcia-green)]
                font-semibold
                hover:text-white
                transition-colors
              "
            >
              Conocer VEKCIA Group
              <span>→</span>
            </Link>
          </div>

        </div>

        {/* Copyright + Legal */}
        <div className="border-t border-white/15 mt-12 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-white/50 text-sm text-center md:text-left">
              © 2026 VEKCIA Seguros. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6 text-sm">

              <Link
                href="/aviso-de-privacidad"
                className="text-white/50 hover:text-white transition-colors"
              >
                Aviso de Privacidad
              </Link>

              <span className="text-white/20">
                |
              </span>

              <Link
                href="https://vekcia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--vekcia-green)] transition-colors"
              >
                Sitio desarrollado por VEKCIA
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
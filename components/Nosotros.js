export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-[#F5F7FA] py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="vekcia-container">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Columna izquierda */}
          <div className="lg:col-span-5">

            <span
              className="
                inline-block
                text-xs
                font-semibold
                tracking-[0.35em]
                uppercase
                text-[var(--vekcia-green)]
                mb-6
              "
            >
              Nosotros
            </span>

            <h2
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                tracking-[-0.04em]
                leading-[0.95]
                text-[#081221]
              "
            >
              Protección para lo que
              <span className="block text-[var(--vekcia-blue)]">
                mueve tu vida.
              </span>
            </h2>

            <div
              className="
                w-20
                h-1
                bg-[var(--vekcia-green)]
                mt-8
                rounded-full
              "
            />

          </div>


          {/* Columna derecha */}
          <div className="lg:col-span-7">

            <p
              className="
                text-xl
                lg:text-2xl
                leading-9
                text-slate-600
                max-w-3xl
              "
            >
              En VEKCIA Seguros brindamos soluciones de protección para
              personas, familias y empresas. Trabajamos con las principales
              aseguradoras para ofrecer coberturas competitivas en autos,
              flotillas, transporte de carga y vehículos especializados,
              proporcionando respaldo, atención personalizada y tranquilidad
              en cada etapa del camino.
            </p>


            {/* Áreas de protección */}
            <div
              className="
                grid
                sm:grid-cols-3
                gap-8
                mt-14
                pt-10
                border-t
                border-slate-200
              "
            >

              <div>
                <span
                  className="
                    block
                    text-sm
                    font-bold
                    tracking-[0.18em]
                    uppercase
                    text-[var(--vekcia-green)]
                    mb-3
                  "
                >
                  01
                </span>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#081221]
                  "
                >
                  Personas
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Protección para ti y tu familia.
                </p>
              </div>


              <div>
                <span
                  className="
                    block
                    text-sm
                    font-bold
                    tracking-[0.18em]
                    uppercase
                    text-[var(--vekcia-green)]
                    mb-3
                  "
                >
                  02
                </span>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#081221]
                  "
                >
                  Empresas
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Soluciones para proteger tu operación.
                </p>
              </div>


              <div>
                <span
                  className="
                    block
                    text-sm
                    font-bold
                    tracking-[0.18em]
                    uppercase
                    text-[var(--vekcia-green)]
                    mb-3
                  "
                >
                  03
                </span>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#081221]
                  "
                >
                  Vehículos
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Autos, flotillas y unidades especializadas.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
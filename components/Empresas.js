export default function Empresas() {
  return (
    <section
        id="empresas"
        className="scroll-mt-20 bg-[#F5F7FA] py-24 lg:py-28"
        data-aos="fade-up"
        >
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="max-w-4xl mb-16 lg:mb-20">
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
            Empresas y flotillas
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
            Protección para
            <span className="block text-[var(--vekcia-blue)]">
              tu operación.
            </span>
          </h2>

          <div className="w-20 h-1 bg-[var(--vekcia-green)] mt-8 rounded-full" />
        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Texto principal */}
          <div className="lg:col-span-7">

            <p
              className="
                text-xl
                lg:text-2xl
                leading-9
                text-slate-600
                max-w-3xl
                mb-10
              "
            >
              Sabemos que una empresa necesita mantener sus vehículos,
              operaciones y patrimonio protegidos. En VEKCIA Seguros
              desarrollamos soluciones para empresas y flotillas de acuerdo
              con las características de cada operación.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">

              <div className="border-t border-slate-200 pt-6">
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

                <h3 className="text-xl font-bold text-[#081221]">
                  Flotillas
                </h3>

                <p className="mt-2 text-base leading-7 text-slate-500">
                  Protección para vehículos que forman parte de tu operación.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
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

                <h3 className="text-xl font-bold text-[#081221]">
                  Transporte
                </h3>

                <p className="mt-2 text-base leading-7 text-slate-500">
                  Soluciones para unidades de carga y operaciones logísticas.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
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

                <h3 className="text-xl font-bold text-[#081221]">
                  Negocios
                </h3>

                <p className="mt-2 text-base leading-7 text-slate-500">
                  Protección para instalaciones, bienes y continuidad de la operación.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
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
                  04
                </span>

                <h3 className="text-xl font-bold text-[#081221]">
                  Atención especializada
                </h3>

                <p className="mt-2 text-base leading-7 text-slate-500">
                  Acompañamiento para encontrar la protección adecuada para tu empresa.
                </p>
              </div>

            </div>
          </div>

          {/* Bloque visual */}
          <div className="lg:col-span-5">
            <div
              className="
                relative
                min-h-[480px]
                rounded-[36px]
                overflow-hidden
                bg-[var(--vekcia-blue)]
                p-10
                lg:p-12
                flex
                flex-col
                justify-end
              "
            >

              <div className="absolute top-0 right-0 w-40 h-40 border-l border-b border-white/10 rounded-bl-[80px]" />

              <div className="relative z-10">

                <span
                  className="
                    block
                    text-sm
                    font-bold
                    tracking-[0.2em]
                    uppercase
                    text-[var(--vekcia-green)]
                    mb-6
                  "
                >
                  VEKCIA Seguros
                </span>

                <h3
                  className="
                    text-4xl
                    lg:text-5xl
                    font-black
                    leading-tight
                    tracking-[-0.03em]
                    text-white
                    mb-6
                  "
                >
                  Tu operación
                  <span className="block text-[var(--vekcia-green)]">
                    también necesita respaldo.
                  </span>
                </h3>

                <p className="text-lg leading-8 text-white/75 max-w-md">
                  Protege los activos que hacen posible que tu empresa siga
                  avanzando.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
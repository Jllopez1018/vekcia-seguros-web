export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-white pt-45 pb-45"
      data-aos="fade-up"
    >
      <div className="vekcia-container">

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <span
            className="
              inline-block
              text-sm
              font-semibold
              tracking-[0.35em]
              uppercase
              text-[#00C16A]
              mb-8
            "
          >
            Nosotros
          </span>

          <h2
            className="
              max-w-6xl
              mx-auto
              text-5xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[1]
              text-[#081221]
            "
          >
            Protegemos lo que más valoras.
          </h2>

          <div
            className="
              w-24
              h-1
              bg-[var(--vekcia-bg)]
              mx-auto
              mt-8
              rounded-full
            "
          />

          <p
            className="
              max-w-5xl
              mx-auto
              mt-10
              text-xl
              leading-9
              text-slate-600
            "
          >
            En VEKCIA Seguros brindamos soluciones de protección para
            personas, familias y empresas. Trabajamos con las principales
            aseguradoras para ofrecer coberturas competitivas en autos,
            flotillas, transporte de carga y vehículos especializados,
            proporcionando respaldo, atención personalizada y tranquilidad
            en cada etapa del camino.
          </p>

        </div>

      </div>
    </section>
  );
}
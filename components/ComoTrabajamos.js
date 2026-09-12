export default function ComoTrabajamos() {
  const pasos = [
    {
      numero: "01",
      titulo: "Escuchamos",
      texto:
        "Conocemos tus necesidades, tu operación y aquello que quieres proteger.",
    },
    {
      numero: "02",
      titulo: "Analizamos",
      texto:
        "Identificamos riesgos y revisamos las opciones de protección que mejor se adaptan a ti.",
    },
    {
      numero: "03",
      titulo: "Diseñamos",
      texto:
        "Construimos una propuesta de cobertura clara, competitiva y alineada con tus necesidades.",
    },
    {
      numero: "04",
      titulo: "Acompañamos",
      texto:
        "Seguimos contigo antes, durante y después de contratar tu seguro.",
    },
  ];

  return (
    <section
        id="como-trabajamos"
        className="scroll-mt-20 bg-white py-24 lg:py-28"
        data-aos="fade-up"
        >
      <div className="vekcia-container">

        {/* Header */}
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
            Cómo trabajamos
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
            Protección que comienza
            <span className="block text-[var(--vekcia-blue)]">
              con escucharte.
            </span>
          </h2>

          <p
            className="
              mt-8
              text-xl
              lg:text-2xl
              leading-9
              text-slate-600
              max-w-3xl
            "
          >
            Te acompañamos para encontrar soluciones de protección que
            realmente respondan a tus necesidades.
          </p>

        </div>


        {/* Pasos */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
            lg:gap-8
          "
        >

          {pasos.map((paso, index) => (
            <div
              key={paso.numero}
              className="
                relative
                pt-8
                border-t
                border-slate-300
              "
            >

              {/* Número */}
              <span
                className="
                  block
                  text-sm
                  font-bold
                  tracking-[0.2em]
                  text-[var(--vekcia-green)]
                  mb-6
                "
              >
                {paso.numero}
              </span>

              {/* Título */}
              <h3
                className="
                  text-3xl
                  lg:text-4xl
                  font-bold
                  tracking-tight
                  text-[#081221]
                  mb-5
                "
              >
                {paso.titulo}
              </h3>

              {/* Texto */}
              <p
                className="
                  text-lg
                  leading-8
                  text-slate-600
                  max-w-sm
                "
              >
                {paso.texto}
              </p>

              {/* Línea de conexión */}
              {index < pasos.length - 1 && (
                <div
                  className="
                    hidden
                    lg:block
                    absolute
                    top-[-1px]
                    right-[-16px]
                    w-8
                    h-px
                    bg-[var(--vekcia-green)]
                  "
                />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
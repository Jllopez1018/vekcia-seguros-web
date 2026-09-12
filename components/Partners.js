"use client";

const aseguradoras = [
  {
    order: 1,
    name: "GNP",
    logo: "/logos/aseguradoras/gnp.png",
  },
  {
    order: 2,
    name: "Quálitas",
    logo: "/logos/aseguradoras/qualitas.png",
  },
  {
    order: 3,
    name: "HDI",
    logo: "/logos/aseguradoras/hdi.png",
  },
  {
    order: 4,
    name: "Chubb",
    logo: "/logos/aseguradoras/chubb.png",
  },
  {
    order: 5,
    name: "Atlas",
    logo: "/logos/aseguradoras/atlas.png",
  },
  {
    order: 6,
    name: "ANA Seguros",
    logo: "/logos/aseguradoras/ana.png",
  },
  {
    order: 7,
    name: "Primero Seguros",
    logo: "/logos/aseguradoras/primero.png",
  },
];

const logos = [...aseguradoras].sort(
  (a, b) => a.order - b.order
);

export default function Partners() {
  return (
    <section
      id="partners"
      className="
        bg-white
        py-24
        lg:py-28
        overflow-hidden
      "
      data-aos="fade-up"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* Header */}

        <div className="text-center mb-16 lg:mb-18">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              px-5
              py-2.5
              text-xs
              font-semibold
              tracking-[0.25em]
              uppercase
              bg-emerald-50
              border
              border-emerald-100
              text-[var(--vekcia-green)]
            "
          >
            Principales Aseguradoras
          </span>

          <h2
            className="
              mt-7
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-[-0.04em]
              leading-[0.95]
              text-[#081221]
              max-w-5xl
              mx-auto
            "
          >
            Trabajamos con las
            <span className="block text-[var(--vekcia-blue)]">
              aseguradoras líderes
            </span>
          </h2>

          <p
            className="
              mt-7
              text-lg
              lg:text-xl
              text-slate-600
              max-w-4xl
              mx-auto
              leading-8
            "
          >
            Comparamos opciones entre distintas compañías para
            encontrar la cobertura adecuada para cada cliente,
            garantizando respaldo, confianza y protección.
          </p>

        </div>

        {/* Logos */}

        <div className="partners-slider">

          <div className="partners-track">

            {[...logos, ...logos].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="partner-item"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
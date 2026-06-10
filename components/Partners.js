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

const logos = [...aseguradoras]
  .sort((a, b) => a.order - b.order);

export default function Partners() {
  return (
    <section
      className="
        bg-white
        py-32
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* Header */}

        <div className="text-center mb-20">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              tracking-[0.2em]
              uppercase
              bg-slate-100
              border
              border-slate-200
              text-slate-700
            "
          >
            Principales Aseguradoras
          </span>

          <h2
            className="
              mt-8
              text-5xl
              lg:text-6xl
              font-bold
              text-slate-900
            "
          >
            Trabajamos con las aseguradoras líderes del mercado
          </h2>

          <p
            className="
              mt-8
              text-xl
              text-slate-600
              max-w-4xl
              mx-auto
              leading-9
            "
          >
            Comparamos opciones entre distintas compañías para
            encontrar la cobertura adecuada para cada cliente,
            garantizando respaldo, confianza y protección.
          </p>

        </div>

        {/* Slider */}

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

        {/* Footer */}

        <div
          className="
            border-t
            border-slate-200
            pt-10
            mt-24
            text-center            
          "
        >

         
        </div>

      </div>
    </section>
  );
}
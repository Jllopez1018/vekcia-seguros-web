import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Truck,
} from "lucide-react";

export default function Metas() {
  const pilares = [
    {
      icon: ShieldCheck,
      title: "Protección Patrimonial",
      description:
        "Diseñamos soluciones que protegen el patrimonio de personas y empresas ante riesgos imprevistos.",
    },
    {
      icon: BadgeCheck,
      title: "Respaldo Especializado",
      description:
        "Brindamos asesoría profesional para encontrar la cobertura adecuada según las necesidades de cada cliente.",
    },
    {
      icon: HeartHandshake,
      title: "Atención y Acompañamiento",
      description:
        "Acompañamos a nuestros clientes antes, durante y después de la contratación, ofreciendo atención cercana y personalizada.",
    },
    {
      icon: Truck,
      title: "Continuidad Operativa",
      description:
        "Ayudamos a empresas y transportistas a mantener sus operaciones protegidas mediante coberturas diseñadas para minimizar riesgos.",
    },
  ];

  return (
    <section
      id="metas"
      className="relative overflow-hidden py-36 bg-slate-100"
      data-aos="fade-up"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            bg-emerald-500/5
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[600px]
            h-[600px]
            bg-cyan-500/5
            blur-[160px]
          "
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mb-24">

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
              bg-emerald-50
              border
              border-emerald-200
              text-emerald-700
              mb-8
            "
          >
            Protección y Confianza
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-slate-900
              leading-[1.05]
              mb-8
            "
          >
            Protegemos tu patrimonio con soluciones diseñadas para cada necesidad.
          </h2>

          <p
            className="
              text-xl
              text-slate-600
              max-w-4xl
              leading-9
            "
          >
            Ofrecemos asesoría especializada y acceso a las mejores opciones del mercado asegurador para proteger vehículos particulares, flotillas comerciales, transporte de carga y unidades especializadas.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {pilares.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-10
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                "
              >
                {/* Top Accent */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-[var(--vekcia-bg)]
                    via-green-500
                    to-transparent
                  "
                />

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-slate-50
                    border
                    border-slate-200
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    className="
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                    size={24}
                    style={{
                      color: "var(--vekcia-bg)",
                    }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-slate-900
                    mb-5
                    max-w-sm
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-slate-600
                    text-lg
                    leading-8
                  "
                >
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";

export default function Servicios() {
const servicios = [
  {
    id: 1,
    numero: "01",
    type:"Seguro de Daños",
    image: "/images/servicios/autos.jpg",
    title: "Autos y Flotillas Vehiculares",
    description:
      "Protegemos vehículos particulares, flotillas empresariales, autos utilitarios y unidades de renta mediante coberturas diseñadas para reducir riesgos y brindar tranquilidad tanto a personas como a empresas.",
    bullets: [
      "Autos particulares",
      "Flotillas empresariales",
      "Vehículos utilitarios",
      "Autos de renta",
      "Responsabilidad Civil",
      "Daños Materiales",
    ],
  },

  {
    id: 2,
    numero: "02",
    type:"Seguro de Daños",
    image: "/images/servicios/trailers.jpg",
    title: "Transporte de Carga y Logística",
    description:
      "Soluciones especializadas para empresas transportistas y operadores logísticos. Protegemos tractocamiones, remolques, camiones de carga y unidades comerciales que forman parte de la cadena de suministro.",
    bullets: [
      "Flotillas de tráileres",
      "Tractocamiones",
      "Camiones 3½ toneladas",
      "Transporte de carga",
      "Logística y distribución",
      "Equipo pesado",
    ],
  },

  {
    id: 3,
    numero: "03",
    type:"Seguro de Daños",
    image: "/images/servicios/general.png",
    title: "Vehículos Especializados",
    description:
      "Ofrecemos protección para unidades de uso especial y operaciones específicas, adaptando las coberturas a las necesidades de cada actividad comercial o recreativa.",
    bullets: [
      "Motocicletas",
      "RZR y UTV",
      "Grúas de asistencia vial",
      "Camiones de reparto",
      "Vehículos comerciales",
      "Unidades especiales",
    ],
  },

  {
    id: 4,
    numero: "04",
    type:"Seguro de Daños",
    image: "/images/servicios/patrimonial.jpg",
    title: "Seguros Patrimoniales",
    description:
      "Protegemos negocios, obras de construcción y propiedades contra eventos que puedan afectar la continuidad de las operaciones o generar pérdidas económicas importantes.",
    bullets: [
      "Negocios",
      "Locales comerciales",
      "Casa habitación",
      "Obras en construcción",
      "Contenido e inventario",
      "Responsabilidad Civil",
    ],
  },

  {
    id: 5,
    numero: "05",
    type:"Seguro de Salud",
    image: "/images/servicios/medical.jpg",
    title: "Gastos Médicos y Protección Familiar",
    description:
      "Acceso a soluciones de salud y protección financiera para individuos, familias y empresas, respaldadas por aseguradoras líderes del mercado.",
    bullets: [
      "Gastos Médicos Mayores",
      "Seguro de Salud",
      "Protección Familiar",
      "Cobertura Hospitalaria",
      "Accidentes Personales",
      "Planes Empresariales",
    ],
  },
];

  return (
    <section
      id="servicios"
      className="bg-white py-28"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mb-12">

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
              mb-8
            "
          >
            Seguros Especializados
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
            Protección integral para personas, empresas y patrimonio.
          </h2>

          <p
            className="
              text-xl
              text-slate-600
              leading-9
              max-w-4xl
            "
          >
            Ofrecemos soluciones aseguradoras para vehículos, transporte de carga, negocios, propiedades y salud, respaldadas por las principales 
            compañías del mercado y acompañadas de asesoría especializada.          </p>

        </div>

        {/* Servicios */}
        <div className="space-y-28">

          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="
                grid
                lg:grid-cols-[1.15fr_0.85fr]
                gap-16
                items-center
              "
            >

              {/* Imagen */}
              {/* Imagen */}
                <div
                className={`
                    ${index % 2 !== 0 ? "lg:order-2" : ""}
                `}
                >
                <div
                    className="
                    relative
                    h-[550px]
                    rounded-[36px]
                    overflow-hidden
                    shadow-xl
                    border
                    border-slate-200
                    group
                    "
                >

                    <Image
                    src={servicio.image}
                    alt={servicio.title}
                    fill
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Overlay suave */}
                    <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-900/20
                        via-transparent
                        to-transparent
                    "
                    />

                   

                </div>
                </div>

              {/* Contenido */}
              <div
                className={`
                  ${index % 2 !== 0 ? "lg:order-1" : ""}
                `}
              >
              <span
                className="
                  inline-block
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  uppercase
                  text-[var(--vekcia-bg)]
                  mb-4
                "
              >
                {servicio.type}
              </span>

                <h3
                  className="
                    text-4xl
                    lg:text-5xl
                    font-bold
                    text-slate-900
                    mt-4
                    mb-6
                    leading-tight
                  "
                >
                  {servicio.title}
                </h3>

<div
  className="
    w-24
    h-1
    bg-[var(--vekcia-bg)]
    rounded-full
    my-6
  "
/>

                <p
                  className="
                    text-xl
                    text-slate-600
                    leading-9
                    mb-10
                  "
                >
                  {servicio.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">

                  {servicio.bullets.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-700
                        text-sm
                        font-medium
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
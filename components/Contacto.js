"use client";

import { useState } from "react";

export default function Contacto() {
  const [enviando, setEnviando] = useState(false);
  const [privacidadAceptada, setPrivacidadAceptada] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!privacidadAceptada) {
      return;
    }

    setEnviando(true);
    setMensaje("");

    try {
      /*
       * Aquí conectaremos posteriormente con el API de VEKCIA Seguros.
       *
       * const formData = new FormData(e.currentTarget);
       *
       * const payload = {
       *   name: formData.get("name"),
       *   email: formData.get("email"),
       *   phone: formData.get("phone"),
       *   insuranceType: formData.get("insuranceType"),
       *   comments: formData.get("comments"),
       *   additionalData: formData.get("additionalData"),
       *   privacyAccepted: formData.get("privacyAccepted") === "on",
       * };
       *
       * await fetch("URL_DEL_API", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(payload),
       * });
       */

      console.log("Formulario listo para conectar con API.");

      setMensaje(
        "Tu solicitud está lista para ser enviada."
      );

    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-[#F6F9FD] py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Información */}

          <div className="lg:col-span-5 lg:pt-6">

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
              Contacto
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
              Hablemos de
              <span className="block text-[var(--vekcia-blue)]">
                tu protección.
              </span>
            </h2>

            <div className="w-20 h-1 bg-[var(--vekcia-green)] mt-8 mb-8 rounded-full" />

            <p
              className="
                text-xl
                leading-9
                text-slate-600
                max-w-xl
              "
            >
              Cuéntanos qué necesitas proteger y uno de nuestros
              asesores se pondrá en contacto contigo.
            </p>

            <div className="mt-12 space-y-6">

              {/* Correo */}

              <div className="flex items-start gap-4">

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[var(--vekcia-green)]
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    shrink-0
                  "
                >
                  @
                </div>

                <div>
                  <span className="block text-sm text-slate-400 mb-1">
                    Correo
                  </span>

                  <span className="text-lg font-semibold text-[#081221]">
                    contacto@vekcia.com
                  </span>
                </div>

              </div>

              {/* Atención */}

              <div className="flex items-start gap-4">

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[var(--vekcia-blue)]
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    shrink-0
                  "
                >
                  +
                </div>

                <div>
                  <span className="block text-sm text-slate-400 mb-1">
                    Atención personalizada
                  </span>

                  <span className="text-lg font-semibold text-[#081221]">
                    Estamos para ayudarte
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* Formulario */}

          <div className="lg:col-span-7">

            <form
              onSubmit={handleSubmit}
              className="
                bg-white
                rounded-[32px]
                p-8
                md:p-10
                lg:p-12
                border
                border-slate-200
              "
            >

              <div className="grid md:grid-cols-2 gap-6">

                {/* Nombre */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-[#081221]
                      mb-2
                    "
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3.5
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[var(--vekcia-green)]
                      focus:ring-2
                      focus:ring-emerald-100
                    "
                  />
                </div>


                {/* Teléfono */}

                <div>
                  <label
                    htmlFor="phone"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-[#081221]
                      mb-2
                    "
                  >
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="10 dígitos"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3.5
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[var(--vekcia-green)]
                      focus:ring-2
                      focus:ring-emerald-100
                    "
                  />
                </div>


                {/* Correo */}

                <div className="md:col-span-2">

                  <label
                    htmlFor="email"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-[#081221]
                      mb-2
                    "
                  >
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="correo@ejemplo.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3.5
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[var(--vekcia-green)]
                      focus:ring-2
                      focus:ring-emerald-100
                    "
                  />

                </div>


                {/* Tipo de seguro */}

                <div className="md:col-span-2">

                  <label
                    htmlFor="insuranceType"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-[#081221]
                      mb-2
                    "
                  >
                    ¿Qué deseas asegurar?
                  </label>

                  <select
                    id="insuranceType"
                    name="insuranceType"
                    required
                    defaultValue=""
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3.5
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[var(--vekcia-green)]
                      focus:ring-2
                      focus:ring-emerald-100
                    "
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    <option value="auto">
                      Auto
                    </option>

                    <option value="moto">
                      Moto
                    </option>

                    <option value="camioneta">
                      Camioneta
                    </option>

                    <option value="flotilla_autos">
                      Flotilla de autos
                    </option>

                    <option value="flotilla_trailers">
                      Flotilla de tráileres
                    </option>

                    <option value="grua">
                      Grúa
                    </option>

                    <option value="transporte_carga">
                      Transporte de carga
                    </option>

                    <option value="vehiculo_especializado">
                      Vehículo especializado
                    </option>

                    <option value="casa">
                      Casa
                    </option>

                    <option value="negocio">
                      Negocio
                    </option>

                    <option value="viaje">
                      Viaje
                    </option>

                    <option value="otro">
                      Otro
                    </option>

                  </select>

                </div>


                {/* Comentarios */}

                <div className="md:col-span-2">

                  <label
                    htmlFor="comments"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-[#081221]
                      mb-2
                    "
                  >
                    ¿Cómo podemos ayudarte?
                  </label>

                  <textarea
                    id="comments"
                    name="comments"
                    rows="4"
                    placeholder="Cuéntanos brevemente qué necesitas."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3.5
                      text-slate-800
                      outline-none
                      resize-none
                      transition
                      focus:border-[var(--vekcia-green)]
                      focus:ring-2
                      focus:ring-emerald-100
                    "
                  />

                </div>


                {/* Datos adicionales */}

                <div className="md:col-span-2">

                  <label
                    htmlFor="additionalData"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-[#081221]
                      mb-2
                    "
                  >
                    Datos adicionales

                    <span className="font-normal text-slate-400">
                      {" "}Opcional
                    </span>
                  </label>

                  <textarea
                    id="additionalData"
                    name="additionalData"
                    rows="3"
                    placeholder="Puedes agregar información adicional que consideres importante."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3.5
                      text-slate-800
                      outline-none
                      resize-none
                      transition
                      focus:border-[var(--vekcia-green)]
                      focus:ring-2
                      focus:ring-emerald-100
                    "
                  />

                </div>

              </div>


              {/* Privacidad */}

              <div className="mt-8">

                <label
                  htmlFor="privacyAccepted"
                  className="
                    flex
                    items-start
                    gap-3
                    cursor-pointer
                  "
                >

                  <input
                    id="privacyAccepted"
                    name="privacyAccepted"
                    type="checkbox"
                    checked={privacidadAceptada}
                    onChange={(e) =>
                      setPrivacidadAceptada(e.target.checked)
                    }
                    required
                    className="
                      mt-1
                      w-4
                      h-4
                      shrink-0
                      accent-[var(--vekcia-green)]
                    "
                  />

                  <span className="text-sm leading-6 text-slate-500">

                    He leído y acepto el{" "}

                    <a
                      href="/aviso-de-privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        font-semibold
                        text-[var(--vekcia-blue)]
                        hover:text-[var(--vekcia-green)]
                        transition
                      "
                    >
                      Aviso de Privacidad
                    </a>

                    {" "}y autorizo el tratamiento de mis datos personales
                    para recibir atención relacionada con mi solicitud.

                  </span>

                </label>

              </div>


              {/* Mensaje */}

              {mensaje && (
                <div
                  className="
                    mt-6
                    rounded-xl
                    border
                    border-emerald-100
                    bg-emerald-50
                    px-4
                    py-3
                    text-sm
                    text-emerald-800
                  "
                >
                  {mensaje}
                </div>
              )}


              {/* Botón */}

              <button
                type="submit"
                disabled={!privacidadAceptada || enviando}
                className="
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  w-full
                  md:w-auto
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  transition
                  text-white

                  bg-[var(--vekcia-green)]

                  hover:brightness-95

                  disabled:bg-slate-200
                  disabled:text-slate-400
                  disabled:cursor-not-allowed
                  disabled:hover:brightness-100
                "
              >

                {enviando
                  ? "Enviando..."
                  : "Solicitar información"
                }

                {!enviando && (
                  <span className="text-lg">
                    →
                  </span>
                )}

              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
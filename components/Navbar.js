"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--vekcia-bg)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logos/logo.png"
              alt="VEKCIA Seguros"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <ul className="flex items-center gap-8 text-white font-semibold">

              <li>
                <a
                  href="#nosotros"
                  className="transition-opacity hover:opacity-70"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  className="transition-opacity hover:opacity-70"
                >
                  Protección
                </a>
              </li>

              <li>
                <a
                  href="#como-trabajamos"
                  className="transition-opacity hover:opacity-70"
                >
                  Cómo trabajamos
                </a>
              </li>

              <li>
                <a
                  href="#empresas"
                  className="transition-opacity hover:opacity-70"
                >
                  Empresas
                </a>
              </li>

              {/* <li>
                <a
                  href="#contacto"
                  className="transition-opacity hover:opacity-70"
                >
                  Contacto
                </a>
              </li> */}

            </ul>

            {/* CTA */}
            {/* <a
              href="#contacto"
              className="
                inline-flex items-center justify-center
                px-5 py-2.5
                rounded-full
                bg-white
                text-[var(--vekcia-blue)]
                font-bold
                transition-all
                hover:bg-[var(--vekcia-blue)]
                hover:text-white
              "
            >
              Solicitar asesoría
            </a> */}

          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--vekcia-bg)] border-t border-white/10">

          <ul className="flex flex-col py-3">

            <li>
              <a
                href="#nosotros"
                onClick={closeMenu}
                className="
                  block px-6 py-3
                  text-white font-medium
                  hover:bg-white/10
                "
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                onClick={closeMenu}
                className="
                  block px-6 py-3
                  text-white font-medium
                  hover:bg-white/10
                "
              >
                Protección
              </a>
            </li>

            <li>
              <a
                href="#como-trabajamos"
                onClick={closeMenu}
                className="
                  block px-6 py-3
                  text-white font-medium
                  hover:bg-white/10
                "
              >
                Cómo trabajamos
              </a>
            </li>

            <li>
              <a
                href="#empresas"
                onClick={closeMenu}
                className="
                  block px-6 py-3
                  text-white font-medium
                  hover:bg-white/10
                "
              >
                Empresas
              </a>
            </li>

            {/* <li>
              <a
                href="#contacto"
                onClick={closeMenu}
                className="
                  block px-6 py-3
                  text-white font-medium
                  hover:bg-white/10
                "
              >
                Contacto
              </a>
            </li>

            <li className="px-6 pt-3">
              <a
                href="#contacto"
                onClick={closeMenu}
                className="
                  flex items-center justify-center
                  w-full
                  px-5 py-3
                  rounded-full
                  bg-white
                  text-[var(--vekcia-blue)]
                  font-bold
                "
              >
                Solicitar asesoría
              </a>
            </li> */}

          </ul>

        </div>
      )}
    </nav>
  );
}
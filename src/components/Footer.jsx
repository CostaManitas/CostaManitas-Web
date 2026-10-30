
'use client'

import site from "../data/site"

export default function Footer() {
  function openCookieSettings() {
    window.dispatchEvent(new Event("open-cookie-settings"))
  }

  return (
    <footer className="bg-black text-white py-8 border-t-4 border-black">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 max-w-3xl mx-auto mb-4">
          Costa Manitas es un servicio local de pequeñas reparaciones y mantenimiento del hogar en Gijón. Trabajo directamente en viviendas y pequeños negocios, por lo que no dispongo de local abierto al público.
        </p>

        <p className="font-bold text-lg mb-2">{site.siteName}</p>

        <p className="text-sm font-bold text-gray-400">
          Tu manitas de confianza · WhatsApp: {site.phoneIntlSpaced}
        </p>

        <p className="text-[10px] text-gray-600 mt-1">
          Contacto directo: {site.phoneIntl}
        </p>

        <nav
          aria-label="Información legal"
          className="mt-6 pt-4 border-t border-gray-700 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-gray-400"
        >
          <a href="/aviso-legal/" className="hover:text-white underline">
            Aviso Legal
          </a>

          <a href="/politica-de-privacidad/" className="hover:text-white underline">
            Política de Privacidad
          </a>

          <a href="/politica-de-cookies/" className="hover:text-white underline">
            Política de Cookies
          </a>

          <button
            type="button"
            onClick={openCookieSettings}
            className="hover:text-white underline"
          >
            Configuración de cookies
          </button>
        </nav>
      </div>
    </footer>
  )
}

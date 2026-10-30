
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import site from "@/data/site";

export const metadata = {
  title: "Política de Cookies | Costa Manitas",
  description:
    "Información sobre el uso de cookies y Google Analytics 4 en la web de Costa Manitas.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${site.siteUrl}/politica-de-cookies/`,
  },
};

export default function PoliticaDeCookies() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">
        <article className="max-w-4xl mx-auto px-5 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-black uppercase mb-10">
            Política de Cookies
          </h1>

          <p className="mb-10 text-sm text-gray-700">
            <strong>Última actualización:</strong> 30/10/2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos que se almacenan en el
              dispositivo del usuario cuando visita una página web. Permiten
              recordar determinada información sobre la navegación y obtener
              estadísticas sobre el uso del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              2. ¿Qué cookies utiliza este sitio web?
            </h2>
            <p className="mb-3">
              El sitio web{" "}
              <a
                href="https://www.manitasengijon.es"
                className="underline"
              >
                https://www.manitasengijon.es
              </a>{" "}
              prevé utilizar cookies analíticas de Google Analytics 4 (GA4),
              un servicio de análisis web proporcionado por Google.
            </p>
            <p className="mb-3">
              Estas cookies permiten conocer cómo interactúan los visitantes
              con el sitio web, obtener estadísticas de navegación y mejorar
              sus contenidos y funcionamiento.
            </p>
            <p>
              No se utilizan cookies publicitarias ni cookies destinadas a
              crear perfiles comerciales de los usuarios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              3. Relación de cookies utilizadas
            </h2>
            <p className="mb-4">
              Las cookies analíticas previstas son las siguientes:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-3 py-3 font-bold">Cookie</th>
                    <th className="px-3 py-3 font-bold">Finalidad</th>
                    <th className="px-3 py-3 font-bold">
                      Duración predeterminada
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-3">_ga</td>
                    <td className="px-3 py-3">
                      Distinguir a los usuarios con fines estadísticos.
                    </td>
                    <td className="px-3 py-3">2 años</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-3">_ga_[identificador]</td>
                    <td className="px-3 py-3">
                      Mantener el estado de la sesión de Google Analytics.
                    </td>
                    <td className="px-3 py-3">2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              La segunda cookie incorpora un identificador específico de la
              propiedad de Google Analytics.
            </p>
            <p className="mt-3">
              La duración indicada corresponde a la configuración
              predeterminada de Google y puede variar según la configuración
              aplicada y las limitaciones de los navegadores.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              4. Consentimiento para el uso de cookies
            </h2>
            <p className="mb-3">
              Las cookies analíticas no se instalarán hasta que el usuario
              haya prestado su consentimiento mediante el banner de cookies.
            </p>
            <p className="mb-2">El usuario podrá:</p>
            <ul className="list-disc space-y-1 pl-6 mb-3">
              <li>Aceptar todas las cookies.</li>
              <li>Rechazar las cookies analíticas.</li>
              <li>Configurar sus preferencias.</li>
            </ul>
            <p className="mb-3">
              La navegación por el sitio web no implica por sí misma la
              aceptación de cookies analíticas.
            </p>
            <p>
              El usuario podrá modificar o retirar su consentimiento en
              cualquier momento mediante el acceso a la configuración de
              cookies disponible en el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              5. Cómo desactivar o eliminar las cookies
            </h2>
            <p className="mb-3">
              El usuario también puede configurar su navegador para bloquear
              o eliminar las cookies almacenadas.
            </p>
            <p className="mb-3">
              Puede consultar las instrucciones de configuración de los
              principales navegadores:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  className="underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/"
                  className="underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/microsoft-edge"
                  className="underline"
                >
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/safari"
                  className="underline"
                >
                  Safari
                </a>
              </li>
            </ul>
            <p className="mt-4">
              La eliminación de cookies desde el navegador no sustituye
              necesariamente la retirada del consentimiento registrada en el
              sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              6. Google Analytics
            </h2>
            <p className="mb-3">
              Google Analytics 4 es un servicio de análisis web proporcionado
              por Google que permite obtener estadísticas sobre el uso del
              sitio web.
            </p>
            <p className="mb-3">
              La información generada por las cookies puede ser transmitida y
              tratada por Google conforme a sus condiciones y políticas de
              privacidad.
            </p>
            <p className="mb-2">Para más información:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  className="underline"
                >
                  Política de privacidad de Google
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/analytics/answer/11397207"
                  className="underline"
                >
                  Información sobre el uso de cookies en Google Analytics
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              7. Modificaciones de la política de cookies
            </h2>
            <p>
              Esta Política de cookies podrá actualizarse cuando se produzcan
              cambios en las cookies utilizadas, en los servicios incorporados
              al sitio web o en la normativa aplicable. La versión vigente
              estará siempre disponible en este sitio web.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

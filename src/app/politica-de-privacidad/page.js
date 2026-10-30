
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import site from "../../data/site"

export const metadata = {
  title: "Política de Privacidad | Costa Manitas",
  description: "Política de Privacidad del sitio web de Costa Manitas en Gijón.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${site.siteUrl}/politica-de-privacidad/`,
  },
}

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">
        <article className="max-w-4xl mx-auto px-5 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-black uppercase mb-10">
            Política de Privacidad
          </h1>

          <p className="text-sm text-gray-600 mb-10">
            <strong>Última actualización:</strong> 30/10/2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              1. Responsable del tratamiento
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nombre comercial:</strong> Costa Manitas</li>
              <li><strong>Correo electrónico:</strong> costa@manitasengijon.es</li>
              <li>
                <strong>Sitio web:</strong>{" "}
                <a href="https://www.manitasengijon.es" className="underline">
                  https://www.manitasengijon.es
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              2. Datos personales que podemos recoger
            </h2>
            <p className="mb-4">
              Costa Manitas puede tratar las siguientes categorías de datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos identificativos y de contacto: nombre, teléfono y correo electrónico.</li>
              <li>Datos relacionados con solicitudes de información, consultas y presupuestos.</li>
              <li>Información necesaria para la prestación de servicios de reparación y mantenimiento.</li>
              <li>Datos de navegación y uso del sitio web, mediante Google Analytics 4, cuando el usuario haya prestado su consentimiento para las cookies analíticas.</li>
            </ul>
            <p className="mt-3">
              No se solicitan datos personales que no sean necesarios para las finalidades indicadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              3. Finalidades del tratamiento
            </h2>
            <p className="mb-4">Los datos personales se utilizan para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Atender consultas y solicitudes de información.</li>
              <li>Preparar presupuestos y gestionar solicitudes de servicios.</li>
              <li>Organizar y prestar los servicios contratados.</li>
              <li>Mantener comunicaciones relacionadas con los trabajos realizados.</li>
              <li>Cumplir las obligaciones legales, fiscales y administrativas aplicables.</li>
              <li>Obtener estadísticas sobre el uso del sitio web y mejorar su funcionamiento y contenidos, mediante Google Analytics 4 cuando exista consentimiento válido.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              4. Base jurídica del tratamiento
            </h2>
            <p className="mb-4">El tratamiento de los datos se fundamenta, según corresponda, en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Medidas precontractuales y ejecución de un contrato:</strong> atención de solicitudes, preparación de presupuestos y prestación de servicios.</li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> conservación de documentación y cumplimiento de obligaciones fiscales y administrativas.</li>
              <li><strong>Consentimiento:</strong> utilización de cookies analíticas y tecnologías similares cuando sea necesario.</li>
              <li><strong>Interés legítimo:</strong> únicamente cuando resulte aplicable y después de valorar los derechos e intereses de las personas afectadas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              5. Conservación de los datos
            </h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades para las que fueron recogidos.
            </p>
            <p className="mt-3">
              Cuando exista una relación contractual, los datos se conservarán durante su vigencia y posteriormente durante los plazos exigidos por las obligaciones legales aplicables.
            </p>
            <p className="mt-3">
              Los datos tratados con fines estadísticos mediante Google Analytics se conservarán según el periodo configurado en dicha herramienta: 14 meses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              6. Destinatarios de los datos
            </h2>
            <p>
              Los datos personales no se venderán ni se cederán a terceros con fines comerciales.
            </p>
            <p className="mt-3">
              Podrán tener acceso a los datos los proveedores que prestan servicios necesarios para el funcionamiento de la actividad, como proveedores de alojamiento web, correo electrónico y herramientas de análisis estadístico, siempre que corresponda y bajo las garantías legales aplicables.
            </p>
            <p className="mt-3">
              En particular, Google Analytics 4 es un servicio de análisis proporcionado por Google.
            </p>
            <p className="mt-3">
              Los datos también podrán comunicarse a administraciones públicas u organismos competentes cuando exista una obligación legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              7. Transferencias internacionales
            </h2>
            <p>
              Algunos proveedores tecnológicos utilizados para prestar los servicios descritos pueden tratar datos fuera del Espacio Económico Europeo.
            </p>
            <p className="mt-3">
              Cuando se produzcan transferencias internacionales, se realizarán conforme a las garantías y mecanismos previstos por la normativa de protección de datos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              8. Derechos de los usuarios
            </h2>
            <p className="mb-4">Los usuarios pueden ejercer los siguientes derechos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceso a sus datos personales.</li>
              <li>Rectificación de datos inexactos.</li>
              <li>Supresión de sus datos cuando proceda.</li>
              <li>Limitación del tratamiento.</li>
              <li>Oposición al tratamiento.</li>
              <li>Portabilidad de los datos, cuando resulte aplicable.</li>
              <li>Retirada del consentimiento en cualquier momento, sin afectar a la licitud del tratamiento anterior a su retirada.</li>
            </ul>
            <p className="mt-4">Para ejercer estos derechos, pueden enviar una solicitud a:</p>
            <p className="mt-3">
              <strong>Correo electrónico:</strong> costa@manitasengijon.es
            </p>
            <p className="mt-3">
              También tienen derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), a través de{" "}
              <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="underline">
                https://www.aepd.es/
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              9. Seguridad de los datos
            </h2>
            <p>
              Costa Manitas aplica medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o divulgación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              10. Cookies y análisis estadístico
            </h2>
            <p>
              Este sitio web podrá utilizar cookies analíticas de Google Analytics 4 para obtener estadísticas sobre el uso y rendimiento del sitio.
            </p>
            <p className="mt-3">
              Estas cookies solo se utilizarán cuando el usuario haya prestado su consentimiento, que podrá modificar o retirar posteriormente a través del sistema de configuración de cookies.
            </p>
            <p className="mt-3">
              Para más información, puede consultarse la Política de cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              11. Modificaciones de la política de privacidad
            </h2>
            <p>
              Costa Manitas se reserva el derecho de modificar esta Política de privacidad para adaptarla a cambios legislativos, técnicos o en los tratamientos de datos realizados.
            </p>
            <p className="mt-3">
              La versión vigente estará siempre disponible en este sitio web.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  )
}

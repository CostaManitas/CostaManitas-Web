
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import site from "../../data/site"

export const metadata = {
  title: "Aviso Legal | Costa Manitas",
  description: "Aviso Legal del sitio web de Costa Manitas en Gijón.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${site.siteUrl}/aviso-legal/`,
  },
}

export default function AvisoLegal() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">
        <article className="max-w-4xl mx-auto px-5 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-black uppercase mb-10">
            Aviso Legal
          </h1>

          <p className="text-sm text-gray-600 mb-10">
            <strong>Última actualización:</strong> 30/10/2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              1. Datos identificativos
            </h2>

            <p className="mb-4">
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios
              de la Sociedad de la Información y de Comercio Electrónico
              (LSSI-CE), se informa de los siguientes datos:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nombre comercial:</strong> Costa Manitas</li>
              <li><strong>Correo electrónico:</strong> costa@manitasengijon.es</li>
              <li><strong>Teléfono de contacto:</strong> +34 687 70 54 05</li>
              <li>
                <strong>Sitio web:</strong>{" "}
                <a
                  href="https://www.manitasengijon.es"
                  className="underline"
                >
                  https://www.manitasengijon.es
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              2. Objeto
            </h2>
            <p>
              El presente sitio web tiene como finalidad ofrecer información
              sobre los servicios de pequeñas reparaciones, mantenimiento del
              hogar y trabajos relacionados prestados por Costa Manitas en
              Gijón y alrededores.
            </p>
            <p className="mt-3">
              La información publicada tiene carácter informativo y no
              constituye por sí misma una oferta contractual vinculante.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              3. Condiciones de uso
            </h2>
            <p>
              El acceso y uso de este sitio web atribuye la condición de
              usuario e implica la aceptación de las condiciones recogidas
              en este Aviso Legal.
            </p>
            <p className="mt-3">
              El usuario se compromete a utilizar el sitio web de forma
              lícita, responsable y respetuosa, evitando cualquier uso que
              pueda perjudicar al titular o a terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              4. Propiedad intelectual e industrial
            </h2>
            <p>
              Los contenidos de este sitio web, incluyendo textos,
              fotografías, imágenes, elementos gráficos, logotipos y diseño,
              están protegidos por la normativa aplicable en materia de
              propiedad intelectual e industrial.
            </p>
            <p className="mt-3">
              Queda prohibida su reproducción, distribución o utilización
              sin autorización previa del titular, salvo en los casos
              permitidos legalmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              5. Responsabilidad
            </h2>
            <p>
              El titular procura mantener la información del sitio web
              actualizada y correcta, pero no garantiza la ausencia de
              errores u omisiones.
            </p>
            <p className="mt-3">
              No se responsabiliza de los daños derivados del uso indebido
              del sitio web ni de los contenidos o servicios de páginas
              externas enlazadas desde este sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              6. Enlaces externos
            </h2>
            <p>
              Este sitio web puede contener enlaces a páginas de terceros.
              El titular no controla sus contenidos ni sus políticas de
              privacidad, por lo que no asume responsabilidad sobre ellos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4">
              7. Legislación aplicable
            </h2>
            <p>
              El presente Aviso Legal se rige por la legislación española.
            </p>
            <p className="mt-3">
              Para cualquier controversia relacionada con el uso del sitio
              web se aplicará la normativa vigente y, cuando corresponda,
              los juzgados y tribunales competentes.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  )
}
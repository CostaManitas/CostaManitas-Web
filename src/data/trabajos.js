const trabajos = [
  {
    id: 1,
    title: "Cambio de grifo en cocina en Gijón",
    text: "Sustitución de un grifo de cocina en Gijón durante una pequeña reforma. El cliente quería actualizar el modelo y renovar el aspecto de la instalación sin modificar el resto de la cocina. Se retiró el grifo antiguo, se instaló el nuevo y se comprobaron los latiguillos y las conexiones para asegurar que todo quedara en buen estado y listo para el uso diario.",
    image: "/trabajos/trabajo-grifo.webp",
    visible: true
  },
  {
    id: 2,
    title: "Reparación de cisterna WC en Gijón",
    text: "Reparación de una cisterna de WC en Gijón que no paraba de correr y perdía agua de forma continua. El flotador funcionaba correctamente, por lo que el problema estaba en la válvula de descarga, que presentaba desgaste y no cerraba bien. Se sustituyó la válvula de descarga para recuperar el funcionamiento correcto de la cisterna y evitar el consumo innecesario de agua.",
    image: "/trabajos/trabajo-cisterna.webp",
    visible: true // changed to visible per request
  },
  {
    id: 3,
    title: "Instalación de lámpara de techo",
    text: "Instalación de una lámpara de techo antigua y pesada en una vivienda de Gijón. La lámpara contaba con un sistema regulable en altura, lo que exigía una fijación especialmente segura. Se instaló un gancho con taco resistente adecuado al peso de la pieza, se revisaron las conexiones eléctricas y se realizó el ajuste final para dejar la lámpara correctamente colocada y en funcionamiento.",
    image: "/trabajos/instalacion-lampara-techo-gancho-taco-gijon.webp",
    visible: true 
  },
  {
    id: 4,
    title: "Montaje de soporte de TV en pared en Gijón",
    text: "Instalación de un soporte de televisión articulado y orientable en una pared de ladrillo, en una vivienda de Gijón. Se eligieron los anclajes adecuados para el tipo de pared y el peso del televisor, se realizaron las perforaciones necesarias y se colocó el soporte nivelado para que el televisor quedara estable y pudiera moverse para ajustar el ángulo y la posición.",
    image: "/trabajos/trabajo-tv.webp",
    visible: true
  },
  {
    id: 5,
    title: "Reparación y pintura de pared y ventana en Gijón",
    text: "Intervención sobre una pared y una ventana de madera en mal estado, en una vivienda de Gijón. En la pared se aplicó un fijador antihumedad, se reparó la superficie con Aguaplast Premium, se lijó y se terminó con pintura exterior antihumedad. En la ventana se cambió el cristal, se reparó la superficie, se lijó y se pintó para mejorar su estado y protegerla de la intemperie.",
    image: "/trabajos/trabajo-pared.webp",
    visible: true
  },
  {
    id: 6,
    title: "Montaje de mueble zapatero IKEA en Gijón",
    text: "Montaje de un mueble zapatero IKEA modelo STÄLL en Gijón. Se realizó el ensamblaje completo del mueble, el ajuste y la alineación de las puertas y la fijación a la pared para garantizar su estabilidad. El anclaje es especialmente importante en muebles de este tipo para reducir el riesgo de vuelco y favorecer un uso seguro en el día a día.",
    image: "/trabajos/montaje-mueble-zapatero-ikea-stall-gijon.webp",
    visible: true
  },
  {
    id: 7,
    title: "Reparación de persiana atascada en Gijón",
    text: "Reparación de una persiana que no bajaba correctamente en una vivienda de Gijón. El problema se debía a la suciedad acumulada en el mecanismo, que impedía su movimiento correcto. Se limpió el mecanismo, se ajustó el recorrido y se lubricaron las partes necesarias para recuperar el funcionamiento normal sin sustituir la persiana completa.",
    image: "/trabajos/arreglo-persiana-atascada-limpieza-mecanismo-gijon.webp",
    visible: true
  }
  ,
  {
    id: 8,
    title: "Fijación de espejo pesado en pared de Pladur",
    text: "Fijación de un espejo grande y pesado en una pared de Pladur. Colgar un espejo de este peso en Pladur requiere un sistema de fijación adecuado, ya que los tacos convencionales pueden no ofrecer la sujeción necesaria. Se instaló un sistema de soporte trasero adaptado al peso y las dimensiones del espejo y se eligió una fijación apropiada para Pladur, con el objetivo de conseguir un resultado firme, estable y nivelado.",
    image: "/trabajos/fijacion-espejo-pesado-pared-pladur-gijon.webp",
    visible: true
  },
  {
    id: 9,
    title: "Montaje y anclaje de armario Conforama",
    text: "Montaje completo de un armario Conforama en Gijón, con ensamblaje de las piezas, ajuste y alineación de las puertas y anclaje a la pared para mejorar la estabilidad del mueble. El anclaje es especialmente importante en armarios altos para reducir el riesgo de vuelco y mantener el mueble firmemente sujeto.",
    image: "/trabajos/montaje-anclaje-armario-conforama-gijon.webp",
    visible: true
  },
  {
    id: 10,
    title: "Reparación de pulsador de timbre y renovación de apliques en escalera en Gijón",
    text: "Revisión de un timbre de entrada con hilo en un chalet de la zona de Somió, en Gijón. El pulsador exterior no respondía al accionamiento. Se comprobó el circuito con un multímetro para descartar otros problemas en la instalación y, una vez confirmado que el resto funcionaba correctamente, se sustituyó únicamente el pulsador. En el mismo trabajo se renovaron los apliques de la escalera interior, donde había tres unidades de modelos distintos, algunas en mal estado y otras con una fijación deficiente. Se retiraron todos y se instalaron tres apliques iguales para unificar la iluminación entre plantas y dejar la instalación en buen estado.",
    image: "/trabajos/reparacion-timbre-montaje-apliques-escalera-gijon.webp",
    visible: true
  },
  {
    id: 11,
    title: "Montaje e instalación de 12 baldas IKEA",
    text: "Instalación de 12 baldas IKEA en una pared de Pladur, en una vivienda de Gijón, distribuidas en tres filas de cuatro unidades. Para adaptar la fijación al tipo de pared y a la carga prevista, se utilizaron tacos Fischer Duo adecuados para Pladur. Se niveló cada balda para conseguir una composición alineada y uniforme, respetando el diseño solicitado por el cliente.",
    image: "/trabajos/montaje-instalacion-12-baldas-ikea-gijon.webp",
    visible: true
  },
  {
    id: 12,
    title: "Reparación y reconstrucción de mueble de lavabo en Gijón",
    text: "Reparación de un mueble de lavabo que se había derrumbado y había perdido su estabilidad. Se reconstruyó la estructura dañada y se volvió a montar el conjunto con el lavabo, recuperando su funcionalidad y permitiendo seguir utilizando el mueble sin necesidad de sustituirlo por uno nuevo.",
    image: "/trabajos/reparacion-mueble-lavabo-antes-despues-gijon.webp",
    visible: true
  }
]

export default trabajos

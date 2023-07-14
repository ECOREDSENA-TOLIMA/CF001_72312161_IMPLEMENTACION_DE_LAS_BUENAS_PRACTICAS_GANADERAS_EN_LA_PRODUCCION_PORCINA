<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Buenas prácticas ganaderas en la producción porcina   
      
    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las Buenas Prácticas Ganaderas (BPG), en la producción porcina, son un conjunto de actividades que se aplican a lo largo de la producción primaria y permiten que la empresa porcina sea competitiva, organizada, sostenible económica y ambientalmente. Estas actividades se pueden aplicar a los diferentes tipos de producción porcina (carne y cría) y garantizan que se brinde al consumidor productos inocuos y de buena calidad. Para lograr el establecimiento de las BPG hay que tener registro de todas las actividades que se ejecutan en la producción como por ejemplo desparasitaciones, vacunaciones, suministro de alimentos, entre otros.  

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> las normas que se crearon para el establecimiento de las BPG buscan reducir el impacto negativo que tienen las prácticas pecuarias sobre el medio ambiente, minimizar los riesgos de contaminación fisicoquímicos y biológicos de los productos, mejorar el bienestar animal, la calidad de vida de los trabajadores pecuarios y brindar al consumidor un alimento inocuo.  

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1. Conceptos e importancia
      
    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La importancia de las BPG en la producción porcina radica en que cada día el mercado del cerdo se torna más exigente en cuanto a la producción y comercialización, razón por la cual los productores tienen la responsabilidad de cumplir la normatividad referente a calidad e inocuidad y de esta manera garantizan que el producto que llega al consumidor se encuentre libre de sustancias o elementos indeseables que puedan perjudicar la salud de estos. 
            br
            br
            p Además, las BPG se han convertido en una respuesta a la prevención de los diversos tipos de riesgos que se pueden presentar en la producción porcina, ya sean de origen físico, químico, biológico, o de tipo sanitario. De esta misma forma asegura que el manejo y producción porcina se lleve rigiéndose por los principios de bienestar animal, lo cual conlleva a que se tenga un proceso más eficiente y efectivo desde todo punto de vista y que además se cumpla con la normatividad sanitaria, de inocuidad y productividad establecida por la legislación colombiana y mundial, lo que hace más competitivo al sector primario dedicado a los productos de origen animal.

    p(data-aos="zoom-in").mt-5 Del mismo modo, este contexto de mercados cada vez es más exigente en cuanto a calidad e inocuidad en los alimentos, ya que exige que los productores mejoren su estatus sanitario para poder ser competitivos y mantenerse en el mercado al generar seguridad y tranquilidad al consumidor. Vale la pena recordar que dicha inocuidad se logra con la implementación de buenas prácticas ganaderas en la producción porcina; las cuales incluyen buenas prácticas en la alimentación animal, sanidad y manejo.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2. Fundamentos de inocuidad en la producción primaria pecuaria e IVC

    p(data-aos="zoom-in") El <b>Instituto Nacional de Vigilancia de Medicamentos y Alimentos</b>, Invima, será responsable de la operación del Sistema Oficial de Inspección, Vigilancia y Control de Carne, Productos Cárnicos Comestibles y Derivados Cárnicos, quien en función de esta responsabilidad se articulará con las otras autoridades sanitarias y ambientales para coordinar los mecanismos de integración de los diferentes programas y acciones del ámbito del sistema. En este proceso interactúan varios elementos y se pueden ver en el siguiente gráfico:
      
    img(src='@/assets/curso/temas/tema1/img3.svg').mt-5

    p(data-aos="zoom-in").mt-5 Las competencias de acuerdo con las disposiciones legales vigentes referidas a las acciones de inspección, vigilancia y control en el sistema oficial establecido en el presente capítulo serán:

    .row.justify-content-center(data-aos="fade-left").mt-5
      .col-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col.mb-4.mb-md-0
              p Las actividades de inspección, vigilancia y control de sanidad animal en la producción primaria, serán ejercidas por el Ministerio de Agricultura y Desarrollo Rural en cabeza del Instituto Colombiano Agropecuario, ICA. 

          .row
            .col.mb-4.mb-md-0
              p Las actividades de inspección, vigilancia y control que se realizan en las plantas de beneficio, desposte, desprese y derivados cárnicos serán ejercidas por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos, Invima.
              

          .row
            .col.mb-4.mb-md-0
              p Las actividades de inspección, vigilancia y control del transporte, almacenamiento y expendio de carne y productos cárnicos comestibles y derivados cárnicos destinados para el consumo humano, será competencia de las entidades territoriales de salud. 
          
          .row
            .col.mb-4.mb-md-0
              p Las funciones de inspección, vigilancia y control relacionadas con la gestión del medio ambiente y de los recursos naturales corresponden a la autoridad ambiental competente.
          
          .row
            .col.mb-4.mb-md-0
              p Las actividades de inspección, vigilancia y control de transporte de animales en pie, serán competencia del Ministerio de Transporte. 
          
    p(data-aos="zoom-in").mt-5 A continuación, se describen los programas de inspección, vigilancia y control que se manejan por parte de la autoridad sanitaria competente en cuanto a los productos de procedencia porcina.

    .tarjeta.p-4(style="background-color: #EBE1BF").mb-5(data-aos="fade-left").mt-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Insumos pecuarios (alimentos, biológicos y medicamentos)
            p Deben tener registro emitido por el Instituto Colombiano Agropecuario ICA, el cual establece en su normatividad que está prohibido el uso de promotores de crecimiento, nitrofuranos, cloranfenicol, violeta de genciana y dimetridazol en salud y producción animal. Además, este ente de control normatiza la venta de analgésicos, hormonas, antibióticos, anabólicos, entre otros con prescripción del médico veterinario. 

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Programas de sanidad porcícola
            p Están diseñados para la erradicación y control de las enfermedades porcinas de mayor importancia como las siguientes:
            p Peste Porcina Clásica (PPC): de acuerdo a la Ley 623 de 2000, en el año 2002 se inició el Programa de erradicación de la PPC estableciendo un constante proceso de vacunación a nivel nacional, con el objetivo de obtener el estatus de país libre. La Resolución No.100334 del 12 de julio de 2021, establece las siguientes zonas sanitarias de PPC en Colombia

          .col-md-4.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='')

          
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            p Enfermedad de Aujeszky: enfermedad infecciosa de tipo viral, causante de problemas respiratorios, reproductivos y del sistema nervioso. El ICA a través de la Resolución 091960 del 26 de febrero de 2021, declara como zona libre de la infección por el virus de la Enfermedad de Aujeszky a la siguiente lista

          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h3 Capacidad diagnóstica
            p A través del Convenio Marco de Cooperación Técnica suscrito entre el Instituto Colombiano Agropecuario y la Asociación Colombiana de Porcicultores – Fondo Nacional de la Porcicultura, se han implementado pruebas para el diagnóstico de las enfermedades endémicas y exóticas de importancia para el sector porcícola.
          .col-md-6.p-3
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')

    p(data-aos="zoom-in").mt-5 El diagnóstico es realizado por el ICA, a través del laboratorio nacional de diagnóstico veterinario - CEISA, donde hoy se tienen estandarizadas la mayoría de técnicas para atender el diagnóstico rutinario del sector. Sin embargo, es necesaria la implementación de nuevas técnicas de referencia y la descentralización del servicio diagnóstico a otros laboratorios oficiales o privados. Se ha identificado en cuanto a la capacidad diagnóstica la alta dependencia del ICA en recursos económicos y de personal provenientes del FNP.

    .row.justify-content-center.mt-5 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Respecto a la inocuidad de la carne de cerdo y sus productos, hay una capacidad diagnóstica limitada en el laboratorio nacional de referencia del Instituto Nacional de Vigilancia de Medicamentos y Alimentos- INVIMA y los laboratorios de las entidades territoriales de salud - ETS, para la realización de análisis rutinarios básicos. No hay cobertura oficial de análisis de alta complejidad por la ausencia de las técnicas para la detección de residuos de medicamentos veterinarios, plaguicidas, biológicos, aditivos, contaminantes y patógenos de la carne de cerdo y sus productos.

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> es necesario implementar sistemas de gestión de calidad en los laboratorios nacionales de referencia y la red de laboratorios para mejorar la confiabilidad del análisis y diagnóstico, y permitir la certificación internacional de las pruebas.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3. Normativa  

    p(data-aos="zoom-in") El Instituto Colombiano Agropecuario (ICA) expidió la Resolución No. 76509 del 25 de septiembre de 2020 la cual establece los requisitos para obtener la certificación en buenas prácticas ganaderas (BPG), en la producción porcícola y de esta manera, deroga y reemplaza la Resolución 2640 de 2007 que contenía las anteriores disposiciones al respecto.

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 <b>La Resolución No. 76509</b> describe los requisitos que deben de cumplir los predios dedicados a la producción primaria de porcinos para obtener la certificación en buenas prácticas ganaderas en la producción porcina a fin de <b>disminuir los riegos físicos, químicos y biológicos en la producción primaria en esta especie</b>. Las disposiciones contenidas en dicha resolución son aplicables a todas las personas naturales o jurídicas propietarias, poseedoras o tenedoras de predios productores de porcinos que deseen certificarse en buenas prácticas ganaderas en la producción porcina en el territorio nacional ya que no es obligatorio obtenerla Instituto Colombiano Agropecuario (2020).

    p(data-aos="zoom-in").mt-5 De igual manera, con la implementación de la <b>normativa sanitaria</b> se constituye un sistema de aseguramiento de calidad e inocuidad en la producción, que logra prevenir y controlar el ingreso de enfermedades a la <b>granja porcícola</b>, aumentar la eficiencia en los procesos productivos mediante la obtención de mejores ganancias por parte de los animales y finalmente <b>obtener un producto alimenticio inocuo y nutritivo que no constituye ningún riesgo para la salud del consumidor</b>. 
    p(data-aos="zoom-in") A continuación, se muestra la normativa de orden nacional vigente que regula y modifica la política nacional de sanidad e inocuidad para la cadena porcícola.

    .row.mt-5.justify-content-center
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Normatividad Buenas Prácticas Ganaderas En La Producción Porcina.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo</b>. Normatividad Buenas Prácticas Ganaderas En La Producción Porcina

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4. Beneficios        

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La resolución por la cual se establecen los requisitos para obtener la certificación en BPG estimula a todas las empresas pertenecientes al sector porcícola a implementar normas de prevención, bioseguridad, sanidad y trazabilidad para obtener productos inocuos logrando de esta manera un mayor control y manejo en todos sus procesos productivos. 
            br
            br
            p La certificación se presenta como una gran oportunidad económica ofreciendo un producto competitivo en el mercado, un producto de calidad con el cual se garantizan los procesos de manejo que se les brinda a los animales en granja en cada una de sus etapas productivas ofreciendo al producto un mayor valor agregado, protegiendo así la salud de los consumidores.

    .row.mt-5(data-aos="fade-right")
      .col
        .tarjeta-tema1.color-acento-contenido.p-4
          p <b>Nota:</b> la implementación de las BPG trae consigo beneficios, pues las ventajas que se obtienen se asimilan a un sistema de gestión de la calidad. Como resultados se logra optimizar la operación de la granja, reducir costos, racionalizar recursos, mejorar la inocuidad del producto final y favorecer el acceso a mercados locales e internacionales.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5. Criterios de cumplimiento

    p(data-aos="zoom-in") En Colombia la Resolución 76509 de 2020 establece los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la Producción Porcina; la lista de chequeo para los criterios de cumplimiento y referente normativo de las BPG en la producción porcina del Instituto Colombiano Agropecuario (ICA), es la herramienta necesaria para determinar el grado de cumplimiento de esta resolución a nivel productivo y se basa tres tipos de criterios. Esta reglamentación es muy importante ya que ayudará a la implementación de las BPG en la producción porcina en Colombia: 

    .row.mt-5.justify-content-center
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Forma-3-519-Lista-de-Chequeo-predios-productores-de-porcinos-con-destino-a-sacrificio.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo</b>. Forma-3-519-Lista-de-Chequeo-predios-productores-de-porcinos-con-destino-a-sacrificio” en donde se describen los ítems de certificación y se ilustran todos los pasos para cumplir los criterios y su referente normativo con los que se controla el cumplimiento de la Resolución 76509 de 2020
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

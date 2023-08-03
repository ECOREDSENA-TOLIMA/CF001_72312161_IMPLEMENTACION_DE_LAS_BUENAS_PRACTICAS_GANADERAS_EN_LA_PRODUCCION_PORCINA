<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad y salud en el trabajo      

    p(data-aos="zoom-in") La seguridad y salud en el trabajo es una actividad multidisciplinaria que a través de la promoción y prevención busca mejorar el bienestar de los trabajadores y evitar los accidentes en el ambiente laboral, para lograr esto se propone que se tenga en cuenta las condiciones de trabajo, así como la organización de este con el fin de reducir sustancialmente los factores de riesgo que puedan derivar en enfermedades o accidentes de tipo laboral.
    p(data-aos="zoom-in") La normativa colombiana en seguridad y salud en el trabajo está enmarcada en 14 leyes, decretos y resoluciones que deben implementarse en el cumplimiento de la salud laboral en Colombia. A continuación, encontrará la normatividad en seguridad y salud en el trabajo que se deben tener en cuenta en la matriz de requisitos legales.


    .tabla-b.color-acento-contenido.mt-5(data-aos="fade-left")
      .tabla-b__header
        h4.mb-0 14 leyes, decretos y resoluciones que deben implementarse en el cumplimiento de la salud laboral en Colombia
      table
        tr(style="height: 50px") 1. Ley 1010 2006 por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones laborales.
        tr(style="height: 50px") 2. Código Sustantivo del Trabajo. 
        tr(style="height: 50px") 3. 1951 regulación de Relaciones Laborales.
        tr(style="height: 50px") 4. Resolución 1401 2007 por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.
        tr(style="height: 50px") 5. Resolución 2346 2007 por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.
        tr(style="height: 50px") 6. Resolución 2646 2008 por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.
        tr(style="height: 50px") 7. Resolución 00000652 2012 por la cual se establece la conformación y funcionamiento del Comité de Convivencia Laboral en entidades públicas y empresas privadas.
        tr(style="height: 50px") 8. Resolución 0312 2019 por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Establece las fases de implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo.
        tr(style="height: 50px") 9. Decreto 1072 2015 Decreto Único Reglamentario del Sector Trabajo, se establecen los requisitos que son de obligatorio cumplimiento sin importar la clasificación de la empresa.
        tr(style="height: 50px") 10. Resolución 1409 2012 por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas.
        tr(style="height: 50px") 11. Decreto-Ley 1295 1994 por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.
        tr(style="height: 50px") 12. Resolución 1792 1990 por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.
        tr(style="height: 50px") 13. Resolución 2013 1986 por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.
        tr(style="height: 50px") 14. Resolución 2400 1979 por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Riesgos laborales

    .row.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El capital humano es fundamental en el funcionamiento de la empresa porcícola y es por esto que se deben garantizar buenas condiciones laborales que beneficien a los colaboradores y se vea reflejado en la productividad de la finca. Una lesión o una enfermedad laboral puede causar serios problemas económicos. Además, que también causa dificultades emocionales y físicas, afectando el desarrollo de un trabajo eficiente.

    p(data-aos="zoom-in").mt-5 Es recomendable que, si se quieren reducir los riesgos en las producciones porcinas, en la finca se debe hacer una valoración de los peligros potenciales y a partir de esta se deben plantear las medidas y acciones necesarias para su control. Lo anterior teniendo en cuenta que las personas que trabajan en las explotaciones porcinas están expuestas a varios tipos de riesgos que se muestran a continuación, con el fin de que todas las personas implicadas en esta actividad los tengan en cuenta y puedan disminuir el número de accidentes y así mejorar las condiciones de trabajo. 
    p(data-aos="zoom-in") Se invita a revisar la descripción de cada uno de los riesgos laborales:

    .tarjeta.p-4.mt-5(style="background-color: #EBE1BF").mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mecánico
            p Este tipo de riesgo pueden presentarse por accidentes relacionados con los equipos ya que, para realizar estas actividades, se hace uso de máquinas, herramientas o piezas, las cuales le pueden generar lesiones a quien las opere. También está relacionado con las instalaciones de las explotaciones porcícolas como por ejemplo caídas del trabajador desde su propia altura o resbalones.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img2.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Ergonómico
            p Los trabajadores de las explotaciones porcinas pueden sufrir lesiones por sobreesfuerzos por el manejo animales o de equipos (frecuencia de manejo o excesivo peso de estos), o por mantener una postura durante mucho tiempo. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img3.png', alt='')

          
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Biológico
            p Este riesgo se da sobre todo por el contacto y la manipulación, sin ninguna protección, de los fluidos y residuos, tanto de animales como de plantas. Se pueden presentar alergias, toxicidad secundaria a la exposición a material biológico, zoonosis, enfermedades relacionadas con virus, bacterias, hongos, entre otros contaminantes biológicos. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img4.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Locativo
            p Hace referencia a las condiciones físicas de los lugares de trabajo, como por ejemplo los corrales de los animales, los espacios donde se guardan insumos para alimentación o atención de los animales, pasillos, salas de monta, entre otros, los cuales pueden generar caídas a nivel o a desnivel.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img5.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Físico
            p Se presenta por factores de naturaleza física, los cuales entran en contacto con el trabajador, produciendo efectos nocivos para la salud debido a la intensidad y el tiempo expuesto durante las jornadas de trabajo, tales como el ruido, las vibraciones y las temperaturas extremas.

          .col-md-6
            figure 
              img(src='@/assets/curso/temas/tema5/img6.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Eléctrico
            p Este tipo de riesgo se encuentra en las producciones que tienen cercas eléctricas y/o conexiones para maquinaria o herramientas. Este se puede generar por contacto directo (paso de la corriente por el cuerpo humano). 

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img7.png', alt='')
          
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Psicosocial
            p Este tipo de riesgo se refiere a aquellos factores de las condiciones de trabajo que afectan a la salud de las personas a través de mecanismos psicológicos y fisiológicos a los que se llama estrés, tales como: la carga laboral, conductas violentas en el trabajo, monotonía y autonomía.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img8.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Público
            p Aquellos que se viven en los espacios públicos y que ponen en riesgo la integridad física e incluso la vida de las personas. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img9.png', alt='')

    p(data-aos="zoom-in").mt-5 Los niveles de riesgo se pueden valorar de acuerdo con su posibilidad y a sus consecuencias y sirven como base para determinar si se deben realizar nuevos controles o se deben mejorar los que ya existen en la empresa. Así como también establecer los tiempos de acciones. 

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Elementos de protección personal requeridos

    p(data-aos="zoom-in") Los riesgos pueden ser minimizados de manera importante con el uso correcto de los Elementos de Protección Personal (EPP) y de esta forma garantizar protección al talento humano y mejoramiento de la productividad en la empresa. Estos EPP deben ser revisados por lo menos una vez cada mes con el fin de verificar su buen funcionamiento. A continuación, encontrará un cuadro que contiene la información de los Elementos de Protección Personal (EPP) que se deben utilizar en el desarrollo de las labores en la producción porcina:

    SlyderB.mb-5.mt-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Guantes de hule, caucho o plástico',
        texto:
          'Son diseñados para la protección de las manos, en las diferentes labores que se desempeñan dentro de los corrales, tales como limpieza y desinfección. Además, reducen el riesgo de contaminación al evitar el contacto directo con la  piel.',
        imagen: require('@/assets/curso/temas/tema5/img10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Guantes de carnaza',
        texto:
          'Son elementos diseñados para proteger de abrasiones, cortes, rozaduras o golpes, además de mejorar el agarre; en las granjas se utilizan para realizar diversas labores como el manejo de los animales y la adecuación de los corrales.',
        imagen: require('@/assets/curso/temas/tema5/img11.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Botas de caucho de caña alta',
        texto:
          'Las botas deben ser de caña alta, para facilitar los trabajos en condiciones húmedas como el lavado y desinfección de la sala de ordeño, además que permitan la rápida y efectiva limpieza y desinfección de las mismas, deben tener suelas antideslizantes para evitar caídas y accidentes.',
        imagen: require('@/assets/curso/temas/tema5/img12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Guante de nitrilo reutilizable ',
        texto:
          'Diseñados específicamente para el procesado y la manipulación de alimentos.',
        imagen: require('@/assets/curso/temas/tema5/img13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gafas de seguridad',
        texto:
          'Es un elemento que protege los ojos de la proyección de partículas sólidas o líquidas en el manejo de sustancias, químicas, biológicas o corrosivas, están elaboradas en policarbonato, con antiempañante.',
        imagen: require('@/assets/curso/temas/tema5/img14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tapones para los oídos y orejeras',
        texto:
          'Utilizados para proteger de los elevados niveles de ruido que emiten algunas máquinas como las de ordeño o las motosierras o algunos animales, como los cerdos estabulados.',
        imagen: require('@/assets/curso/temas/tema5/img15.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Casco de seguridad',
        texto:
          'Son elementos que permiten proteger en la parte de la cabeza al personal para evitar golpes por caídas de objetos, resbalones, contacto con cables o líneas eléctricas. ',
        imagen: require('@/assets/curso/temas/tema5/img16.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Respirador con protección para material particulado',
        texto:
          'Este respirador con filtro mecánico para partículas de menos de 10 micras, ayuda para las tareas de mezcla, pulverización o aplicación de productos químicos, al usar disolventes y al cortar metales o madera. El respirador se conoce comúnmente como el "N-95" cubre la cara y filtra el aire, suelen ser desechables.',
        imagen: require('@/assets/curso/temas/tema5/img17.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Respirador autónomo',
        texto:
          'Este tipo de respiradores se utilizan para trabajar en espacios reducidos, como silos.',
        imagen: require('@/assets/curso/temas/tema5/img18.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Arneses y líneas de vida',
        texto:
          'Usados para trabajar en altura, por ejemplo, al reparar silos de alimentos.',
        imagen: require('@/assets/curso/temas/tema5/img19.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Overol antifluidos, lavable, impermeable',
        texto:
          'Este elemento está diseñado para proteger el cuerpo del operario de diferentes sustancias ya sean químicas, biológicas o físicas, así como de material sólido.',
        imagen: require('@/assets/curso/temas/tema5/img20.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ropa que puede proteger',
        texto:
          'Utilizar prendas de vestir y sombreros de colores claros, cuando el tiempo sea caluroso y soleado, para reflejar el calor y resguardar del resplandor excesivo; ropa de abrigo, para trabajar en ambientes fríos; overoles de trabajo impermeables, para trabajar bajo la lluvia.',
        imagen: require('@/assets/curso/temas/tema5/img21.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Delantal plástico',
        texto:
          'Se utiliza en las labores de contacto con fluidos de los animales como partos o palpaciones.',
        imagen: require('@/assets/curso/temas/tema5/img22.png'),
      },
    ],
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

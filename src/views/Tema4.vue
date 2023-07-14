<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Recursos para la implementación de Buenas Prácticas Ganaderas (BPG) 

    .row.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La implementación de BPG en la producción porcina, además de asegurar que los productos producidos no afecten la salud del consumidor, deben garantizar que su producción no afecte negativamente al medio ambiente. De igual manera, deben garantizar la eficiencia y productividad de la empresa porcina manejando el uso racional de los recursos tanto físicos, económicos y de personal. Un recurso es una herramienta o elemento que se utiliza para conseguir los objetivos propuestos en la empresa o para desarrollar un proceso productivo. Son parte fundamental de los proyectos y generalmente cuentan con tres características principales: que posean una utilidad, que estén disponibles y que se consuman o se agoten en su uso (insumos). Los recursos pueden clasificarse en:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mt-5(data-aos="fade-left")
      .row.align-items-center(titulo="Recursos naturales")
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema4/img2.svg', alt='')
        .col-9.mb-4.mb-md-0
          p Estos hacen referencia a los bienes o servicios que brinda la naturaleza sin la intervención del hombre y permiten el desarrollo o subsistencia de los seres vivos como el oxígeno, la luz solar y el agua, entre otros. De acuerdo con su duración en el tiempo se pueden dividir en:
          p <b>Renovables:</b> se pueden recuperar por sí mismos a través de un ciclo biológico como la luz solar y el viento.
          p <b>No renovables:</b> su tasa de extracción es mayor la de su renovación, razón por la cual el recurso se va agotando con el tiempo como pasa con el petróleo, gas natural o los minerales.

      .row(titulo="Recursos en el sistema productivo")
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema4/img3.svg', alt='')
        .col-md-9.mb-4.mb-md-0
          p Son los medios necesarios para el desarrollo del proceso productivo y pueden clasificarse en:
          p <b>Recursos humanos:</b> se refiere al equipo de colaboradores que se encuentren vinculados con la empresa.
          p <b>Recursos materiales:</b> hace referencia a los bienes materiales que se usan para el desarrollo del proceso productivo como el espacio físico, insumos, maquinaria, herramientas, entre otros.
      
    p(data-aos="zoom-in").mt-5 Otra manera en que dichos recursos pueden ser categorizados de acuerdo a la gestión de proyectos es la siguiente:

    .row.justify-content-center
      .col-6
        ImagenInfografica.color-primario.mt-5(data-aos="fade-left")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='')

          .tarjeta.color-acento-contenido.p-3(x="13.5%" y="60.5%" numero="+")
            .h5.mb-2 1. Recursos físicos
            p Son la propiedad tangible, e incluyen instalaciones, oficinas, bodegas, terrenos, maquinaria, equipos y herramientas. Algunos recursos (por ejemplo, instalaciones de fabricación y centros de distribución) reflejan grandes inversiones que sólo se producen cada 20 años o más. Otros, como herramientas desechables, pueden requerir poca inversión y pueden ser cambiados con frecuencia.

          .tarjeta.color-acento-botones.p-3(x="25%" y="22%" numero="+")
            .h5.mb-2 2. Recursos humanos
            p Son los empleados que componen la fuerza de trabajo de las operaciones. Los empleados individuales difieren en sus habilidades, el conocimiento, la formación, la capacidad, flexibilidad y condiciones de empleo. También difieren en el papel que desempeñan.

          .tarjeta.color-acento-contenido.p-3(x="50%" y="7%" numero="+")
            .h5.mb-2 3. Recursos basados en el conocimiento de la función de operaciones
            p Son la propiedad Intelectual, el software y los métodos. Hacen referencia el conocimiento colectivo residente en la organización, no por los empleados individuales. 

          .tarjeta.color-acento-contenido.p-3(x="75%" y="22%" numero="+")
            .h5.mb-2 4. Ecosistema De recursos
            p Son las relaciones con los proveedores, distribuidores, clientes y socios, que constituyen colectivamente el ecosistema de negocios de la empresa. 

          .tarjeta.color-acento-botones.p-3(x="86.5%" y="60.5%" numero="+")
            .h5.mb-2 3. 5. Recursos financieros
            p Son los tipos de fondos disponibles, incluyendo dinero en efectivo, generado por las operaciones, y los fondos disponibles de los mercados financieros. Estos recursos generalmente no son considerados como parte de las operaciones.

    
</template>

<script>
export default {
  name: 'Tema4',
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

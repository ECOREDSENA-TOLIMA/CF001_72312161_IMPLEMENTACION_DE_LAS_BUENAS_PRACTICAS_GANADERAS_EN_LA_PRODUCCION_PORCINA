<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo, <b>Conceptualización en BPG en la producción porcina</b>, en donde se comprenden los conceptos de las diferentes actividades, procesos, procedimientos, así como la normativa para la implantación de las BPG en la producción porcina, las cuales permitirán entender de manera integral su aplicación dentro de la unidad pecuaria.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis. Conceptualización en BPG en la producción porcina contempla la implementación de las Buenas Prácticas Ganaderas para el sector porcícola, la unidad productiva porcina, los recursos para la implementación de BPG, lo relacionado con seguridad y salud en el trabajo necesario para garantizar el bienestar del equipo de trabajo, y las BPG.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

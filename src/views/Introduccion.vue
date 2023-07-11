<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right").mb-5 La implementación de las buenas prácticas ganaderas es uno de los factores que garantiza en la producción primaria la trazabilidad, calidad e inocuidad en los productos de origen animal y sus derivados, por lo cual la normatividad establecida busca que en los predios pecuarios se establezcan los diversos procesos, procedimientos, programas y planes que conlleven a la aplicación de las buenas prácticas, siendo esta la razón por la cual es fundamental que en el campo pecuario  los profesionales se encuentren capacitados en la Implementación de las buenas prácticas ganaderas en producción porcina. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y para comenzar, se invita a explorar el video que se presenta a continuación: 
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Leyenda del video
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

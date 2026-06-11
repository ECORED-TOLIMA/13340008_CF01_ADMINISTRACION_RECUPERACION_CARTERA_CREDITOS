<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p La cartera de créditos es el principal activo generador de ingresos de las entidades del sector financiero colombiano y, al mismo tiempo, su mayor fuente de riesgo operativo y crediticio. Para bancos, compañías de financiamiento, cooperativas financieras y demás establecimientos de crédito vigilados por la Superintendencia Financiera de Colombia, la calidad de la cartera determina la solidez patrimonial de la institución y su capacidad para continuar prestando servicios financieros a la comunidad. Comprender la gestión integral de este activo no es una competencia técnica secundaria, sino una habilidad central para cualquier profesional del sector financiero colombiano.
                p.p-3.bg-15.bg-r8 El presente componente formativo tiene como propósito desarrollar en el aprendiz las competencias conceptuales, procedimentales y actitudinales necesarias para identificar los elementos de la administración y recuperación de la cartera y reconocer los procesos de cobranza y manejo del cliente. Para ello, integra el estudio de los fundamentos de la administración aplicados al contexto financiero, el marco normativo y ético que rige la gestión de cartera, los procesos de elaboración y ejecución de planes de recuperación, las competencias de servicio al cliente y negociación, y las técnicas diferenciadas de cobranza según la etapa de mora de cada obligación. Este recorrido formativo cierra con el análisis de casos prácticos que trasladan los conceptos al entorno productivo real.


              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/intro/1.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/intro/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 90px').m-auto
                  
                  .col
                    p.ml-text Cabe destacar que la gestión de cartera exige una actuación ética, clara y responsable, debido a que el gestor maneja información financiera sensible y se comunica con personas que pueden enfrentar dificultades de pago. Por esta razón, la recuperación de las obligaciones debe realizarse con respeto, transparencia y cumplimiento de la normativa vigente. Asimismo, este equilibrio entre la efectividad del recaudo y la protección del consumidor financiero fortalece el desempeño profesional y promueve una gestión coherente con las políticas institucionales y las buenas prácticas del sector financiero.
                p Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la gestión de cartera, se recomienda acceder al recurso audiovisual que acompaña esta sección.

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/7iTJKd85dyc?si=GT8tZDDIqIPs-kiS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
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

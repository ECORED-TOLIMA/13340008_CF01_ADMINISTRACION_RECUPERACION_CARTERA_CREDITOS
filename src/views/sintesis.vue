<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión y recuperación de cartera en entidades financieras integra fundamentos administrativos, éticos y normativos que orientan el manejo responsable de los créditos en el sector financiero colombiano. En este sentido, se abordan la administración de cartera, la clasificación del riesgo, la rotación de cartera, la política institucional y los principios éticos que regulan la relación con el deudor.
    | Asimismo, se estudian los planes de recuperación, el diagnóstico de cartera, las estrategias de cobranza, la comunicación efectiva y las técnicas de negociación según la etapa de mora. De esta forma, se fortalece la capacidad para analizar información, tomar decisiones responsables y proponer acciones de mejora orientadas a la recuperación efectiva de las obligaciones y a la protección del consumidor financiero. A continuación, el mapa conceptual presenta la relación entre los ejes temáticos del componente.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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

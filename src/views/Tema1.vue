<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Administración básica de cartera

    .bloque-texto-g.bg-15.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La administración es una disciplina científica y práctica que integra principios, técnicas y herramientas orientadas a planificar, organizar, dirigir y controlar los recursos de una organización con el propósito de alcanzar sus objetivos de manera eficiente y eficaz. En el contexto de las entidades financieras colombianas, esta disciplina adquiere una relevancia especial porque los recursos gestionados son activos de alto valor estratégico y elevado riesgo sistémico. La cartera de créditos, activo de mayor peso en la estructura financiera de un banco comercial, exige una administración rigurosa, disciplinada y fundamentada en conocimiento técnico especializado.


    .row.align-items-start.mt-4
      .col
        p Comprender los fundamentos de la administración es, por tanto, el punto de partida obligatorio para quien aspira a desempeñarse competentemente en la gestión de cartera. La aplicación de los principios administrativos a este campo no es una transposición automática de conceptos genéricos: exige su reinterpretación a la luz de las características particulares del negocio crediticio, la regulación del sector financiero y las dinámicas del mercado en que opera cada institución.
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      p A continuación, se presentan cuatro capacidades que distinguen al gestor de cartera que comprende los fundamentos administrativos de quienes actúan solo por rutina operativa:
      

    //Tarjetas conectadas
    .tarjeta--container.row
      //Tarjeta 1
      .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/3.svg', style='width: 150px').m-auto 

        p.text-center #[b Anticipación al deterioro]

        p El gestor con formación administrativa identifica las señales de alerta en el portafolio antes de que la mora se materialice, lo que le permite intervenir oportunamente y reducir el costo de recuperación para la entidad.

      //Tarjeta 2
      .col-md.tarjeta.bg-16.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/4.svg', style='width: 150px').m-auto 
        p.text-center #[b Diseño de estrategias diferenciadas]

        p La comprensión de los principios de planeación y segmentación permite diseñar estrategias de recuperación adaptadas al perfil de cada grupo de deudores.

      //Tarjeta 3
      .col-md.tarjeta.bg-7.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/5.svg', style='width: 150px').m-auto 

        p.text-center #[b Contribución a la sostenibilidad]

        p El gestor que entiende el ciclo administrativo de la cartera actúa como agente activo de la sostenibilidad financiera de su organización, no solo como ejecutor de tareas de cobro.

      //Tarjeta 4
      .col-md.tarjeta.bg-18.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/6.svg', style='width: 150px').m-auto 

        p.text-center #[b Toma de decisiones fundamentadas]

        p El conocimiento de los indicadores financieros y las funciones administrativas permite sustentar las decisiones en información objetiva, criterios técnicos y parámetros normativos, y no en la intuición o la costumbre.

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/7.svg', style='width: 100px').m-auto
      
      .col
        p El desarrollo de estas capacidades exige comprender, en primer lugar, qué significa administrar en el contexto específico de las entidades financieras colombianas y de qué manera los principios clásicos de la administración se reinterpretan a la luz del negocio crediticio. La administración en el sector financiero no es un concepto teórico abstracto, es el fundamento técnico que orienta cada decisión que toma el gestor de cartera en su trabajo cotidiano.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Administración en el sector financiero

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p La administración en el contexto financiero parte de los mismos principios que orientan cualquier organización, pero los aplica a un activo de naturaleza especial, el dinero prestado a terceros. En las entidades del sector financiero colombiano, administrar la cartera de créditos significa garantizar que los recursos prestados regresen a la institución en los plazos y condiciones acordados, mediante procesos planificados, equipos organizados y herramientas tecnológicas que permitan monitorear en tiempo real el comportamiento de cada deudor.
                .row.align-items-start.mt-4.bg-15.bg-r8.p-3
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down").mt-4
                      img(src='@/assets/curso/tema1/8.svg', style='width: 100px').m-auto
                  
                  .col.mb-0
                    p La administración se define como el proceso mediante el cual se coordinan los recursos humanos, financieros, tecnológicos y de información de una organización para alcanzar metas específicas de manera eficiente y eficaz. Según Chiavenato (2017), administrar es el proceso de planear, organizar, dirigir y controlar el uso de los recursos organizacionales para alcanzar determinados objetivos. En las instituciones financieras, esta definición se aplica de manera directa a la gestión de la cartera de créditos, donde cada función administrativa tiene una traducción operativa concreta en el trabajo diario del gestor.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/9.svg', alt='', class="w-100 h-100 object-fit-cover")

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-19(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/10.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                p En las instituciones financieras, la administración de la cartera implica la definición de políticas claras para el otorgamiento, seguimiento y recuperación de créditos, la asignación estratégica de recursos humanos y tecnológicos a los procesos de cobranza, y la implementación de sistemas de información que permitan monitorear el comportamiento de los deudores. Estas políticas deben estar alineadas con las disposiciones de la Superintendencia Financiera de Colombia, en particular las contenidas en la Circular Básica Contable y Financiera, Capítulo II, sobre la gestión del riesgo crediticio.
 
    p.mt-3 La calidad de la administración de cartera se mide a través de dos dimensiones complementarias que determinan si el proceso de cobranza es no solo efectivo en resultados, sino también eficiente en el uso de los recursos disponibles. A continuación, se describen estas dos dimensiones con su expresión concreta en los indicadores que las entidades financieras monitorean permanentemente:

    //Tarjetas conectadas
    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row
          //Tarjeta izquierda
          .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
            .row.justify-content-center.mb-4
              .col-6.d-flex.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/11.svg', style='width: 150px').m-auto 

            p.text-center #[b Eficiencia]

            p Capacidad de recuperar los recursos prestados al menor costo posible, optimizando el tiempo y los recursos del equipo de cobranza en cada gestión realizada. Una gestión eficiente evita duplicar esfuerzos, prioriza los casos de mayor impacto y utiliza los canales de contacto más adecuados para cada perfil del deudor, reduciendo el costo unitario de recuperación por obligación gestionada.

          //Tarjeta derecha
          .col-md.tarjeta.bg-19.p-4.p-lg-5
            .row.justify-content-center.mb-4
              .col-6.d-flex.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/12.svg', style='width: 150px').m-auto 

            p.text-center #[b Eficacia]

            p Logro de los indicadores de calidad definidos por la institución para el período de gestión, índice de cartera vencida objetivo, tasa de recuperación sobre cartera deteriorada, porcentaje de acuerdos de pago cumplidos y reducción del nivel de provisiones. Una gestión eficaz alcanza o supera las metas establecidas en el plan de recuperación, independientemente del costo en que incurra para lograrlo.

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")

              .col-lg
                .row.align-items-start.mt-4
                  p La eficiencia y la eficacia son complementarias y no excluyentes, una entidad puede gestionar con bajos costos eficiente, sin alcanzar las metas de recuperación ineficaz, o puede superar sus metas eficaces, incurriendo en costos de cobranza que no son sostenibles para el área. La combinación equilibrada de ambas dimensiones es lo que define a una institución financiera con procesos de crédito maduros y un perfil de riesgo controlado.

                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 90px').m-auto
                  
                  .col
                    p.ml-text La historia del sistema financiero colombiano ofrece lecciones concretas sobre las consecuencias de administrar deficientemente la cartera de créditos. A continuación, se presentan tres episodios y reformas que evidencian por qué la gestión rigurosa del riesgo crediticio es una obligación técnica y normativa, y no una práctica opcional:
              
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/13.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              
    TabsC.color-acento-contenido.mt-4
      //- Pestaña 1
      .py-3.py-md-4.bg-base6(titulo="La crisis financiera de los años noventa")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='Imagen ITS').m-auto

          .col-md-8
            p.mb-4 A finales de esa década, el deterioro masivo de la cartera de créditos llevó a la liquidación de múltiples instituciones financieras colombianas. La causa principal fue la ausencia de políticas rigurosas de seguimiento y recuperación, lo que permitió que el riesgo crediticio se acumulara sin control hasta comprometer la viabilidad patrimonial de las entidades afectadas.
      
      //-Pestaña 2
      .py-3.py-md-4.bg-base6(titulo="Las reformas regulatorias posteriores a la crisis")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/14.png', alt='Imagen Hepatitis B').m-auto

          .col-md-8
            p.mb-4 Como respuesta al colapso de varias instituciones, la Superintendencia Financiera de Colombia introdujo reformas que obligaron a las entidades vigiladas a implementar sistemas formales de administración del riesgo crediticio. Estas reformas transformaron la gestión de cartera de una práctica informal en un proceso técnico, documentado y sujeto a supervisión permanente.

      //-Pestaña 3
      .py-3.py-md-4.bg-base6(titulo="El Sistema de Administración del Riesgo Crediticio (SARC)")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/16.png', alt='Imagen VIH').m-auto

          .col-md-8
            p.mb-4 EComo resultado de las reformas, todas las entidades vigiladas deben contar con un SARC que les permita medir, monitorear y controlar su exposición al riesgo de manera sistemática. Este sistema obliga al gestor de cartera a actuar con criterios técnicos definidos, registrar cada gestión con trazabilidad y reportar periódicamente el estado del portafolio a los organismos de control.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          p Estos tres referentes históricos y normativos demuestran que la administración de cartera en Colombia no es el resultado de buenas intenciones individuales, es el producto de un marco regulatorio construido a partir de crisis reales, cuyas lecciones siguen vigentes en cada decisión que toma el gestor de cartera en su trabajo cotidiano.

          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/17.svg', style='width: 100px').m-auto
          
          .col
            p Comprender el origen normativo de la administración de cartera en Colombia permite valorar por qué cada entidad financiera estructura internamente sus áreas y roles de manera específica. Esa estructura organizacional no es arbitraria, responde a lecciones aprendidas del sistema financiero y a las exigencias regulatorias que hoy rigen la gestión del riesgo crediticio en todas las instituciones vigiladas por la Superintendencia Financiera de Colombia.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Entidades de crédito en Colombia

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p Las entidades de crédito en Colombia conforman un sistema financiero diverso, regulado y supervisado por la Superintendencia Financiera de Colombia. Bancos comerciales, compañías de financiamiento, corporaciones financieras, cooperativas financieras y organismos cooperativos de grado superior comparten un elemento en común, todas administran recursos del público y deben responder por la calidad de su cartera de créditos ante los organismos de control. Conocer los tipos de entidades que integran este sistema es indispensable para que el gestor comprenda el contexto institucional en el que desarrolla su labor.

                p.p-3.bg-16.bg-r8 Cada tipo de entidad tiene características propias que determinan el perfil de sus deudores, el volumen de su cartera y las estrategias de cobranza más adecuadas para su segmento de negocio. Un banco comercial de cobertura nacional administra portafolios de millones de obligaciones con perfiles de deudores muy diversos, mientras que una cooperativa financiera de carácter regional atiende a un segmento más homogéneo de asociados con características económicas similares. Esta diversidad exige que el gestor adapte su conocimiento técnico al tipo de institución en la que se desempeña y al perfil específico de los deudores que administra.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/18.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-5.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema1/19.png', alt='', style="width: 100%").m-auto
          .col-lg-7
            LineaTiempoD.color-primario.linea-bold
              //- Primer paso
              .row(numero="1" titulo="Bancos comerciales")
                p Son las entidades de mayor tamaño y cobertura del sistema financiero colombiano. Captan recursos del público mediante depósitos y los colocan en créditos de consumo, comerciales, hipotecarios y microcrédito. Su cartera es la más diversificada en términos de segmentos, montos y perfiles de deudores, lo que exige procesos de gestión altamente estructurados y apoyados en tecnología especializada.

              //- Segundo paso
              .row(numero="2" titulo="Compañías de financiamiento")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p Se especializan en la financiación de bienes de consumo durable, vehículos y operaciones de leasing. Su cartera está concentrada en créditos de consumo y comerciales de mediano plazo, con deudores predominantemente del sector empresarial y personas naturales con capacidad de endeudamiento demostrada.


              //- Tercer paso
              .row(numero="3" titulo="Corporaciones financieras")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p Orientan su actividad hacia la financiación de proyectos de inversión empresarial de mediano y largo plazo. Su cartera es predominantemente comercial, con montos elevados y deudores del sector productivo que requieren análisis de riesgo especializado y estrategias de seguimiento diferenciadas de las que se aplican en el crédito de consumo masivo.
                      

              //- Cuarto paso
              .row(numero="4" titulo="Cooperativas financieras")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p Atienden exclusivamente a sus asociados y operan bajo principios de solidaridad y ayuda mutua. Su cartera está concentrada en créditos de consumo y microcrédito, con deudores que pertenecen a comunidades específicas. La proximidad con el asociado facilita el seguimiento preventivo, pero también exige del gestor una mayor sensibilidad en el manejo de las relaciones durante el proceso de cobranza.
                      

              //- Quinto paso
              .row(numero="5" titulo="Organismos cooperativos")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p Agrupan a varias cooperativas y les prestan servicios financieros especializados. Su cartera incluye créditos a las cooperativas asociadas y, en algunos casos, a sus asociados directos. La gestión de cartera en este tipo de entidades combina criterios financieros con los valores cooperativos que rigen sus operaciones.
                      
    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      .col
        p El conocimiento de los tipos de entidades de crédito permite al gestor identificar en qué contexto institucional se desempeña y qué características específicas tiene la cartera que administra. Sin embargo, independientemente del tipo de entidad, todas comparten una estructura organizacional interna que distribuye las responsabilidades de gestión entre diferentes áreas y actores. En la siguiente tabla se presentan los principales actores institucionales que intervienen en el proceso de gestión de cartera de una entidad financiera colombiana, con su función específica y su relación con el proceso de recuperación.

    .row.justify-content-center
      .col-lg-auto
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 1.
              span Actores institucionales en la gestión de cartera de una entidad financiera colombiana

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FF984A")
                  tr
                    th Área o cargo
                    th Función principal
                    th Aporte a la recuperación
                tbody
                  tr(style="background-color: #F6F6F6")
                    th.text-start Junta directiva.
                    td.text-start Define las políticas de riesgo, los límites de crédito y los objetivos de cartera.
                    td.text-start Orienta las decisiones estratégicas del proceso.
                  tr
                    th.text-start Gerencia de riesgo crediticio.
                    td.text-start Diseña el Sistema de Administración del Riesgo Crediticio (SARC) y los criterios de calificación.
                    td.text-start Define parámetros para clasificar la cartera y calcular provisiones.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Área de cartera.
                    td.text-start Administra la cartera vigente y realiza seguimiento preventivo a los créditos.
                    td.text-start Ayuda a evitar el deterioro temprano de las obligaciones.
                  tr
                    th.text-start Área de cobranza.
                    td.text-start Gestiona los créditos en mora mediante acciones extrajudiciales o jurídicas.
                    td.text-start Ejecuta las estrategias de recuperación y recaudo.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Área de servicio al cliente.
                    td.text-start Atiende inquietudes, orienta al deudor y apoya la negociación de acuerdos.
                    td.text-start Favorece la comunicación y la búsqueda de soluciones.
                  tr
                    th.text-start Área jurídica.
                    td.text-start Adelanta procesos legales cuando se agotan las gestiones extrajudiciales.
                    td.text-start Representa a la entidad en procesos de cobro judicial.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Tecnología e información.
                    td.text-start Administra los sistemas de gestión de cartera y garantiza la calidad de los datos.
                    td.text-start Facilita el seguimiento, la priorización y el registro de gestiones.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p La gestión de cartera es una responsabilidad compartida. Cada área de la entidad cumple un rol específico, la alta dirección define el marco estratégico, las áreas operativas ejecutan las acciones de cobranza y las áreas de soporte garantizan la información y el respaldo jurídico necesarios para que el proceso funcione con eficiencia y coherencia.

                .cajon.color1.p-4
                  p Una vez identificados los actores que intervienen en la gestión de cartera, es necesario comprender cómo se organiza su trabajo mediante las funciones administrativas. Estas funciones permiten planear, organizar, dirigir y controlar las acciones necesarias para administrar y recuperar las obligaciones crediticias.
                
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/20.svg', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Funciones administrativas de cartera

    .row.align-items-center.justify-content-center
      p El proceso administrativo aplicado a la gestión de cartera no es un conjunto de tareas aisladas, es un ciclo continuo que se repite en cada período de gestión y permite a la organización ajustar sus estrategias en función de los resultados obtenidos y las condiciones cambiantes del entorno. Comprender este ciclo es fundamental para que el gestor entienda la lógica que subyace a cada tarea que realiza en su trabajo cotidiano y pueda tomar decisiones con mayor intencionalidad y criterio técnico.
      
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/21.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 90px').m-auto
                  
                  .col
                    p.ml-text Planear, organizar, dirigir y controlar son las cuatro funciones que estructuran ese ciclo. Cada una depende de la anterior y alimenta a la siguiente, una planeación rigurosa hace posible una organización efectiva; una organización efectiva facilita la dirección del equipo; y una dirección sólida produce los resultados que el control evalúa para mejorar la planeación del período siguiente. 
                  
                  .row
                    .col-lg-12
                      // Contenedor principal centrado
                      .bg-15.p-3.align-items-center.text-center
                        // Imagen centrada
                        figure.mb-3.img-center
                          img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
                        
                        b.mb-0 En la gestión de cartera, planear sin controlar es improvisar; controlar sin planear es reaccionar. Solo la articulación de las cuatro funciones convierte la cobranza en un proceso profesional y sostenible.

      p.mt-3 Cada función tiene un propósito específico y un impacto directo en los resultados de recuperación. Su descripción y aplicación en la gestión de cartera se presentan a continuación:

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Planeación")
              p La articulación con el Instituto Nacional de Medicina Legal y Ciencias Forenses (INMLCF) debe desarrollarse bajo criterios de oportunidad, claridad de competencias y respeto por la autonomía de la víctima.
              
              p Ejemplo: el jefe de cartera detecta que el 65 % de la mora se concentra en microcrédito, asigna gestores especializados y programa visitas domiciliarias para la primera semana del mes.
              
            //-2da pestaña  
            .row(titulo="Organización")
              p Implica distribuir la cartera entre los gestores según su perfil, garantizar las herramientas tecnológicas y asegurar los recursos logísticos para ejecutar el plan.

              p Ejemplo: el jefe asigna los créditos con mora superior a 90 días a los gestores más experimentados y verifica que todos tienen acceso al sistema de cartera antes de iniciar las visitas.

            //-3ra pestaña
            .row(titulo="Dirección")
              p Se refiere a orientar al equipo, acompañar negociaciones complejas y tomar decisiones que superan las facultades del gestor, como reestructuraciones o castigos de cartera.

              p Ejemplo: ante un deudor con 120 días de mora, el jefe acompaña la visita, autoriza una reestructuración con período de gracia y orienta al gestor para aplicar ese criterio en casos similares.

            //-4ra pestaña
            .row(titulo="Control")
              p Corresponde al seguimiento de los indicadores de cartera vencida, tasa de recuperación, acuerdos cumplidos, para identificar desviaciones frente a los objetivos y aplicar acciones correctivas oportunamente.

              p Ejemplo: al cierre de la segunda semana, el jefe detecta que solo se recuperó el 18 % de la meta, identifica 28 deudores con datos desactualizados y activa las visitas domiciliarias de inmediato.

    p Las cuatro funciones conforman un sistema que se retroalimenta de manera permanente. El resultado del control en un período se convierte en el insumo del diagnóstico para la planeación del siguiente, lo que convierte la gestión de cartera en un proceso de mejora continua. Comprender esta lógica le permite al gestor actuar con mayor claridad en cada tarea que realiza y contribuir activamente al mejoramiento de los resultados de su equipo.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-7(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/23.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                p Conocer las funciones del proceso administrativo y su aplicación en la gestión de cartera prepara al aprendiz para comprender el indicador financiero que sintetiza el resultado de ese proceso en cada período, la rotación de cartera, que refleja en un solo valor la eficiencia con que la entidad convierte sus créditos otorgados en efectivo.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Rotación de cartera
    

    .row.align-items-center.justify-content-center
      p La rotación de cartera es el indicador financiero que mide la velocidad con la que una entidad convierte sus créditos otorgados en efectivo. Una alta rotación indica que los deudores cumplen oportunamente con sus obligaciones, lo que garantiza disponibilidad de recursos para nuevas operaciones crediticias, reduce el costo de provisiones y mejora los indicadores de rentabilidad institucional. Este indicador no es solo una cifra contable, es el reflejo cuantitativo de la calidad del trabajo que realiza el equipo de gestión de cartera en cada período.
            
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 90px').m-auto
                  
                  .col
                    p.ml-text Para las entidades financieras, la cartera de créditos es su principal activo generador de ingresos, los intereses, comisiones y otros cargos constituyen la fuente primaria de los ingresos operacionales. Por esa razón, el deterioro de la cartera afecta directamente el estado de resultados y la posición de solvencia patrimonial de la institución. Cuando un crédito entra en mora, no solo deja de generar los intereses esperados, sino que además obliga a la entidad a constituir provisiones que reducen las utilidades y deterioran su base patrimonial.

                  .row
                    .col-lg-12
                      // Contenedor principal centrado
                      .bg-15.p-3.align-items-center.text-center
                        // Imagen centrada
                        figure.mb-3.img-center
                          img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
                        
                        b.mb-0 La rotación de cartera no mide cuánto se cobra: mide qué tan bien se administra el principal activo de la entidad financiera. Un índice deteriorado es la señal más clara de que el proceso de gestión requiere intervención inmediata.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/24.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              
      p.mt-3 Las consecuencias del deterioro de la cartera evidencian el impacto financiero directo que tiene una gestión deficiente sobre la institución:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-primario.linea-bold
          //- Primer paso
          .row(numero="1" titulo="Reducción de ingresos")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Los créditos en mora no generan los intereses pactados, lo que disminuye los ingresos operacionales del período y compromete la capacidad de la entidad para cubrir sus costos de operación.
                
                p Ejemplo: una entidad con 500 créditos en mora de 60 días deja de percibir los intereses de ese período. Si cada crédito genera en promedio $80.000 mensuales de intereses, la pérdida de ingresos asciende a 40 millones de pesos en un solo mes.

          //- Segundo paso
          .row(numero="2" titulo="Aumento de provisiones")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Cada crédito deteriorado obliga a constituir reservas contables proporcionales al nivel de riesgo de la obligación, lo que afecta directamente las utilidades del período y reduce el patrimonio de la institución.
                
                p Ejemplo: un crédito de $10.000.000 que migra de categoría A a categoría C incrementa la provisión requerida del 1 % al 20 %, lo que representa un cargo adicional de $1.900.000 a las utilidades del período.

          //- Tercer paso
          .row(numero="3" titulo="Menor capacidad crediticia")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Los recursos inmovilizados en cartera deteriorada no están disponibles para nuevas operaciones de crédito, lo que reduce la liquidez de la entidad y su capacidad para atender la demanda de nuevos clientes.
                
                p Ejemplo: una entidad con 3.000 millones de pesos en cartera vencida tiene ese monto bloqueado e improductivo. Esos mismos recursos, bien administrados, podrían financiar nuevas operaciones de crédito que generarían ingresos adicionales para la institución.

          //- Cuarto paso
          .row(numero="4" titulo="Presión regulatoria")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Índices de cartera vencida por encima del promedio del sector activan la supervisión reforzada de la Superintendencia Financiera de Colombia, que puede exigir planes de mejoramiento, restricciones operativas o incrementos de capital.
                
                p Ejemplo: una entidad cuyo índice de cartera vencida supera en tres puntos porcentuales el promedio del sector recibe una visita de inspección de la Superintendencia Financiera de Colombia (SFC), que exige un plan de mejoramiento con metas mensuales y seguimiento trimestral durante un año.

          //- Quinto paso
          .row(numero="5" titulo="Pérdida directa de capital")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p En los casos más graves, el no pago del capital prestado representa una pérdida definitiva que deteriora la base patrimonial de la entidad y puede comprometer su viabilidad financiera de largo plazo.
                
                p Ejemplo: una entidad que debe castigar contablemente 800 millones de pesos en cartera irrecuperable registra esa cifra como pérdida directa del período, lo que reduce su patrimonio y puede afectar los indicadores de solvencia exigidos por la SFC.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/25.svg', alt='', class="w-100 h-100 object-fit-cover")          

              
              .col-lg.p-4
                p Cada una de estas consecuencias confirma que la gestión de cartera no es una función operativa secundaria, sus resultados impactan directamente la rentabilidad, la solvencia y la reputación de la institución ante sus clientes, inversionistas y organismos reguladores.
                p.bg-15.p-4 La Superintendencia Financiera de Colombia no deja a criterio de cada entidad la forma de evaluar el riesgo de su cartera, establece un marco normativo uniforme que obliga a todas las instituciones vigiladas a clasificar sus obligaciones crediticias en cinco categorías según el comportamiento de pago de cada deudor. Esta clasificación no es un ejercicio contable, es la herramienta que le permite al gestor priorizar su trabajo, asignar recursos y tomar decisiones de cobranza con fundamento técnico y respaldo normativo.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Clasificación de cartera

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p La Superintendencia Financiera de Colombia no deja a criterio de cada entidad la forma de evaluar el riesgo de su cartera, establece un marco normativo uniforme que obliga a todas las instituciones vigiladas a clasificar sus obligaciones crediticias en cinco categorías según el comportamiento de pago de cada deudor. Esta clasificación no es un ejercicio contable, es la herramienta que le permite al gestor priorizar su trabajo, asignar recursos y tomar decisiones de cobranza con fundamento técnico y respaldo normativo.

                p.p-4.bg-16.bg-r8 La clasificación de la cartera está regulada por la Circular Básica Contable y Financiera de la Superintendencia Financiera de Colombia, que establece los criterios de calificación, los porcentajes de provisión requeridos y las condiciones que determinan el paso de una categoría a otra. Su cumplimiento es obligatorio para todas las entidades vigiladas y su incumplimiento genera sanciones administrativas que pueden afectar la operación de la institución.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/26.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center
      .col-lg-auto
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 2.
              span Categorías de calificación de la cartera

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FF984A")
                  tr
                    th(style="width: 13%;") Categoría
                    th(style="width: 20%;") Denominación
                    th Características del deudor
                    th(style="width: 20%;") Provisión requerida
                tbody
                  tr(style="background-color: #F6F6F6")
                    th.text-start A
                    td.text-start Riesgo normal.
                    td.text-start Deudores con excelente capacidad de pago. Créditos al día o con mora no superior a 30 días. Historial crediticio impecable.
                    td.text-start 1 % del saldo.
                  tr
                    th.text-start B
                    td.text-start Riesgo aceptable.
                    td.text-start Deudores con buena capacidad de pago, pero con debilidades identificadas. Mora entre 31 y 60 días. Sin deterioro significativo.
                    td.text-start 3.2 % del saldo.
                  tr(style="background-color: #F6F6F6")
                    th.text-start C
                    td.text-start Riesgo apreciable.
                    td.text-start Capacidad de pago deteriorada. Mora entre 61 y 90 días. Requiere seguimiento intensivo y acciones de cobranza activa.
                    td.text-start 20 % del saldo.
                  tr
                    th.text-start D
                    td.text-start Riesgo significativo.
                    td.text-start Capacidad de pago gravemente deteriorada. Mora entre 91 y 180 días. Alta probabilidad de pérdida parcial o total del crédito.
                    td.text-start 50 % del saldo.
                  tr(style="background-color: #F6F6F6")
                    th.text-start E
                    td.text-start Riesgo de incobrabilidad.
                    td.text-start Deudores irrecuperables. Mora superior a 180 días o con eventos que hacen irrecuperable la deuda (muerte, desaparición, procesos de liquidación).
                    td.text-start 100 % del saldo.

            p.mt-4 La progresión entre categorías es clara, a mayor tiempo de mora, mayor es el porcentaje de provisión que la entidad debe constituir. Actuar oportunamente en las etapas iniciales del incumplimiento no es solo una buena práctica de gestión, sino una decisión con impacto directo y cuantificable sobre los resultados financieros de la institución.

            .row.align-items-center
              .col-lg-12
                .row.align-items-center.mt-4.bg-7.p-4.bg-r8
                  .col-lg-2
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/27.svg', style='width: 150px').m-auto
                  
                  .col
                    p.mt-2 Conocer la normativa de clasificación de cartera le indica al gestor qué acción ejecutar frente a cada obligación. Sin embargo, saber qué hacer no es suficiente, también es necesario saber cómo hacerlo con responsabilidad, transparencia y respeto por los derechos del deudor. La dimensión ética de la gestión de cartera es tan determinante como el conocimiento técnico, porque define la calidad de cada interacción con el cliente y el límite entre una cobranza legítima y una práctica que puede exponer a la entidad a sanciones regulatorias.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

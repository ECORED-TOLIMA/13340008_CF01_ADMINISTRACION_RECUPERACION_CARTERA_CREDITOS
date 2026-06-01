<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Administración básica de cartera
    
    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema5/1.svg', style='width: 100px').m-auto
      
      .col
        p En la recuperación de cartera, las acciones de seguimiento, negociación y cobranza permiten pasar del contacto inicial con el deudor a una gestión más estructurada, verificable y orientada a resultados. Estas acciones ayudan a reconocer el estado real de la obligación, valorar la disposición de pago y seleccionar la estrategia más adecuada según el nivel de mora, el perfil del cliente y las políticas institucionales.

    .bloque-texto-g.bg-15.p-3.p-sm-4.p-md-5.mt-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, la gestión de cartera requiere combinar criterios técnicos con habilidades comunicativas y capacidad de análisis. No basta con contactar al deudor; es necesario interpretar la información disponible, evaluar los antecedentes del crédito, revisar los compromisos previos y definir alternativas que permitan recuperar la obligación sin desconocer la situación económica del cliente ni los límites establecidos por la entidad.

    p.mt-3 A partir de este enfoque, el tema aborda las visitas de seguimiento, las técnicas de negociación, la cobranza según la etapa de mora y la elaboración de informes de cartera. Estos elementos permiten comprender cómo se organiza el proceso de recuperación, cómo se priorizan los casos y cómo se sustentan las decisiones mediante datos claros, registros actualizados e indicadores de gestión.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido.mb-3
      h2 5.1 Visitas de seguimiento

    .col-lg-12
      .row.justify-content-center
        .col-lg-12(data-aos="fade-down")
          .row.d-flex.align-items-center(data-aos="fade-right")           
            .col-lg.p-4
              p En los procesos de recuperación, el contacto presencial permite ampliar la información obtenida por medios remotos y comprender mejor la situación del deudor. Esta gestión puede realizarse en el domicilio o en el lugar de trabajo del cliente, siempre que se respeten las políticas institucionales, la normativa aplicable y las condiciones de seguridad definidas por la entidad.

              p De igual manera, la visita requiere una planeación cuidadosa, porque implica:

              .row.align-items-center.justify-content-center
                .col-lg-12
                  .row.p-3.bg-15.align-items-end.bg-r8
                    .col-12

                      ul.lista-ul--color
                        li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                          p.mb-0 Tiempo necesario para preparar, realizar y registrar la visita.
                          
                        li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                          p.mb-0 Desplazamiento del gestor hasta el lugar de contacto definido.
                          
                        li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                          p.mb-0 Costos operativos asociados al transporte y a la gestión en campo. 
                          
                        li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                          p.mb-0 Contacto directo con el deudor en su domicilio o lugar de trabajo. 
                          
                        li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                          p.mb-0 Verificación de la situación económica y de las condiciones del caso.                        
                          
                        li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                          p.mb-0 Cumplimiento de las condiciones de seguridad establecidas por la entidad.
                          
            .col-lg-3.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
              figure.m-0.p-0.w-100.h-100.d-flex
                img(src='@/assets/curso/tema5/3.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.align-items-center.justify-content-center.mt-3
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/4.png', alt='', class="w-100 h-100 object-fit-cover")
              
              .col-lg.p-4
                p Estas condiciones permiten comprender que la visita de seguimiento debe planearse con criterio técnico y responsabilidad institucional. Por ello, antes de realizar el contacto presencial, es necesario valorar la prioridad del caso, preparar la información del crédito y garantizar que la gestión aporte datos útiles para la recuperación de la cartera.

                .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema5/5.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
                  .col-lg
                    p Antes de realizar esta gestión, el gestor debe contar con datos actualizados del crédito, conocer los antecedentes de contacto y tener claridad sobre el propósito de la visita. Esta preparación permite evitar improvisaciones, orientar el diálogo con seguridad y documentar los resultados de manera precisa para facilitar el seguimiento posterior.

    p.mt-3 Para que esta gestión sea efectiva, se deben considerar los siguientes elementos de preparación y ejecución:

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4        
          .col-lg-8
            LineaTiempoD.color-primario.linea-bold
              //- Primer paso
              .row(numero="1" titulo="Selección del caso")
                p Consiste en priorizar obligaciones con mayor riesgo, saldo relevante o baja respuesta por canales remotos. Permite orientar el esfuerzo del gestor hacia casos que requieren atención más cercana. 

              //- Segundo paso
              .row(numero="2" titulo="Revisión del expediente")
                p Implica consultar historial de pagos, gestiones anteriores, compromisos incumplidos y garantías asociadas. Esta revisión permite llegar a la visita con información completa y verificable. 

              //- Tercer paso
              .row(numero="3" titulo="Objetivo de la visita")
                p Consiste en definir qué se espera lograr durante el contacto presencial. Puede ser actualizar información, formalizar un acuerdo, verificar garantías o conocer la situación económica del deudor. 
              
              //- Cuarto paso
              .row(numero="4" titulo="Documentación soporte")
                p Corresponde a los documentos necesarios para sustentar la gestión, como estado de cuenta, propuestas autorizadas, formatos de acuerdo y soportes de contacto. 
 
              //- Quinto paso
              .row(numero="5" titulo="Seguridad en campo")
                .col-md-12.mb-4.mb-md-0
                p Implica planear la ruta, evitar zonas de riesgo sin acompañamiento y respetar los protocolos institucionales. Esta acción protege la integridad del gestor y asegura una visita responsable. 
                      
              //- Sexto paso
              .row(numero="5" titulo="Registro posterior")
                .col-md-12.mb-4.mb-md-0
                p Consiste en documentar los resultados de la visita en el sistema de información. Debe incluir compromisos, observaciones, acuerdos, fecha del próximo contacto y novedades relevantes.
                      
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema5/6.png', alt='', style="width: 100%").m-auto

    p.mt-3 Estas acciones permiten que la visita de seguimiento no sea una gestión improvisada, sino una actividad organizada, verificable y orientada a resultados. De esta manera, la entidad puede tomar decisiones con información actualizada y fortalecer el proceso de recuperación de cartera.

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      .col
        p Con el propósito de profundizar en la planificación y ejecución de las visitas de seguimiento como herramienta de recuperación de cartera, se propone el siguiente recurso de audio. Este material aborda, de manera clara y contextualizada, los elementos que hacen efectivo el contacto presencial con el deudor, la selección del caso, la preparación del expediente, la definición del objetivo de la visita, la documentación soporte, la seguridad en campo y el registro posterior de los resultados obtenidos.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.bg-7
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema5/7.png', style="width: 100%").m-auto          
          .row.justify-content-center.g-0.p-4.bg-15
            .col-lg-10
              .tarjeta.rounded-0.h-100
                .tarjeta.bg-white.p-4
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="Pódcast"
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                )

    .row.justify-content-center.mt-4
      .col-lg-10
        p.p-4.bg-16.bg-r8 Después de haber tenido acceso al recurso audiovisual, el recorrido continúa con las técnicas de negociación en cobranza, que permiten al gestor desarrollar las habilidades comunicativas necesarias para construir acuerdos de pago sostenibles y orientar el proceso de recuperación hacia resultados concretos.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Técnicas de negociación en cobranza

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p Durante la recuperación de una obligación en mora, la negociación permite construir acuerdos viables entre la entidad financiera y el deudor. Este proceso requiere analizar la información del crédito, reconocer la capacidad de pago del cliente y establecer condiciones claras que favorezcan la normalización de la obligación dentro de los límites autorizados por la política institucional.
                
                .cajon.color1.p-4
                  p Asimismo, negociar en cobranza no significa aceptar cualquier propuesta ni imponer condiciones de manera unilateral. La negociación debe orientarse a encontrar una alternativa posible, verificable y conveniente para las partes, en la que la entidad proteja la recuperación del activo y el deudor asuma compromisos acordes con su situación económica.

                .row.align-items-start.mt-4
                  .col-lg-1.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
                  
                  .col
                    p Por esta razón, el gestor de cartera debe preparar la negociación antes del contacto, revisar los antecedentes del crédito, identificar los límites de autorización y definir las opciones que puede presentar. Esta preparación evita acuerdos improvisados, reduce el riesgo de nuevos incumplimientos y permite que la gestión se desarrolle con criterio técnico y responsabilidad institucional.


              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/8.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mt-3
      .col-lg-10
        // Contenedor principal centrado
        .bg-15.p-3.align-items-center.text-center
          // Imagen centrada
          figure.mb-3.img-center
            img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
          
          b.mb-0 Una negociación efectiva en cobranza busca acuerdos claros, realistas y verificables, sin desconocer la capacidad de pago del deudor ni las políticas de la entidad.


    .row.align-items-center.justify-content-center.mt-4
      p En la elaboración del diagnóstico se pueden desarrollar las siguientes acciones:
      
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/9.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Preparación previa
            p.text-center Consiste en revisar el saldo, los días de mora, la capacidad de pago y las alternativas autorizadas. Esta información permite formular propuestas coherentes y evitar compromisos que no puedan cumplirse. 

            
          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/10.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Escucha de la situación
            p.text-center Permite conocer las causas del incumplimiento y valorar la disposición del deudor para normalizar la obligación. Esta acción ayuda a plantear soluciones ajustadas al caso. 

            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/11.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Separación del problema
            p.text-center Implica tratar la deuda como una situación que debe resolverse, sin convertir la conversación en un conflicto personal. Esto favorece un diálogo más objetivo y respetuoso. 

            
          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/12.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Identificación de intereses
            p.text-center Permite reconocer lo que busca cada parte. La entidad necesita recuperar la obligación, mientras que el deudor requiere una alternativa viable para cumplir. 

            
          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/13.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Presentación de opciones
            p.text-center Consiste en ofrecer alternativas autorizadas, como pago parcial, acuerdo por cuotas, refinanciación o fecha definida de pago. Las opciones deben ser claras y verificables. 

            
          //-Sexto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/14.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Formalización del acuerdo
            p.text-center Implica dejar por escrito los compromisos, valores, fechas, condiciones y consecuencias del incumplimiento. Este registro facilita el seguimiento y respalda la gestión realizada.

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/15.png', alt='', class="w-100 h-100 object-fit-cover")
              .col-lg.p-4
                p Estas técnicas permiten que la negociación se desarrolle con orden, claridad y fundamento técnico. De esta manera, el gestor puede orientar el diálogo hacia acuerdos sostenibles, reducir la posibilidad de nuevos incumplimientos y fortalecer la recuperación responsable de la cartera.

                .row.align-items-start.mt-4.bg-16.p-3
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema5/16.svg', style='width: 100px').m-auto
                  
                  .col.mb-0
                    p Una vez definidas las técnicas de negociación, es necesario revisar cómo cambian las estrategias de cobranza según el tiempo de incumplimiento. Esta clasificación permite seleccionar acciones más oportunas, priorizar los recursos disponibles y evitar que la obligación avance hacia etapas de mayor deterioro.

    .row.justify-content-center.mt-4
      .col-lg-auto
        .row.justify-content-center.mt-2
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 7.
              span Estrategias de cobranza según la etapa de mora

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FF984A")
                  tr
                    th(style="width: 25%;") Etapa de mora
                    th Días de vencimiento
                    th Estrategia principal
                    th Recursos utilizados
                tbody
                  tr(style="background-color: #F6F6F6")
                    th.text-start Preventiva
                    td.text-start Antes del vencimiento.
                    td.text-start Recordar el pago y ofrecer orientación temprana.
                    td.text-start Mensajes, llamadas y canales digitales.
                  tr
                    th.text-start Mora temprana
                    td.text-start De 1 a 30 días.
                    td.text-start Contactar al deudor y proponer alternativas de pago.
                    td.text-start Gestor de cobranza y recordatorios formales.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Mora media
                    td.text-start De 31 a 90 días.
                    td.text-start Realizar visita o acuerdo formal de pago.
                    td.text-start Visita de seguimiento y carta de cobro.
                  tr
                    th.text-start Mora avanzada
                    td.text-start De 91 a 180 días.
                    td.text-start Intensificar la gestión y evaluar refinanciación.
                    td.text-start Gestores especializados y apoyo jurídico.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Mora grave
                    td.text-start Más de 180 días.
                    td.text-start Analizar cobro jurídico, castigo o venta de cartera.
                    td.text-start Área jurídica, avalúos y operadores externos.

    p.mt-3 La clasificación presentada permite comprender que cada etapa de mora exige una respuesta diferenciada, tanto en la estrategia como en los recursos utilizados. Sin embargo, estas acciones solo generan valor para la entidad cuando se registran, se analizan y se convierten en información útil para la toma de decisiones. Por ello, el siguiente paso consiste en organizar los resultados de la gestión mediante informes de cartera claros, verificables y orientados al seguimiento del portafolio.
    
    .row.align-items-center.bg-15      
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/17.png', alt='', style="width: 450px; margin-left:-11px !important").m-auto
      .col-lg-8.p-2
    
        figure
          img(src="@/assets/curso/tema5/18.svg", alt="", style="width: 50px")
    
        p.mt-3 A partir de las estrategias aplicadas en cada etapa de mora, el informe de cartera permite consolidar los resultados de la gestión, identificar avances frente a las metas y reconocer los casos que requieren seguimiento o ajuste. Por ello, el siguiente tema aborda la elaboración de informes de cartera como herramienta de análisis, control y toma de decisiones en el proceso de recuperación.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Informes de cartera
    
    p En el proceso de recuperación, los informes de cartera permiten organizar la información obtenida durante el seguimiento, la negociación y la cobranza. Su función principal es presentar el estado del portafolio crediticio, los resultados de la gestión realizada y las situaciones que requieren análisis, ajuste o decisión por parte del área responsable.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.align-items-start
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
                  
                  .col
                    .row.justify-content-center.bg-16.p-3
                      p Asimismo, estos informes convierten los datos de cartera en información útil para la toma de decisiones. Por esta razón, no deben limitarse a mostrar cifras aisladas; también deben explicar el comportamiento de la mora, el cumplimiento de las metas, la efectividad de las estrategias aplicadas y los casos que representan mayor riesgo para la entidad.
                
                p.mt-3 De igual manera, la elaboración del informe exige claridad, orden y verificación de la información. Cada dato presentado debe corresponder con los registros del sistema, los acuerdos formalizados, los pagos recibidos y los indicadores definidos en el plan de recuperación. Así, el informe se convierte en una herramienta de control, seguimiento y mejora de la gestión.

                .row.justify-content-center.mt-3
                  .col-lg-12
                    // Contenedor principal centrado
                    .bg-15.p-3.align-items-center.text-center
                      // Imagen centrada
                      figure.mb-3.img-center
                        img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
                      
                      b.mb-0 Un informe de cartera debe presentar datos claros, resultados verificables y acciones de mejora que orienten la toma de decisiones.


              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/19.svg', alt='', class="w-100 h-100 object-fit-cover")

    p.mt-3 Para elaborar un informe de cartera claro y útil, es necesario organizar la información más relevante del portafolio y de la gestión realizada durante el período. Este documento debe permitir identificar el estado de las obligaciones, los resultados obtenidos, los indicadores de seguimiento y las acciones que requieren mejora, con el fin de apoyar decisiones oportunas y verificables.

    p Para su elaboración, se deben considerar los siguientes elementos:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.bg-21.align-items-end
          .col-12

            ul.lista-ul--color
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Saldo total del portafolio]: muestra el valor general de la cartera asignada o administrada durante el período de gestión.
                
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Distribución por mora]: organiza las obligaciones según los días de vencimiento y permite identificar los segmentos de mayor riesgo. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Tipo de crédito]: clasifica la cartera según la modalidad, como consumo, comercial, hipotecario o microcrédito. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Resultados de gestión]: presenta contactos realizados, acuerdos formalizados, pagos recibidos y compromisos cumplidos. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Indicadores de seguimiento]: permiten medir el avance frente a las metas, como recuperación, cartera vencida y acuerdos cumplidos. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Casos relevantes]: identifica obligaciones que requieren análisis especial por su valor, riesgo, garantía o dificultad de recuperación. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Acciones de mejora]: propone ajustes para fortalecer el seguimiento, actualizar datos, priorizar casos o modificar estrategias.

    .row.align-items-center.justify-content-center.mb-0.mt-3
      p Estos elementos permiten que el informe sea comprensible, verificable y útil para la gestión. Además, facilitan comparar la situación inicial de la cartera con los resultados obtenidos, identificar avances y reconocer las acciones que requieren continuidad o ajuste.
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/20.svg', alt='', class="w-100 h-100 object-fit-cover")
              .col-lg.p-4
                p Los planes de recuperación de cartera son instrumentos de gestión que permiten organizar las acciones necesarias para prevenir el deterioro de las obligaciones y recuperar los recursos comprometidos en créditos vencidos. En el sector financiero colombiano, estos planes deben construirse con base en información confiable, políticas institucionales claras y criterios técnicos que orienten la toma de decisiones.
                .row.align-items-start.mt-4.bg-15.bg-r8.p-3
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema5/21.svg', style='width: 100px').m-auto
                  
                  .col.mb-0
                    p Una vez revisada la importancia de los informes de cartera, el siguiente paso consiste en aplicar los conceptos estudiados en situaciones concretas. Por ello, los casos prácticos permiten analizar datos, tomar decisiones y reconocer cómo se integran el diagnóstico, la negociación, el seguimiento y la presentación de resultados en la gestión de cartera.

</template>

<script>
export default {
  name: 'Tema5',
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

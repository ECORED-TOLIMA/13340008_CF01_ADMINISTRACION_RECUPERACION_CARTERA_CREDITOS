<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Planes de recuperación de cartera

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/1.png', alt='', class="w-100 h-100 object-fit-cover")
              .col-lg.p-4
                p Los planes de recuperación de cartera son instrumentos de gestión que permiten organizar las acciones necesarias para prevenir el deterioro de las obligaciones y recuperar los recursos comprometidos en créditos vencidos. En el sector financiero colombiano, estos planes deben construirse con base en información confiable, políticas institucionales claras y criterios técnicos que orienten la toma de decisiones.
                .row.align-items-start.mt-4.bg-15.bg-r8.p-3
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/2.svg', style='width: 100px').m-auto
                  
                  .col.mb-0
                    p Asimismo, un plan de recuperación permite articular el diagnóstico de la cartera, los objetivos de gestión, la segmentación de deudores, las estrategias de cobranza, los responsables, los recursos y los indicadores de seguimiento. Por esta razón, no debe entenderse como un documento aislado, sino como una herramienta práctica para dirigir, controlar y mejorar el proceso de recuperación.

    .row.mt-0
      .col-12
        .p-5
          .row.align-items-center.bg-09
            .col-lg-4.d-lg-block.d-none.mt-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/3.png',  style='width: 370px').m-auto
    
            .col-lg-8
              p A continuación, se presentan los elementos generales que orientan la construcción de un plan de recuperación de cartera:
              SlyderF(columnas="col-lg-6 col-xl-4")
                //Tarjeta 1
                .tarjeta.bg-7.p-4
                  .row.justify-content-center.mb-3
                    .col-7
                      img(src='@/assets/curso/tema3/4.svg', alt='').img100.m-auto
                  p.mb-0 #[b Diagnóstico]: Definición inicial del procedimiento dentro del esquema de la base de datos, donde se establece su nombre, parámetros, lógica interna y propósito funcional.

                //Tarjeta 2     
                .tarjeta.bg-7.p-4
                  .row.justify-content-center.mb-3
                    .col-7
                      img(src='@/assets/curso/tema3/5.svg', alt='').img100.m-auto
                  p.mb-0 #[b Objetivos]: definen las metas de recuperación que se esperan alcanzar durante un período determinado.

                //Tarjeta 3
                .tarjeta.bg-7.p-4
                  .row.justify-content-center.mb-3
                    .col-7
                      img(src='@/assets/curso/tema3/6.svg', alt='').img100.m-auto
                  p.mb-0 #[b Segmentación]: organiza a los deudores según la etapa de mora, el monto adeudado, el tipo de crédito y la posibilidad de recuperación. 

                //Tarjeta 4
                .tarjeta.bg-7.p-4
                  .row.justify-content-center.mb-3
                    .col-7
                      img(src='@/assets/curso/tema3/7.svg', alt='').img100.m-auto
                  p.mb-0 #[b Estrategias]: establecen las acciones de cobranza más adecuadas para cada grupo de deudores.
    
                //Tarjeta 5
                .tarjeta.bg-7.p-4
                  .row.justify-content-center.mb-3
                    .col-7
                      img(src='@/assets/curso/tema3/8.svg', alt='').img100.m-auto
                  p.mb-0 #[b Seguimiento]: permite verificar el avance del plan y aplicar ajustes oportunos cuando los resultados no corresponden con las metas previstas.

    p.mt Estos elementos permiten pasar del análisis general del portafolio a la definición de acciones concretas. En consecuencia, el plan de recuperación contribuye a ordenar el trabajo del equipo de cartera, priorizar los casos de mayor riesgo y fortalecer la recuperación efectiva de las obligaciones.

    .row.justify-content-center
      .col-lg-10
        // Contenedor principal centrado
        .bg-15.p-3.align-items-center.text-center
          // Imagen centrada
          figure.mb-3.img-center
            img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
          
          b.mb-0 Un plan de recuperación de cartera permite organizar las acciones de cobranza con base en información confiable, objetivos claros y seguimiento permanente.

    .row.align-items-start.mt-4
      .col
        p Además, la elaboración del plan exige comprender que no todas las obligaciones tienen el mismo nivel de riesgo ni requieren la misma estrategia. Una obligación en mora temprana puede gestionarse mediante contacto preventivo, mientras que una obligación en mora avanzada puede requerir visita de seguimiento, acuerdo formal o escalamiento jurídico. Por ello, el plan debe responder a las condiciones reales del portafolio.

        p En este proceso, se pueden aplicar las siguientes acciones:

      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style="width: 100px; margin-left:-7px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Analizar el portafolio")
              p Consiste en revisar la composición general de la cartera para reconocer saldos vigentes, saldos vencidos, concentración de mora, tipos de crédito y segmentos con mayor deterioro. Este análisis permite comprender dónde se encuentra el principal riesgo y qué obligaciones requieren intervención prioritaria.

              p Ejemplo: el jefe de cartera detecta que el 65 % de la mora se concentra en microcrédito, asigna gestores especializados y programa visitas domiciliarias para la primera semana del mes.
              
            //-2da pestaña  
            .row(titulo="Definir prioridades")
              p Consiste en establecer qué grupos de obligaciones deben atenderse primero, de acuerdo con su valor, tiempo de mora, clasificación de riesgo, posibilidad de recuperación e impacto en los indicadores de la entidad. Esta acción evita dispersar esfuerzos y permite concentrar los recursos en los casos más relevantes.
              
              p Ejemplo: priorizar obligaciones de mayor monto o créditos próximos a pasar a una categoría de mayor provisión, porque su deterioro puede afectar los resultados financieros del período.

            //-3ra pestaña
            .row(titulo="Seleccionar estrategias")
              p Consiste en elegir las acciones de cobranza más adecuadas según el perfil del deudor, la etapa de mora, el tipo de crédito y la capacidad de pago identificada. La estrategia debe responder a las condiciones reales del caso y a las políticas institucionales, evitando aplicar una misma acción para todos los deudores.
              
              p Ejemplo: utilizar llamadas preventivas en mora temprana, visitas de seguimiento en mora media y acuerdos formales en casos que requieren mayor control. 

            //-4ta pestaña
            .row(titulo="Asignar responsables")
              p Consiste en distribuir las actividades del plan entre los integrantes del equipo de cartera, teniendo en cuenta su experiencia, carga de trabajo, conocimiento del segmento y capacidad para gestionar casos específicos. Esta asignación permite que cada acción tenga un responsable definido y facilita el seguimiento de los resultados.

              p Ejemplo: asignar los casos de mayor complejidad a gestores con experiencia en negociación, mientras que los casos preventivos pueden ser atendidos por canales remotos o gestores de contacto inicial.

            //-5Ta pestaña
            .row(titulo="Evaluar resultados")
              p Consiste en comparar los avances obtenidos con las metas definidas en el plan de recuperación, revisando indicadores como monto recuperado, acuerdos cumplidos, cartera vencida y efectividad de las estrategias aplicadas. Esta evaluación permite identificar desviaciones, ajustar acciones y fortalecer la toma de decisiones.
              
              p Ejemplo: revisar semanalmente el monto recuperado y el cumplimiento de los acuerdos de pago para determinar si la estrategia continúa, se modifica o se refuerza con otras acciones.

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      .col
        p La aplicación de estas acciones fortalece la planeación y evita que la recuperación se realice de manera improvisada. De esta forma, la entidad puede orientar sus recursos hacia los casos más relevantes y mejorar la efectividad del proceso de cobranza.

        p Una vez comprendido el propósito general del plan de recuperación, es necesario revisar su estructura. Esta estructura permite organizar la información de manera lógica y facilita la elaboración de informes claros, verificables y útiles para la toma de decisiones.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Estructura del plan
    
    p La estructura del plan de recuperación de cartera permite organizar, de manera clara y ordenada, las acciones necesarias para administrar las obligaciones vencidas y prevenir el deterioro del portafolio. En el sector financiero colombiano, este plan debe construirse con información confiable, criterios técnicos y lineamientos institucionales que orienten la toma de decisiones durante el proceso de recuperación.


    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.align-items-start
                  .col-lg-1.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      //img(src='@/assets/curso/temas/doctor.svg', style='width: 100px').m-auto
                  
                  .col
                    p Asimismo, el plan debe relacionar el diagnóstico de la cartera, los objetivos de gestión, las estrategias de cobranza, los responsables, los recursos disponibles y los indicadores de seguimiento. Esta articulación facilita que el equipo de cartera comprenda qué acciones debe ejecutar, en qué momento, con qué medios y bajo qué criterios se evaluarán los resultados obtenidos.

                p.p-4.bg-16.bg-r8 En este sentido, la estructura del plan debe permitir que la información se presente de forma progresiva, desde el análisis inicial de la cartera hasta la definición de las acciones de seguimiento. Para ello, cada componente debe cumplir una función específica dentro del proceso, de manera que el gestor pueda comprender la situación del portafolio, establecer metas realistas, seleccionar estrategias pertinentes y verificar los resultados alcanzados.

              .col-lg-auto.pe-lg-0.mb-2.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/9.png', alt='', class="w-100 h-100 object-fit-cover")
              
              p A continuación, se presentan los aspectos generales que debe contener la estructura del plan de recuperación de cartera:

    .row.justify-content-center.mt-lg-4.mt-0.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .row.justify-content-center
              .col-12
                .row.bg-21.bg-r8
                  .d-none.d-md-block
                    ImagenInfografica.color-primario
                      template(v-slot:imagen)
                        figure
                          img.d-none.d-md-block.m-auto.p-5(
                            src='@/assets/curso/tema3/10.png', style="width: 90%"
                            alt=''
                          )
                          img.d-block.d-md-none.m-auto.p-3(
                            src='@/assets/curso/tema3/11.png',
                            alt=''
                          )
                      
                      .tarjeta.bg-10.p-3.d-none.d-md-block(x="23%" y="39%" numero="+")
                        p.d-none.d-md-block Permiten verificar el avance del plan, medir la efectividad de las estrategias y aplicar ajustes cuando sea necesario. 
                      .tarjeta.bg-10.p-3.d-none.d-md-block(x="49.5%" y="17%" numero="+")
                        p.d-none.d-md-block Permite reconocer el estado actual del portafolio, los saldos vencidos, los rangos de mora, la clasificación de riesgo y los segmentos que requieren mayor atención
                      .tarjeta.bg-10.p-3.d-none.d-md-block(x="76%" y="39%" numero="+")
                        p.d-none.d-md-block Definen las metas de recuperación que se esperan alcanzar durante un período determinado, de acuerdo con la situación real de la cartera. 
                      .tarjeta.bg-10.p-3.d-none.d-md-block(x="23%" y="60.5%" numero="+")
                        p.d-none.d-md-block Ordena las gestiones por fechas, responsables, canales de contacto y recursos necesarios para la ejecución del plan. 
                      .tarjeta.bg-10.p-3.d-none.d-md-block(x="76%" y="60.5%" numero="+")
                        p.d-none.d-md-block Organiza las obligaciones según criterios como etapa de mora, monto adeudado, tipo de crédito, nivel de riesgo y posibilidad de recuperación. 
                      .tarjeta.bg-10.p-3.d-none.d-md-block(x="49.5%" y="83%" numero="+")
                        p.d-none.d-md-block Establecen las acciones más adecuadas para cada grupo de deudores, teniendo en cuenta la política institucional y la normativa vigente. 

                  figure.d-block.d-md-none
                    img.m-auto(
                      src='@/assets/curso/tema3/11.png')

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      .col
        p Estos aspectos permiten que el plan de recuperación no sea un documento aislado, sino una herramienta práctica para orientar la gestión de cartera. En consecuencia, su estructura debe ser clara, verificable y coherente con las políticas institucionales, los objetivos del área y las condiciones reales del portafolio.

    .row.align-items-center.justify-content-center.mt-3
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/12.png', alt='', class="w-100 h-100 object-fit-cover")
              
              .col-lg.p-4
                p Además, la estructura del plan cumple una función operativa dentro del área de cartera, porque permite convertir la información del diagnóstico en acciones concretas de gestión. Esta organización evita que las decisiones se tomen de manera aislada y facilita que cada actividad tenga un propósito definido dentro del proceso de recuperación.

                p.p-3.bg-16.bg-r8 Por esta razón, el plan debe presentar una secuencia lógica que permita comprender el problema, definir la ruta de acción y verificar los avances. Cuando esta secuencia es clara, el equipo de cartera puede consultar el documento como una guía de trabajo, no solo como un requisito administrativo.

                p La estructura del plan también facilita la comunicación entre las áreas que participan en la recuperación de cartera. Así, la dirección, los gestores, el área jurídica, el servicio al cliente y las unidades de apoyo pueden identificar su papel dentro del proceso y actuar con criterios comunes.

    p.mt-3 Para comprender mejor la estructura del plan de recuperación de cartera, en la siguiente tabla se presentan sus componentes principales, la función que cumple cada uno y las herramientas que pueden apoyar su elaboración. Esta organización facilita reconocer cómo se relacionan el diagnóstico, los objetivos, las estrategias, los responsables y los indicadores dentro del proceso de recuperación.

    .row.justify-content-center.mt-4
      .col-lg-auto
        .row.justify-content-center.mt-2
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4.
              span Estructura del plan de recuperación de cartera

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FF984A")
                  tr
                    th Componente del plan
                    th Descripción
                    th Herramientas de elaboración
                tbody
                  tr(style="background-color: #F6F6F6")
                    th.text-start Diagnóstico de la cartera.
                    td.text-start Analiza saldos, mora, riesgo y sectores con mayor deterioro.
                    td.text-start Reportes de cartera, informes internos y análisis de tendencias.
                  tr
                    th.text-start Objetivos de gestión.
                    td.text-start Define metas de recaudo, reducción de mora y cumplimiento de acuerdos.
                    td.text-start Histórico de resultados, metas del área y directrices de riesgo.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Segmentación de la cartera.
                    td.text-start Clasifica los deudores según riesgo, monto, mora y capacidad de pago.
                    td.text-start Puntaje de riesgo, historial de pago y clasificación por segmento.
                  tr
                    th.text-start Estrategias de cobranza.
                    td.text-start Establece acciones según el perfil del deudor y la etapa de mora.
                    td.text-start Manuales de cobranza, historial de gestión y buenas prácticas.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Cronograma de actividades.
                    td.text-start Organiza fechas de contacto y acciones previstas.
                    td.text-start Agenda del equipo, sistema de tareas y calendario de seguimiento.
                  tr
                    th.text-start Presupuesto de gestión.
                    td.text-start Define los recursos necesarios para ejecutar el plan de recuperación.
                    td.text-start Presupuesto del área, costos operativos y apoyo jurídico.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Indicadores de seguimiento.
                    td.text-start Mide contactos efectivos, acuerdos cumplidos y monto recaudado.
                    td.text-start Tableros de control, informes de gestión y reportes al comité.

            p.mt-3 La estructura presentada permite comprender que el plan de recuperación de cartera debe organizarse como una ruta de trabajo clara, verificable y coherente con la situación del portafolio. De esta manera, el equipo de cartera cuenta con una guía para priorizar acciones, asignar recursos y hacer seguimiento a los resultados obtenidos.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Después de revisar la estructura general del plan, corresponde profundizar en el diagnóstico de la cartera. Este diagnóstico constituye el punto de partida para reconocer el estado real del portafolio, identificar los riesgos principales y formular estrategias de recuperación pertinentes.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Diagnóstico de la cartera

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p El diagnóstico de la cartera es el punto de partida para elaborar un plan de recuperación pertinente, porque permite conocer el estado real del portafolio administrado por la entidad financiera. En este proceso se revisan los saldos, los días de mora, la clasificación de riesgo, el comportamiento de pago y los segmentos que requieren mayor atención.

                .cajon.color2.p-4
                  p Asimismo, este diagnóstico permite tomar decisiones con base en información verificable y no en percepciones generales. Por esta razón, antes de definir estrategias de cobranza, es necesario identificar dónde se concentra el deterioro, qué obligaciones presentan mayor riesgo y cuáles son las causas más frecuentes del incumplimiento.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/13.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/14.png', style='width: 240px').m-auto
              
              .col-lg.p-4
                .row.align-items-center.justify-content-center.bg-21.align-items-end
                  .col-lg-12
                    .row.p-4
                      .col-12
                        ul.lista-ul--color
                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Estado del portafolio]: permite reconocer el valor total de la cartera y su distribución según tipo de crédito, saldo vigente y saldo vencido. 
                            
                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Rangos de mora]: permiten clasificar las obligaciones de acuerdo con el tiempo de incumplimiento y el nivel de deterioro. 

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Clasificación de riesgo]: permite identificar la categoría de cada obligación según los criterios definidos por la normativa financiera aplicable. 

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Perfil del deudor]: permite analizar el comportamiento de pago, la capacidad económica y las condiciones que pueden afectar el cumplimiento. 

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Causas de incumplimiento]: permiten reconocer los factores que originan la mora, como disminución de ingresos, desempleo, dificultades empresariales o falta de seguimiento. 

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Concentración del riesgo]: permite identificar si la mayor exposición se encuentra en un grupo reducido de deudores, en una línea de crédito o en una etapa específica de mora. 

    p.mt Estos aspectos permiten comprender el comportamiento general de la cartera y facilitan la formulación de estrategias diferenciadas. En consecuencia, el diagnóstico se convierte en una herramienta clave para orientar la recuperación, prevenir el deterioro y sustentar las decisiones del equipo de gestión.

    .row.justify-content-center
      .col-lg-10
        // Contenedor principal centrado
        .bg-15.p-3.align-items-center.text-center
          // Imagen centrada
          figure.mb-3.img-center
            img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
          
          b.mb-0 El diagnóstico de la cartera permite reconocer el estado real del portafolio y definir acciones de recuperación basadas en datos claros, actualizados y verificables.
    
    p.mt-3 Además, el diagnóstico no debe limitarse a describir cifras. Su propósito es interpretar la información para identificar prioridades de gestión y orientar la toma de decisiones. Por ello, el análisis debe relacionar los datos de mora, riesgo y comportamiento del deudor con las acciones que pueden aplicarse en el plan de recuperación.

    p En la elaboración del diagnóstico se pueden desarrollar las siguientes acciones:

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/15.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Consultar la información actualizada
            p.text-center Consiste en revisar los reportes del sistema de cartera antes de formular conclusiones.

            p.text-center Ejemplo: verificar el saldo vigente, el saldo vencido, los pagos recientes y los acuerdos incumplidos. 
            
          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/16.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Agrupar las obligaciones por mora
            p.text-center Consiste en organizar los créditos según el tiempo de atraso.

            p.text-center Ejemplo: separar obligaciones en mora temprana, media, avanzada o grave para definir acciones diferenciadas. 
            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/17.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Identificar los casos prioritarios
            p.text-center Consiste en seleccionar las obligaciones que requieren atención inmediata por su monto, riesgo o posibilidad de deterioro.

            p.text-center Ejemplo: priorizar un crédito que está próximo a pasar a una categoría de mayor provisión.
            
          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/18.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Analizar el comportamiento del deudor
            p.text-center Consiste en revisar el historial de pagos y las respuestas dadas en gestiones anteriores.

            p.text-center Ejemplo: diferenciar entre un deudor con incumplimiento ocasional y otro con mora recurrente.
            
          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/19.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Reconocer patrones de incumplimiento
            p.text-center Consiste en identificar causas comunes que afectan el pago de varios deudores.

            p.text-center Ejemplo: detectar que un grupo de clientes presenta mora por reducción de ingresos en un mismo sector económico.
            
          //-Sexto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/20.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Definir necesidades de gestión
            p.text-center Consiste en establecer qué tipo de acción requiere cada segmento de cartera.

            p.text-center Ejemplo: aplicar recordatorios en mora temprana y visitas de seguimiento en mora media.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          p Estas acciones permiten que el diagnóstico sea útil para la planeación y no solo para la descripción del problema. De esta manera, el equipo de cartera puede comprender qué ocurre en el portafolio, qué segmentos requieren intervención y qué estrategias pueden generar mejores resultados.

          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/21.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                p Una vez elaborado el diagnóstico de la cartera, el proceso continúa con la definición de las etapas del plan. Estas etapas permiten organizar la recuperación de manera secuencial, desde el análisis inicial hasta la ejecución, el seguimiento y el ajuste de las acciones previstas.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Etapas del plan

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")  
              .col-lg.p-4
                p La elaboración de un plan de recuperación de cartera sigue un proceso estructurado que permite relacionar el diagnóstico de la situación con las acciones que se van a ejecutar. Esta organización ayuda a que la gestión no dependa de decisiones aisladas, sino de una ruta clara, verificable y coherente con la política institucional evitando decisiones aisladas o improvisadas.

                .row.align-items-start.bg-16.p-3
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/22.svg', style='width: 100px').m-auto
                  
                  .col.mb-0
                    p Asimismo, cada etapa cumple una función específica dentro del proceso de recuperación. Primero se analiza la información de la cartera; luego se definen las metas, se clasifican los deudores, se seleccionan las estrategias y se asignan los recursos necesarios para ejecutar las acciones de cobranza.
                
                p.mt-3 De igual manera, el plan requiere seguimiento y evaluación permanente, debido a que los resultados pueden variar según el comportamiento de pago, la respuesta del deudor y la efectividad de las acciones de cobranza. Por esta razón, las etapas deben entenderse como un ciclo de mejora continua.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/23.png', alt='', class="w-100 h-100 object-fit-cover")

    p A continuación, se presentan las etapas del plan de recuperación de cartera, organizadas de manera secuencial para facilitar la comprensión del proceso:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-primario.linea-bold
          //- Primer paso
          .row(numero="1" titulo="Etapa 1. Diagnóstico")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Consiste en recopilar y analizar la información sobre el estado de la cartera, identificando saldos vencidos, rangos de mora, deudores prioritarios y factores que han contribuido al deterioro de las obligaciones.
                                
                p Ejemplo: una entidad identifica que la mayor concentración de mora se encuentra entre 31 y 60 días; por ello, prioriza este segmento para evitar que avance hacia una categoría de mayor riesgo. 
                
          //- Segundo paso
          .row(numero="2" titulo="Etapa 2. Definición de objetivos")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Permite establecer metas claras, medibles, alcanzables, relevantes y con un plazo definido para el período de gestión. Estos objetivos deben responder al diagnóstico y estar alineados con los indicadores financieros de la entidad.
                
                p Ejemplo: la entidad define como meta reducir el índice de cartera vencida mediante acciones diferenciadas para los segmentos con mayor riesgo y mayor posibilidad de recuperación
                
          //- Tercer paso
          .row(numero="3" titulo="Etapa 3. Segmentación de la cartera")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Consiste en clasificar el portafolio en grupos homogéneos, según criterios como etapa de mora, monto adeudado, tipo de crédito, garantía, perfil del deudor y posibilidad de recuperación.
                
                p Ejemplo: separar los créditos en mora temprana, media y avanzada permite definir acciones distintas, como llamadas preventivas, visitas de seguimiento o acuerdos formales.
                
          //- Cuarto paso
          .row(numero="4" titulo="Etapa 4. Diseño de estrategias")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Permite seleccionar las acciones de cobranza más adecuadas para cada segmento, teniendo en cuenta el costo de la gestión, la efectividad esperada, la política institucional y los límites establecidos por la normativa vigente.
                
                p Ejemplo: para deudores con mora media y capacidad de pago parcial, se puede proponer un acuerdo escrito con fechas, valores y seguimiento definido.
                
          //- Quinto paso
          .row(numero="5" titulo="Etapa 5. Asignación de recursos")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Consiste en distribuir los casos entre los gestores disponibles, definir herramientas de apoyo, establecer recursos de gestión y coordinar con otras áreas cuando se requiera escalamiento.
                
                p Ejemplo: los casos con mora avanzada pueden asignarse a gestores con mayor experiencia en negociación, mientras que los casos con posible cobro jurídico se remiten al área correspondiente.
                
          //- Sexto paso
          .row(numero="6" titulo="Etapa 6. Ejecución y seguimiento")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Corresponde a la implementación de las estrategias definidas, con registro ordenado de cada gestión y revisión periódica de los indicadores de avance. Esta etapa permite verificar si las acciones generan los resultados esperados.
                
                p Ejemplo: el gestor registra llamadas, visitas, acuerdos y pagos realizados, mientras el equipo revisa semanalmente el cumplimiento de las metas y de los compromisos pactados.
                
          //- Séptimo paso
          .row(numero="7" titulo="Etapa 7. Evaluación y ajuste")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p Permite analizar los resultados obtenidos al cierre del período, identificar las estrategias más efectivas, reconocer dificultades y ajustar el plan para mejorar la gestión posterior.
                
                p Ejemplo: si las llamadas no generan acuerdos en un segmento específico, la entidad puede reforzar las visitas de seguimiento o modificar las condiciones de negociación autorizadas.

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      .col
        p Estas etapas permiten comprender que el plan de recuperación de cartera no finaliza con la ejecución de las acciones. Por el contrario, requiere revisión constante, análisis de resultados y ajustes oportunos para mejorar la efectividad del proceso y prevenir el deterioro del portafolio.
        p Para sintetizar el proceso de manera pedagógica, las etapas pueden organizarse en cuatro momentos clave:

    //Tarjetas conectadas
    .tarjeta--container.row.mt-3
      //Tarjeta 1
      .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/3.svg', style='width: 150px').m-auto 

        p.text-center #[b Analizar la cartera]

        p Revisar saldos, mora, riesgo y causas de incumplimiento. 

      //Tarjeta 2
      .col-md.tarjeta.bg-16.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/24.svg', style='width: 150px').m-auto 
        p.text-center #[b Planear la recuperación]

        p Definir objetivos, segmentos, estrategias y responsables. 

      //Tarjeta 3
      .col-md.tarjeta.bg-7.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/25.svg', style='width: 150px').m-auto 

        p.text-center #[b Ejecutar la gestión]

        p Aplicar las acciones de cobranza y registrar los avances. 

      //Tarjeta 4
      .col-md.tarjeta.bg-18.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/26.svg', style='width: 150px').m-auto 

        p.text-center #[b Evaluar resultados]

        p Medir el cumplimiento, identificar desviaciones y ajustar el plan. 

    p.mt-3 Estos cuatro momentos permiten reconocer la lógica general del plan y facilitan la comprensión del proceso de recuperación. De esta manera, el aprendiz puede relacionar el análisis de la cartera con la planeación, la ejecución, el seguimiento y la mejora continua de las acciones de cobranza.

    .row.justify-content-center
      .col-lg-10
        p.p-4.bg-16 Después de revisar las etapas del plan, es necesario abordar el seguimiento y control. Este proceso permite verificar si las estrategias ejecutadas cumplen los objetivos definidos y si se requieren ajustes para mejorar la recuperación de las obligaciones.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Seguimiento y control

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")  
              .col-lg.p-4
                p El seguimiento y control de la cartera permite verificar el avance de las acciones definidas en el plan de recuperación. Este proceso ayuda a identificar señales de deterioro, incumplimientos de acuerdos, cambios en el comportamiento del deudor y desviaciones frente a las metas establecidas por la entidad financiera.

                .row.align-items-start.bg-7.bg-r8.p-3
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/28.svg', style='width: 100px').m-auto
                  
                  .col.mb-0
                    p.mt-3 Asimismo, el seguimiento no debe realizarse únicamente al cierre del período de gestión. Por el contrario, debe aplicarse durante la ejecución del plan, con base en información actualizada, indicadores claros y registros confiables que permitan tomar decisiones oportunas.
                    
                .row.align-items-start.mt-4

                  .col
                    p De igual manera, el control permite ajustar las estrategias cuando los resultados no corresponden con lo esperado. Por esta razón, el equipo de cartera debe revisar periódicamente los avances, analizar las causas de las desviaciones y definir acciones correctivas que fortalezcan la recuperación de las obligaciones.
                    p A continuación, se presentan las principales acciones que orientan el seguimiento y control de la cartera:
                    
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 90px').m-auto
                  
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/29.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.bg-01
      .col-12
        .p-5
          .row.align-items-center.p-4
            SlyderA.p-4.bg-13.bg-r8(tipo="b").mt-4
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Monitoreo de alertas tempranas]: permite identificar señales que pueden anticipar el incumplimiento de una obligación. Estas señales pueden relacionarse con retrasos frecuentes, solicitudes de prórroga, disminución de pagos, cambios en la actividad económica del deudor o dificultades reportadas durante el contacto.
                  p Ejemplo: si un cliente solicita ampliar la fecha de pago en varias ocasiones, el gestor puede registrar la alerta, revisar el historial del crédito y proponer una acción preventiva antes de que la obligación avance a una etapa de mayor riesgo.
                  
                .col-lg-6.d-flex.d-none.d-lg-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema3/30.png', style='width: 572px')
            
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Cobranza preventiva]: consiste en contactar al deudor antes del vencimiento o durante los primeros días de mora. Su propósito es recordar el compromiso de pago, confirmar la fecha de cumplimiento y evitar que la obligación se deteriore por falta de seguimiento oportuno.
                  p Ejemplo: el gestor realiza una llamada o envía un mensaje institucional antes de la fecha límite de pago para recordar la obligación. Esta acción permite prevenir el incumplimiento y mantener una relación activa con el cliente.
                  
                .col-lg-6.d-flex.d-none.d-lg-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema3/31.png', style='width: 572px')
            
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Visitas de campo]: permiten verificar la situación real del deudor cuando los canales remotos no generan respuesta suficiente. Esta acción se utiliza en casos que requieren mayor cercanía, validación de información, revisión de capacidad de pago o formalización de compromisos.
                  p Ejemplo: si el deudor no responde llamadas ni mensajes y presenta mora media, el gestor puede programar una visita para conocer su situación económica, verificar datos de contacto y proponer una alternativa de pago viable.
                  
                .col-lg-6.d-flex.d-none.d-lg-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema3/32.png', style='width: 572px')

              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Seguimiento de acuerdos]: consiste en comprobar si los compromisos de pago se cumplen en las fechas pactadas. Esta acción permite mantener control sobre los acuerdos formalizados, identificar incumplimientos oportunamente y definir nuevas acciones cuando el deudor no cumple lo establecido.
                  p Ejemplo: después de pactar un pago parcial, el gestor revisa el sistema en la fecha acordada para confirmar si el pago fue realizado. Si no se evidencia cumplimiento, se registra la novedad y se programa un nuevo contacto.
                  
                .col-lg-6.d-flex.d-none.d-lg-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema3/33.png', style='width: 572px')
                    
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Revisión de indicadores]: permite evaluar el avance del plan mediante datos como cartera vencida, tasa de recuperación, acuerdos formalizados, acuerdos cumplidos y monto recaudado. Estos indicadores muestran si las estrategias aplicadas están generando los resultados esperados.
                  p Ejemplo: al cierre de la semana, el equipo compara el valor recuperado con la meta definida. Si el resultado es inferior al esperado, se revisan las causas y se ajustan las acciones para mejorar la recuperación.
                  
                .col-lg-6.d-flex.d-none.d-lg-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema3/34.png', style='width: 572px')
                    
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Comité de cartera]: facilita el análisis de casos relevantes, la revisión de resultados y la toma de decisiones frente a obligaciones que requieren acciones especiales. Este espacio permite evaluar situaciones complejas y definir rutas de gestión con respaldo institucional.
                  p Ejemplo: un crédito de alto valor con mora avanzada puede ser presentado al comité para decidir si continúa en gestión extrajudicial, se propone una reestructuración o se remite al área jurídica.
                  
                .col-lg-6.d-flex.d-none.d-lg-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema3/35.png', style='width: 572px')

    .row.align-items-center.justify-content-center.mt-3
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/36.png', alt='', class="w-100 h-100 object-fit-cover")
              
              .col-lg.p-4
                p Estas acciones permiten mantener control sobre el comportamiento de la cartera y evitar que los casos avancen hacia etapas de mayor riesgo sin intervención oportuna. En consecuencia, el seguimiento fortalece la toma de decisiones y mejora la eficiencia del proceso de recuperación.

                p.p-4.bg-16.bg-r8 Además, el seguimiento y control deben apoyarse en registros completos y verificables. Cada contacto, compromiso, pago, incumplimiento o decisión de escalamiento debe quedar documentado en el sistema de información de la entidad, debido a que estos datos sirven como soporte para evaluar la gestión y definir nuevas acciones.

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.bg-16.bg-r8.align-items-end
          .col-12

            ul.lista-ul--color
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms
                  p.mb-0 #[b Revisar indicadores de avance]: consiste en comparar los resultados obtenidos con las metas definidas en el plan.

                  p Ejemplo: verificar semanalmente si el monto recuperado corresponde con la meta proyectada para el período. 
                  
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms
                  p.mb-0 #[b Confirmar compromisos de pago]: consiste en revisar si el deudor cumplió lo pactado en el acuerdo.

                  p Ejemplo: validar en el sistema si el pago acordado fue realizado en la fecha establecida. 
                  
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms
                  p.mb-0 #[b Actualizar datos del deudor]: consiste en mantener vigente la información de contacto y ubicación.

                  p Ejemplo: registrar un nuevo número telefónico informado durante una llamada o visita. 
                                  
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms              
                  p.mb-0 #[b Identificar desviaciones]: consiste en reconocer diferencias entre lo planeado y lo ejecutado.

                  p Ejemplo: detectar que un segmento de deudores no responde a las llamadas programadas.
                  
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms             
                  p.mb-0 #[b Aplicar correctivos]: consiste en ajustar la estrategia cuando los resultados no son favorables.

                  p Ejemplo: cambiar de contacto telefónico a visita de seguimiento cuando no existe respuesta del deudor. 

    .row.align-items-center.justify-content-center.mt-3
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p Estas acciones permiten que el seguimiento no se limite al registro de actividades, sino que se convierta en una herramienta para mejorar la gestión. De esta manera, el equipo de cartera puede actuar con mayor precisión, prevenir el deterioro del portafolio y fortalecer el cumplimiento de los objetivos definidos.

                p.p-4.bg-21.bg-r8 Después de revisar el seguimiento y control, corresponde analizar las herramientas tecnológicas para la gestión de cartera. Estas herramientas permiten registrar información, programar actividades, generar alertas y elaborar reportes que apoyan la toma de decisiones en el proceso de recuperación.
       
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/37.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 Herramientas tecnológicas para la gestión de cartera

    p Las herramientas tecnológicas para la gestión de cartera apoyan la administración de la información relacionada con las obligaciones crediticias, los deudores y las acciones de recuperación. En las entidades financieras, estas soluciones permiten consultar datos actualizados, organizar la gestión diaria y respaldar las decisiones del equipo de cartera con información verificable.

    .row.align-items-center.justify-content-center.mt-3
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p.p-4.bg-21.bg-r8 Asimismo, su uso exige responsabilidad y criterio profesional, debido a que la información registrada puede incidir en acuerdos de pago, reportes internos, análisis de riesgo y decisiones de escalamiento. Por esta razón, la tecnología no reemplaza el análisis del gestor, sino que fortalece su capacidad para actuar con oportunidad, precisión y trazabilidad.

                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
                  
                  .col
                    p De igual manera, estas herramientas deben utilizarse conforme a las políticas institucionales y a las normas sobre protección de datos personales y financieros. El acceso, la consulta y el uso de la información deben responder únicamente a los fines autorizados por la entidad, evitando la divulgación o manipulación indebida de datos del consumidor financiero.

                p A continuación, se presentan los principales aportes de las herramientas tecnológicas en la gestión de cartera:

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/38.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mt-4
      .col-lg-10.bg-15.p-4.bg-r8
        // Definimos un mixin para no repetir código
        mixin item-lista(texto)
          .row.align-items-center.py-3.border-dashed-bottom
            .col-lg-1.col-3.d-flex.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema3/39.svg', style='width: 50px').m-auto
            .col
              p.mb-0= texto

        // Llamamos al mixin para cada elemento
        +item-lista("Centralización de información: permite reunir en un solo sistema los datos relevantes de las obligaciones, los pagos, los contactos y los acuerdos.")
        +item-lista("Priorización de casos: facilita identificar las obligaciones que requieren atención inmediata por monto, mora, riesgo o posibilidad de deterioro.")
        +item-lista("Automatización de tareas: ayuda a programar recordatorios, actividades de seguimiento y alertas asociadas al vencimiento de compromisos.")
        +item-lista("Soporte para decisiones: permite generar información útil para analizar tendencias, evaluar estrategias y definir acciones de mejora.")
        +item-lista("Trazabilidad del proceso: conserva el historial de las acciones realizadas, lo que facilita la revisión interna y el control de la gestión.")


    .row.justify-content-center
      .col-lg-10
        p.mt-3 Estos aportes permiten comprender que la tecnología cumple una función de apoyo estratégico dentro del proceso de recuperación. En consecuencia, su valor no está únicamente en almacenar datos, sino en convertir la información en insumos útiles para planear, ejecutar y mejorar la gestión de cartera.
        
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Las herramientas tecnológicas fortalecen la gestión de cartera cuando la información se registra con calidad, se consulta con criterio técnico y se protege con responsabilidad institucional.

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-3.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/40.png', alt='', class="w-100 h-100 object-fit-cover")
              .col-lg.p-4
                p Además, la efectividad de estas herramientas depende de la calidad de los datos ingresados por el equipo de cartera. Si la información está incompleta, duplicada o desactualizada, los reportes pueden generar conclusiones equivocadas y afectar la toma de decisiones. Por ello, el gestor debe registrar cada dato con precisión y revisar la información antes de utilizarla como soporte de una acción.

                p En la aplicación de estas herramientas se deben tener en cuenta los siguientes criterios:

                .row.align-items-center.justify-content-center
                  .col-lg-12
                    .row.p-3.bg-5.align-items-end
                      .col-12
                        .row.align-items-center
                          .col-12
                            ol.lista-ol--cuadro
                              li 
                                .lista-ol--cuadro__vineta
                                  span.text-black 1
                                div.ms             
                                  p.mb-0 #[b Calidad del dato]: consiste en registrar información completa, correcta y actualizada.
                                  p Ejemplo: verificar que el número de contacto, la dirección y el correo del deudor correspondan a los datos vigentes.
                        
                              li 
                                .lista-ol--cuadro__vineta
                                  span.text-black 2
                                div.ms             
                                  p.mb-0 #[b Seguridad de la información]: consiste en proteger los datos financieros y personales frente a usos no autorizados.
                                  p Ejemplo: evitar descargar bases de datos en dispositivos personales o compartir reportes por canales no institucionales.
                        
                              li 
                                .lista-ol--cuadro__vineta
                                  span.text-black 3
                                div.ms             
                                  p.mb-0 #[b Uso oportuno del sistema]: consiste en consultar la información antes de tomar decisiones de cobranza.
                                  p Ejemplo: revisar el historial del deudor antes de proponer un nuevo acuerdo de pago. 
                        
                              li 
                                .lista-ol--cuadro__vineta
                                  span.text-black 4
                                div.ms             
                                  p.mb-0 #[b Consistencia en los registros]: consiste en documentar las gestiones con el mismo criterio y nivel de detalle.
                                  p Ejemplo: registrar fecha, canal, resultado del contacto y acción siguiente en cada gestión realizada. 
                        
                              li 
                                .lista-ol--cuadro__vineta
                                  span.text-black 5
                                div.ms             
                                  p.mb-0 #[b Análisis de resultados]: consiste en interpretar la información generada por el sistema para mejorar la estrategia.
                                  p Ejemplo: identificar que un canal de contacto presenta baja efectividad y proponer una alternativa de gestión.

    p.mt-3 La aplicación de estos criterios permite que las herramientas tecnológicas aporten confiabilidad al proceso de recuperación. De esta manera, el equipo de cartera puede trabajar con datos más precisos, reducir errores operativos y respaldar sus decisiones con información clara y verificable.
    .row.justify-content-center
      .col-lg-10
        p.p-4.bg-21 Con el uso adecuado de estas herramientas se cierra el proceso de planeación, ejecución y control de la recuperación de cartera. A partir de este punto, el contenido avanza hacia el servicio al cliente deudor, aspecto necesario para comprender cómo la comunicación, el trato respetuoso y la orientación a soluciones influyen en la efectividad de la cobranza.

</template>

<script>
export default {
  name: 'Tema3',
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

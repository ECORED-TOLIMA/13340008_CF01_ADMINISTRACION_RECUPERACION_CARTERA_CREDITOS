<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Código de ética y política institucional de cartera
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema2/1.svg', style='width: 100px').m-auto
                  
                  .col
                    p El ejercicio profesional de la gestión de cartera implica acceder a información financiera sensible de los clientes, interactuar con personas en situaciones de dificultad económica y tomar decisiones con consecuencias significativas para el bienestar de los deudores y sus familias. En este contexto, el código de ética y las políticas institucionales no son documentos meramente formales, son el marco que determina el límite entre una cobranza legítima y una práctica abusiva que vulnera los derechos del consumidor financiero.

                p.p-3.bg-16.bg-r8 La gestión ética de la cartera no es solo una exigencia normativa, tiene consecuencias directas y medibles sobre los resultados de recuperación, la reputación de la entidad y la permanencia del gestor en su rol profesional. Ignorar el marco ético no es una opción neutral, es una decisión que genera riesgos concretos para todos los actores involucrados en el proceso de cobranza.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/2.png', alt='', class="w-100 h-100 object-fit-cover")

            p Las consecuencias del incumplimiento del marco ético en la gestión de cartera afectan tres dimensiones que se describen a continuación:

    .row.justify-content-center
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/3.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Para el deudor]
              p.text-center.mb-0 Recibe un trato que vulnera sus derechos como consumidor financiero, lo que le faculta para presentar quejas ante la SFC, exigir indemnizaciones y suspender cualquier disposición de pago voluntario frente a la entidad.

    
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/4.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Para la entidad]
              p.text-center.mb-0 Se expone a sanciones administrativas de la SFC, daños reputacionales de difícil recuperación, pérdida de clientes y deterioro de los indicadores de calidad del portafolio por la ruptura de los procesos de cobranza.
    
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/5.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Para el gestor]
              p.text-center.mb-0 Puede enfrentar responsabilidades personales según la gravedad de la conducta, procesos disciplinarios internos y, en casos extremos, consecuencias penales derivadas del uso indebido de información financiera protegida por la ley.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.align-items-start.mt-5.p-4.bg-16
              .col-lg-1.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema2/6.svg', style='width: 100px').m-auto
              
              .col
                p El conocimiento del marco ético no es suficiente, debe traducirse en decisiones concretas durante cada contacto con el deudor. Un gestor que conoce los principios, pero no los aplica asume los mismos riesgos que uno que los desconoce.

      p.mt-3 Conocer las consecuencias del incumplimiento ético es el punto de partida. El paso siguiente es comprender en detalle cada principio que sostiene una gestión de cartera responsable, su contenido, su fundamento normativo y la manera en que se expresa en cada decisión que toma el gestor durante el proceso de cobranza.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Principios éticos de cartera
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p Los principios éticos de la gestión de cartera constituyen una obligación profesional cuyo incumplimiento puede generar responsabilidades personales para el gestor y sanciones administrativas para la entidad vigilada. Cada principio tiene una expresión concreta en el trabajo cotidiano y un límite normativo que no puede transgredirse sin consecuencias jurídicas para la institución.

                p Los seis principios éticos que orientan cada acción del gestor en su interacción con los deudores son los siguientes:
              
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/7.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema2/8.png', alt='', style="width: 100%").m-auto
          .col-lg-8
            LineaTiempoD.color-primario.linea-bold
              //- Primer paso
              .row(numero="1" titulo="Transparencia")
                p Toda comunicación con el deudor es clara, veraz y oportuna. El gestor informa con precisión el estado de la obligación, saldo de capital, intereses causados, costos de mora y honorarios de cobro, y las alternativas disponibles para regularizar la deuda, sin inducir al deudor en error sobre las consecuencias del incumplimiento.
                
              //- Segundo paso
              .row(numero="2" titulo="Respeto y dignidad")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p Están prohibidas las presiones indebidas, las amenazas, las humillaciones, los contactos en horarios no autorizados y cualquier práctica que pueda calificarse como acoso o intimidación. La Circular 029 de 2014 de la SFC prohíbe explícitamente estas conductas y faculta a la Superintendencia para sancionar a las entidades que las realicen o permitan.
                      

              //- Tercer paso
              .row(numero="3" titulo="Protección de datos financieros")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p El gestor utiliza los datos del cliente exclusivamente para los fines de la gestión de cobro y se abstiene de revelarlos a terceros no autorizados o de emplearlos para propósitos distintos a los consagrados en la autorización de tratamiento de datos. El incumplimiento de este principio genera responsabilidades directas bajo las normas de protección de datos personales y del Habeas Data financiero vigentes en Colombia.
              //- Cuarto paso
              .row(numero="4" titulo="Justicia en la negociación")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p Un acuerdo de pago que el deudor no puede cumplir agrava la mora en lugar de resolverla, deteriora la relación comercial y reduce las probabilidades de recuperación efectiva del crédito. Las condiciones de negociación deben considerar siempre la capacidad de pago real y actual del deudor.
                                            

              //- Quinto paso
              .row(numero="5" titulo="Responsabilidad")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p El gestor reporta con fidelidad los resultados de su gestión en el sistema de información y se abstiene de registrar gestiones no realizadas o de marcar acuerdos como cumplidos sin verificar el pago efectivo del deudor. La integridad en el registro es tan importante como la calidad de la gestión misma.

              //- Sexto paso
              .row(numero="5" titulo="Reserva frente a terceros")
                .col-md-12.mb-4.mb-md-0
                  .row.align-items-center.mt-4
                    .col-lg-12.mb-lg-0
                      p Está prohibido contactar a personas que no tengan relación directa con la obligación como vecinos, compañeros de trabajo, familiares no codeudores, para obtener información sobre el deudor o ejercer presión indirecta sobre el cumplimiento de la deuda. Esta práctica viola la privacidad del deudor y de terceros, y constituye una conducta expresamente prohibida por la SFC.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p Los seis principios forman un sistema, cumplirlos simultáneamente es lo que define una gestión profesional, respetuosa y jurídicamente respaldada. Un gestor que aplica la transparencia, pero descuida la protección de los datos financieros del cliente, o que actúa con justicia en la negociación, pero omite registrar sus gestiones, incumple el marco ético en su conjunto y expone a la entidad a riesgos que van más allá de la recuperación del activo crediticio.
                
                .cajon.color1.p-4
                  p La política institucional de cartera es el instrumento que traduce estos principios en procedimientos concretos, facultades de negociación definidas y límites de actuación claros para todo el personal involucrado en la gestión de cartera. Conocer esa política es el paso siguiente para comprender cómo opera el marco ético en la práctica institucional diaria.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/9.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Política institucional de cartera
    
    p La política institucional de cartera es el conjunto de normas, criterios y procedimientos que una entidad financiera define para regular los procesos de otorgamiento, seguimiento y recuperación de los créditos que administra. Esta política materializa las decisiones estratégicas de la alta dirección en materia de riesgo crediticio y establece el marco operativo dentro del cual actúa todo el personal involucrado en la gestión de cartera, desde el ejecutivo de crédito hasta el gestor de cobranza jurídica.

    
    .row.align-items-center.bg-15
      
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/10.png', alt='', style="width: 450px; margin-left:-11px !important").m-auto
      .col-lg-8.p-2
    
        figure
          img(src="@/assets/curso/tema2/11.svg", alt="", style="width: 50px")
    
        p.mt-3 Una política institucional de cartera bien diseñada y correctamente implementada cumple varias funciones esenciales para la gestión del riesgo crediticio: establece límites claros de exposición al riesgo, define criterios objetivos para la calificación de los deudores, fija los procedimientos de seguimiento preventivo que permiten actuar antes de que los créditos entren en mora, y determina las facultades de negociación de cada nivel jerárquico del área de cartera. Cuando estos elementos están claramente definidos, el equipo de gestión puede actuar con agilidad y coherencia, sin depender de decisiones ad hoc que introduzcan inconsistencias en el proceso.

    .row.justify-content-center.mt-4
      p En la siguiente tabla se presentan los elementos que componen esta política, con su descripción e importancia para la gestión.
      .col-lg-auto
        .row.justify-content-center.mt-2
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 3.
              span Elementos de la política institucional de cartera

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FF984A")
                  tr
                    th(style="width: 25%;") Elemento de la política
                    th Descripción
                    th Importancia para la gestión
                tbody
                  tr(style="background-color: #F6F6F6")
                    th.text-start Criterios de otorgamiento.
                    td.text-start Define los requisitos mínimos que debe cumplir un solicitante para acceder a un crédito: capacidad de pago, historial crediticio, garantías, endeudamiento máximo.
                    td.text-start Una política de otorgamiento rigurosa previene el deterioro futuro de la cartera al seleccionar adecuadamente los sujetos de crédito.
                  tr
                    th.text-start Clasificación de riesgo.
                    td.text-start Establece las categorías de riesgo (A, B, C, D, E) y los criterios para la reclasificación de las obligaciones según el comportamiento del deudor.
                    td.text-start Permite priorizar los esfuerzos de cobranza en los segmentos de mayor riesgo y asignar los recursos de recuperación de manera eficiente.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Límites de cobranza.
                    td.text-start Define los plazos máximos de mora en cada etapa antes de escalar el proceso al siguiente nivel (preventivo, extrajudicial, jurídico).
                    td.text-start Garantiza una escalada oportuna y ordenada del proceso de cobranza, evitando demoras que aumenten el riesgo de incobrabilidad.
                  tr
                    th.text-start Facultades de negociación.
                    td.text-start Establece los niveles de autorización requeridos para aprobar acuerdos de pago, refinanciaciones, quitas de intereses y castigos de cartera.
                    td.text-start Agiliza la toma de decisiones en el proceso de negociación y garantiza que los acuerdos cuenten con la aprobación del nivel jerárquico adecuado.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Política de provisiones.
                    td.text-start Determina los porcentajes de provisión por categoría de riesgo y los criterios para el castigo contable de cartera irrecuperable.
                    td.text-start Asegura la consistencia contable de la cartera y el cumplimiento de las normas de la Superintendencia Financiera sobre provisionamiento.
                  tr
                    th.text-start Control y reporte.
                    td.text-start Define los informes periódicos del estado de la cartera, los responsables de su elaboración y los niveles de la organización que los reciben.
                    td.text-start Garantiza la transparencia de la información sobre la cartera y facilita la toma de decisiones por parte de la dirección.

              figcaption #[b Nota.] Elaboración basada en los lineamientos del Sistema de Administración del Riesgo Crediticio (SARC), Circular Básica Contable y Financiera de la SFC.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Responsabilidades del gestor

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")

              .col-lg
                .row.align-items-start.mt-4
                  p El gestor de cartera cumple un papel fundamental en la administración y recuperación de las obligaciones crediticias, debido a que realiza el seguimiento del portafolio asignado, contacta al deudor y propone alternativas de pago acordes con las políticas institucionales. Su labor exige conocimiento técnico, manejo adecuado de la información financiera y capacidad para actuar con respeto, claridad y responsabilidad en cada interacción.

                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/2.svg', style='width: 90px').m-auto
                  
                  .col
                    p.ml-text Asimismo, este rol requiere aplicar criterios éticos, normativos y procedimentales durante todo el proceso de cobranza. El gestor no solo busca recuperar una obligación vencida, sino también preservar la relación con el cliente, registrar correctamente cada gestión y aportar información confiable para la toma de decisiones de la entidad financiera.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/12.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
        
        p.mt-3 A continuación, se presentan las principales responsabilidades del gestor de cartera:  

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.bg-16.bg-r8.align-items-end
          .col-12

            ul.lista-ul--color
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Seguimiento de obligaciones: permite revisar el estado de los créditos asignados, identificar la etapa de mora y priorizar las acciones de gestión. 
                
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Contacto con el deudor: facilita la comunicación por los canales autorizados, como llamadas, correos electrónicos, mensajes o visitas de seguimiento.

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Negociación de acuerdos: permite proponer alternativas de pago viables, de acuerdo con la capacidad económica del deudor y las políticas institucionales. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Registro de gestiones: asegura la trazabilidad del proceso mediante la documentación clara de cada contacto, compromiso o resultado obtenido.

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Escalamiento de casos: permite remitir las obligaciones que requieren una intervención superior, jurídica o especializada.

        p.mt-3 Estas responsabilidades evidencian que la gestión de cartera no se limita a realizar cobros. Por el contrario, exige análisis, comunicación, seguimiento y documentación permanente para garantizar una recuperación organizada, ética y coherente con los lineamientos de la entidad.

        .row
          .col-lg-12
            // Contenedor principal centrado
            .bg-15.p-3.align-items-center.text-center
              // Imagen centrada
              figure.mb-3.img-center
                img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
              
              b.mb-0 La responsabilidad del gestor de cartera consiste en recuperar las obligaciones con criterio técnico, trato respetuoso y registro oportuno de cada gestión realizada.

    p.mt-3 Además, el gestor debe comprender que cada acción de cobranza tiene impacto en la entidad, en el deudor y en la calidad de la información del portafolio. Una gestión mal registrada, una comunicación imprecisa o una propuesta de pago inviable pueden afectar los resultados de recuperación y debilitar la confianza del cliente en la institución financiera.

    p En este sentido, las responsabilidades del gestor se aplican mediante acciones concretas:

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/13.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Revisión del caso
            p.text-center Consiste en consultar el saldo, los días de mora, las gestiones anteriores y los acuerdos incumplidos.
            p.text-center Ejemplo: antes de llamar al deudor, el gestor verifica si existe un pago reciente pendiente de aplicar. 
            
          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/14.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Comunicación clara
            p.text-center Consiste en explicar el estado de la obligación con información precisa y comprensible.

            p.text-center Ejemplo: el gestor informa el valor vencido, la fecha límite de pago y las alternativas disponibles. 
            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/15.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Acuerdo de pago
            p.text-center Consiste en formalizar compromisos realistas, con valores, fechas y condiciones definidas.

            p.text-center Ejemplo: el deudor acepta pagar una cuota inicial y el saldo restante en tres pagos mensuales. 
            
          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/16.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Registro en el sistema
            p.text-center Consiste en documentar cada gestión para garantizar seguimiento y trazabilidad.

            p.text-center Ejemplo: después de la llamada, el gestor registra el canal utilizado, la respuesta del deudor y la próxima fecha de contacto.
            
          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/17.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Seguimiento del compromiso
            p.text-center Consiste en verificar si el deudor cumple lo pactado dentro del plazo acordado.

            p.text-center Ejemplo: el gestor revisa el sistema el día posterior al vencimiento para confirmar si el pago fue realizado.

    .row.justify-content-center
      .col-lg-10
        p.mt-3 La aplicación de estas acciones fortalece la gestión profesional de la cartera, porque permite actuar con información actualizada, prevenir errores y mantener control sobre cada obligación. De esta manera, el gestor contribuye a la recuperación efectiva de los recursos y al cumplimiento de las políticas institucionales.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Atención al deudor

    .row.align-items-center.justify-content-center
      p La atención al deudor comprende el conjunto de acciones comunicativas y procedimentales que permiten establecer una relación respetuosa entre la entidad financiera y la persona que presenta dificultades de pago. En la gestión de cartera, esta atención debe realizarse con claridad, empatía y cumplimiento de las normas que protegen al consumidor financiero.

      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-3.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/18.png', alt='', class="w-100 h-100 object-fit-cover")
              .col-lg.p-4
                p De igual manera, la atención al deudor exige preparar cada contacto, escuchar la situación expuesta y presentar alternativas viables de normalización. Una comunicación agresiva o confusa puede generar rechazo, mientras que una atención clara y respetuosa favorece la disposición al diálogo y aumenta las posibilidades de lograr acuerdos sostenibles.

                p A continuación, se presentan las buenas prácticas que orientan la atención al deudor:
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    .row.p-3.bg-16.align-items-end
                      .col-12

                        ul.lista-ul--color
                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Preparación previa]: consiste en revisar la información de la obligación antes de realizar el contacto. 

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Presentación clara]: permite identificar al gestor, la entidad que representa y el motivo de la comunicación. 

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Escucha activa]: facilita comprender la situación del deudor antes de presentar una alternativa de pago.

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Información precisa]: permite explicar el saldo, los días de mora, los intereses y las consecuencias del incumplimiento. 

                          li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                            p.mb-0 #[b Registro de la gestión]: asegura que cada contacto quede documentado en el sistema de información. 

        p.mt-3 Estas prácticas ayudan a que la atención al deudor sea ordenada, respetuosa y útil para la recuperación de cartera. Además, permiten reducir malentendidos, prevenir conflictos y mantener una comunicación coherente entre la entidad y el cliente.
        
        .row.justify-content-center
          .col-lg-10
            // Contenedor principal centrado
            .bg-15.p-3.align-items-center.text-center
              // Imagen centrada
              figure.mb-3.img-center
                img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
              
              b.mb-0 Una atención adecuada al deudor combina respeto, información clara y búsqueda de soluciones viables para la normalización de la obligación.

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      .col
        p Además, la atención al deudor debe ajustarse al canal utilizado y a la etapa de mora de la obligación. No es igual realizar una llamada preventiva antes del vencimiento que adelantar una visita de seguimiento en una mora media. Por esta razón, el gestor debe adaptar su comunicación sin perder el propósito de recuperación ni incumplir los límites definidos por la normativa vigente.

    p.mt-3 En este proceso se pueden aplicar las siguientes acciones:

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4        
          .col-lg-8
            LineaTiempoD.color-primario.linea-bold
              //- Primer paso
              .row(numero="1" titulo="Llamada preventiva")
                p Permite recordar el vencimiento próximo de una obligación y evitar el incumplimiento.

                p Ejemplo: el gestor contacta al deudor dos días antes del pago para confirmar la fecha de cumplimiento. 

              //- Segundo paso
              .row(numero="2" titulo="Correo informativo")

                p Permite dejar constancia escrita del estado de la obligación y de las alternativas disponibles.
                
                p Ejemplo: la entidad envía un resumen del saldo vencido y los canales habilitados para pagar. 

              //- Tercer paso
              .row(numero="3" titulo="Mensaje de seguimiento")
                p Permite recordar un compromiso adquirido sin generar presión indebida.
                      
                p Ejemplo: se envía un mensaje breve para confirmar el pago pactado en un acuerdo anterior. 
              
              //- Cuarto paso
              .row(numero="4" titulo="Visita de seguimiento")
                p Permite verificar la situación del deudor cuando no responde a los canales remotos.

                p Ejemplo: el gestor visita al cliente para revisar su capacidad de pago y proponer una alternativa formal.                

              //- Quinto paso
              .row(numero="5" titulo="Cierre del contacto")
                .col-md-12.mb-4.mb-md-0
                p Permite confirmar compromisos, fechas y próximos pasos de la gestión.

                p Ejemplo: al terminar la llamada, el gestor resume el acuerdo y registra la fecha del próximo seguimiento. 
                      
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema2/19.png', alt='', style="width: 100%").m-auto

        .row.align-items-center
          .col-lg-12
            .row.align-items-center.mt-4.bg-7.p-4.bg-r8
              .col-lg-2
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema2/20.svg', style='width: 150px').m-auto
              
              .col
                p.mt-2 Estas acciones permiten que la atención al deudor se realice con mayor precisión y sentido pedagógico. Asimismo, fortalecen la trazabilidad del proceso y ayudan a que el deudor comprenda sus compromisos sin sentirse presionado o desinformado.
                p Después de reconocer las buenas prácticas de atención, corresponde revisar el marco de protección del consumidor financiero. Este aspecto define los derechos del deudor y los límites que deben respetarse durante los procesos de cobranza.


    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Protección del consumidor financiero
    
    p La protección del consumidor financiero en Colombia establece los derechos, garantías y condiciones que deben respetar las entidades vigiladas durante la prestación de sus servicios. En los procesos de cobranza, esta protección cobra especial importancia, debido a que el deudor debe recibir información clara, suficiente y oportuna sobre el estado de su obligación, los costos asociados, las alternativas de pago y las consecuencias del incumplimiento.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-7(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/21.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-11px")
              .col-lg
                p Asimismo, la gestión de cartera debe desarrollarse con respeto por la intimidad, la dignidad y la privacidad del consumidor financiero. Por esta razón, el gestor no solo debe buscar la recuperación de la obligación, sino también cumplir los límites definidos por la normativa colombiana, las políticas institucionales y las instrucciones de la Superintendencia Financiera de Colombia.

    p.mt-4 A continuación, se presentan los principales aspectos que orientan la protección del consumidor financiero en los procesos de cobranza:

    .row.justify-content-center
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/22.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Información clara]
              p.text-center.mb-0 Permite que el deudor conozca de manera completa y comprensible el estado de su obligación. Esta información debe incluir el saldo pendiente, los intereses, los costos de mora, las alternativas de pago y las consecuencias del incumplimiento, evitando mensajes confusos o incompletos. 
              
    
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/23.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Trato digno]
              p.text-center.mb-0 Exige que la comunicación con el consumidor financiero se realice con respeto, serenidad y profesionalismo. En ningún caso deben utilizarse amenazas, intimidaciones, humillaciones, expresiones ofensivas o presiones indebidas que afecten la dignidad del deudor. 
              
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/24.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Privacidad]
              p.text-center.mb-0 Protege la información financiera y personal del deudor durante todo el proceso de cobranza. Por ello, la entidad y el gestor deben evitar divulgar datos de la obligación a terceros no autorizados, como familiares, vecinos, compañeros de trabajo u otras personas ajenas al crédito.

    .row.justify-content-center.mt-4   
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/25.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Canales autorizados]
              p.text-center.mb-0 Permiten realizar el contacto únicamente por los medios definidos conforme a la normativa aplicable y a las autorizaciones otorgadas por el consumidor. Esto garantiza que la comunicación sea legítima, trazable y respetuosa de los derechos del deudor.
              
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/26.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Horarios permitidos]
              p.text-center.mb-0 Regulan los momentos en los que se pueden adelantar gestiones de cobranza, con el fin de proteger la tranquilidad, la intimidad personal y la vida familiar del consumidor financiero. El contacto debe realizarse dentro de los límites establecidos por la normativa vigente.
              
      .col-lg-4.col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/27.svg')
          .tarjeta.bg-2.shadow.bg-15
            .p-4.pt-5
              p.mb-4 #[b Cumplimiento normativo]
              p.text-center.mb-0 Exige que cada acción de cobro se ajuste al Estatuto del Consumidor Financiero, a la Ley 2300 de 2023, a las instrucciones de la Superintendencia Financiera de Colombia y a las políticas institucionales de la entidad. Esto reduce riesgos legales, regulatorios y reputacionales.

    .row.justify-content-center.mt-5
      .col-lg-10
        p Estos aspectos permiten comprender que la recuperación de cartera debe equilibrar la efectividad del recaudo con el respeto por los derechos del consumidor financiero. En consecuencia, el gestor debe actuar con criterio técnico, ético y legal en cada contacto, evitando prácticas que puedan afectar al deudor o generar riesgos para la entidad.
        // Contenedor principal centrado
        .bg-15.p-3.align-items-center.text-center
          // Imagen centrada
          figure.mb-3.img-center
            img(src="@/assets/curso/tema1/22.svg", alt="", style="width: 50px")
          
          b.mb-0 La cobranza responsable protege al consumidor, respeta su intimidad y fortalece la confianza en las entidades del sector financiero colombiano.

    .row.align-items-start.mt-4
      .col
        p Además, el marco legal colombiano establece obligaciones específicas para las entidades vigiladas y para quienes adelantan gestiones de cobranza. La Ley 1328 de 2009 orienta la protección del consumidor financiero mediante principios como la debida diligencia, la transparencia y la entrega de información cierta, suficiente, clara y oportuna. De igual manera, la Ley 2300 de 2023 regula los canales, horarios y periodicidad con los que puede contactarse al consumidor, con el fin de proteger su derecho a la intimidad.

      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
      
      p.mt-3 En este contexto, se deben evitar las siguientes prácticas durante la gestión de cobranza:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.bg-16.bg-r8.align-items-end
          .col-12

            ul.lista-ul--color
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms
                  p.mb-0 #[b Divulgación de la deuda]: consiste en informar a terceros no autorizados sobre la situación financiera del deudor.

                  p Ejemplo: comunicar la mora a vecinos, compañeros de trabajo o familiares que no son codeudores. 

                
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms
                  p.mb-0 #[b Presión indebida]: consiste en utilizar expresiones intimidantes o amenazantes para exigir el pago.

                  p Ejemplo: advertir consecuencias no autorizadas por la entidad o por la normativa vigente. 
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms
                  p.mb-0 #[b Contacto por canales no autorizados]: consiste en comunicarse con el consumidor por medios que no han sido aceptados o definidos conforme a la ley.

                  p Ejemplo: insistir por redes sociales personales cuando ese canal no fue autorizado.

                
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms              
                  p.mb-0 #[b Contacto fuera de horarios permitidos]: consiste en realizar llamadas o mensajes en momentos que afecten la tranquilidad del consumidor.

                  p Ejemplo: llamar al deudor en la noche, en domingo o en día festivo, cuando la norma restringe este tipo de contacto.
                
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms             
                  p.mb-0 #[b Información incompleta o confusa]: consiste en no explicar de manera suficiente el estado real de la obligación.

                  p Ejemplo: informar solo el valor vencido, sin aclarar intereses, costos, fechas de pago o alternativas disponibles. 
                
              li.d-flex.mb-3          
                i.fas.fa-comment-dollar(style="color: rgb(255, 152, 74); margin-top: 5px;")
                div.ms             
                  p.mb-0 #[b Uso indebido de documentos]: consiste en enviar comunicaciones que aparenten ser decisiones judiciales o actos oficiales inexistentes.

                  p Ejemplo: remitir una carta con apariencia de orden judicial cuando no existe un proceso formal. 

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p Evitar estas prácticas permite que la cobranza se realice con legalidad, transparencia y respeto por el consumidor financiero. Así, la entidad reduce riesgos regulatorios, protege su reputación institucional y fortalece una cultura de servicio responsable.

                .row.align-items-start.mt-4.bg-21.bg-r8.p-3
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema2/28.svg', style='width: 100px').m-auto
                  
                  .col.mb-0
                    p Con el reconocimiento del marco legal que protege al consumidor financiero, se completa la base ética y normativa de la gestión de cartera. A partir de este punto, el proceso formativo avanza hacia la elaboración de planes de recuperación, en los cuales se organizan las acciones, estrategias e indicadores necesarios para prevenir el deterioro de la cartera y recuperar las obligaciones en mora.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/29.png', alt='', class="w-100 h-100 object-fit-cover")



</template>

<script>
export default {
  name: 'Tema2',
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

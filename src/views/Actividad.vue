<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cartera en acción: demuestra tu dominio en gestión y recuperación.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el nivel de apropiación de los conceptos fundamentales sobre administración, recuperación de cartera y procesos de cobranza en el sector financiero colombiano.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la cartera de créditos en el balance general de una entidad financiera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar las obligaciones de la entidad con sus ahorradores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reflejar el patrimonio acumulado por la entidad durante el período.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Constituir el principal activo generador de ingresos financieros de la institución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mostrar el saldo de las provisiones constituidas por riesgo de mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué porcentaje de provisión individual corresponde a una obligación clasificada en categoría C según la CBCF de la Superintendencia Financiera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1 % del saldo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '3.2 % del saldo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '20 % del saldo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '50 % del saldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué función administrativa corresponde a la elaboración del plan de administración y recuperación de cartera con definición de objetivos y estrategias?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dirección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Control.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planeación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes prácticas de cobranza está expresamente prohibida por la Circular Externa 029 de 2014 de la Superintendencia Financiera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contactar al deudor por llamada telefónica durante el horario laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ofrecer alternativas de acuerdo de pago al deudor en mora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reportar al deudor ante las centrales de riesgo después de 60 días de mora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contactar al deudor a través de vecinos o familiares no codeudores para ejercer presión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué indica un índice de cartera vencida elevado en una entidad financiera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que la entidad tiene un alto volumen de nuevos desembolsos de crédito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que un porcentaje significativo del portafolio presenta mora superior a 30 días.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que las provisiones constituidas son insuficientes para cubrir los riesgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la tasa de interés cobrada supera el límite de usura certificado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el primer paso que debe realizarse para elaborar un plan de recuperación de cartera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir el presupuesto del área de cobranza antes de conocer el estado de la cartera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asignar la cartera a cada gestor únicamente según su experiencia previa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elaborar el diagnóstico de la cartera que revele la distribución por rango de mora y nivel de riesgo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Informar al deudor únicamente sobre los beneficios económicos para la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué implica el principio de transparencia en la relación ética con el deudor durante el proceso de cobranza?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comunicar con claridad y veracidad el estado de la obligación y las alternativas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener en reserva la información sobre los intereses de mora causados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compartir la situación del deudor con otros clientes de la entidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Enviar una carta de cobro extrajudicial sin más acciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué estrategia de cobranza es la más adecuada para un crédito con 55 días de mora cuyo deudor no ha respondido a tres llamadas previas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar una visita domiciliaria con propuestas de acuerdo de pago.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Declarar el crédito como irrecuperable y proceder al castigo contable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Responder con el mismo tono para demostrar firmeza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Amenazar con iniciar proceso judicial de manera inmediata.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la ley colombiana que protege los derechos de los consumidores financieros y regula las prácticas de cobranza de las entidades vigiladas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1328 de 2009.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 663 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 1581 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 1266 de 2008.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Durante una visita de seguimiento, el deudor manifiesta hostilidad. ¿Cuál es la respuesta más adecuada del gestor de cartera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener la calma, recordar el propósito constructivo y finalizar el contacto con cortesía si escala.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Criterios de otorgamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar al deudor y retirarse sin registrar la gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Política de provisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué tipo de contacto con el deudor favorece los acuerdos de pago más sólidos en etapa de mora media?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El mensaje de texto automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El correo electrónico formal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La visita presencial domiciliaria o al lugar de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir los horarios de atención al público de cada entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿A partir de cuántos días de mora una obligación crediticia debe clasificarse en categoría D según la normativa de la Superintendencia Financiera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '61 días.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '91 días.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '181 días.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '31 días.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el propósito principal del Sistema de Administración del Riesgo Crediticio (SARC) en las entidades financieras?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar, medir, controlar y monitorear el riesgo de crédito de manera sistemática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Regular las tasas de interés aplicadas a cada modalidad de crédito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contradecir al deudor de inmediato y exigir el pago nuevamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aceptar la afirmación del deudor sin verificar información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Cuando un deudor dice "ya pagué esa cuota", ¿cuál es la acción correcta del gestor de cartera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar en el sistema si existe el registro del pago y solicitar el comprobante al deudor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escalar al área jurídica sin revisar la situación previamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Saldo total y distribución por rango de mora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Principales deudores y su perfil económico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En la negociación con un deudor estratégico con mora avanzada, ¿qué documento debe formalizarse para garantizar el acuerdo de pago?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una comunicación verbal que recuerde los compromisos acordados en la visita.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un mensaje de WhatsApp con los compromisos acordados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un acuerdo escrito firmado por el deudor con compromisos, plazos y consecuencias del incumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un correo electrónico enviado por el gestor al deudor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los principios de servicio al cliente se refiere a contactar al deudor antes de que la mora se agrave para ofrecer soluciones tempranas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Claridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Empatía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Oportunidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eficiencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué efecto produce el deterioro de la cartera sobre el estado de resultados de una entidad financiera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumenta los ingresos por intereses y reduce las provisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reduce los ingresos por intereses e incrementa el gasto por provisiones simultáneamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo afecta el balance, sin ningún impacto sobre el estado de resultados',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementa los ingresos operacionales por el cobro de intereses de mora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la diferencia entre el castigo contable de cartera y la condonación de la deuda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Son equivalentes: el castigo contable implica que la deuda queda totalmente perdonada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El castigo contable elimina la deuda del balance, pero la entidad puede continuar gestionando el cobro extrajudicialmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La condonación permite recuperar la cartera castigada, pero el castigo contable no.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El castigo contable solo aplica a créditos comerciales, no a créditos de consumo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué información debe contener el informe de seguimiento de cartera presentado al área directiva de una entidad financiera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente el listado de deudores con mora superior a ciento ochenta días.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El número de llamadas realizadas por cada gestor durante el período.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los indicadores de gestión, el análisis de cumplimiento de metas y las acciones de mejora propuestas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo los casos en los que se logró acuerdo de pago durante el período.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿En qué consiste la reestructuración de un crédito en el contexto de la gestión de cartera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En la condonación total del saldo adeudado por el deudor como acto de buena voluntad de la entidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En la modificación de las condiciones originales del crédito para adaptarlas a la capacidad de pago actual del deudor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En el traslado del crédito a otra entidad financiera para que continúe la gestión de cobro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En la suspensión temporal del cobro de intereses mientras el deudor regulariza su situación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

export default {
  global: {
    Name: 'Gestión y recuperación de cartera en entidades financieras',
    Description:
      'Este componente formativo aborda los fundamentos de la gestión y recuperación de cartera en entidades financieras. Integra principios administrativos, éticos y normativos, políticas institucionales de cobranza, servicio al cliente deudor, técnicas de negociación y estrategias de seguimiento, con el fin de fortalecer la administración responsable de los créditos y la recuperación oportuna de las obligaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Administración básica de cartera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Administración en el sector financiero',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Entidades de crédito en Colombia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Funciones administrativas de cartera',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Rotación de cartera',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Clasificación de cartera',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Código de ética y política institucional de cartera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios éticos de cartera',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Política institucional de cartera',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Responsabilidades del gestor',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Atención al deudor',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Protección del consumidor financiero',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planes de recuperación de cartera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura del plan',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diagnóstico de la cartera',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Etapas del plan',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Seguimiento y control',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas tecnológicas para la gestión de cartera',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicio al cliente deudor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Servicio en el sector financiero',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Fidelización del cliente deudor',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Comunicación en cobranza',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Manejo de situaciones difíciles',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguimiento, negociación y cobranza',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Visitas de seguimiento',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas de negociación en cobranza',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Informes de cartera',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Casos prácticos de aplicación en cartera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Aprendizajes de los casos prácticos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Análisis aplicado de situaciones de cartera',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo de pago',
      significado:
        'Convenio formal entre la entidad financiera y el deudor en el que se fijan nuevas condiciones para saldar una obligación vencida, tales como plazos, cuotas y posibles descuentos por pronto pago.',
    },
    {
      termino: 'Cartera de créditos',
      significado:
        'Conjunto de préstamos otorgados por una entidad financiera a sus clientes, que constituye el principal activo generador de ingresos y cuya calidad refleja la solidez patrimonial de la institución.',
    },
    {
      termino: 'Cartera vencida',
      significado:
        'Porción de la cartera que registra obligaciones con más de treinta días de incumplimiento y cuyo comportamiento determina el nivel de provisiones que la entidad debe constituir.',
    },
    {
      termino: 'Castigo de cartera',
      significado:
        'Decisión contable por la cual una entidad retira de sus activos una obligación calificada como irrecuperable, sin que ello implique la condonación de la deuda.',
    },
    {
      termino: 'Cobranza',
      significado:
        'Proceso de gestión mediante el cual una entidad financiera busca el recaudo de créditos en mora, aplicando estrategias diferenciadas según la etapa de incumplimiento: preventiva, extrajudicial o jurídica.',
    },
    {
      termino: 'Índice de cartera vencida',
      significado:
        'Indicador que expresa el porcentaje del saldo total de cartera con mora superior a treinta días y permite comparar la calidad del portafolio frente al promedio del sector.',
    },
    {
      termino: 'Mora',
      significado:
        'Situación de incumplimiento en el pago de una obligación crediticia en la fecha pactada, que genera intereses moratorios para el deudor y obliga a la entidad a constituir provisiones.',
    },
    {
      termino: 'Provisión',
      significado:
        'Reserva contable constituida por la entidad financiera para cubrir las pérdidas esperadas por el incumplimiento de sus deudores, conforme a las normas de la Superintendencia Financiera de Colombia.',
    },
    {
      termino: 'Reestructuración',
      significado:
        'Modificación de las condiciones originales de un crédito en aspectos como plazo, cuotas o garantías, con el fin de adecuarlo a la capacidad de pago actual del deudor.',
    },
    {
      termino: 'Superintendencia Financiera de Colombia',
      significado:
        'Entidad gubernamental que supervisa, inspecciona y controla las instituciones del sector financiero, asegurador y bursátil del país, y define las normas de gestión del riesgo crediticio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal Torres, C. A. (2016). <em>Metodología de la investigación: para administración, economía, humanidades y ciencias sociales</em> (4.a ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2017). <em>Administración de recursos humanos: el capital humano de las organizaciones</em> (10.a ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008). <em>Ley 1266 de 2008, por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales</em>. Diario Oficial, (47219).',
      link: 'https://www.suin-juriscol.gov.co',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009). <em>Ley 1328 de 2009, por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones</em>. Diario Oficial, (47411).',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). <em>Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales</em>. Diario Oficial, (48587).',
      link: '',
    },
    {
      referencia:
        'Fisher, R., Ury, W., & Patton, B. (2011). <em>Obtenga el sí: el arte de negociar sin ceder</em> (3.a ed.). Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Gitman, L. J., & Zutter, C. J. (2016). <em>Principios de administración financiera</em> (14.a ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.a ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). <em>Decreto 663 de 1993, Estatuto Orgánico del Sistema Financiero</em>. Diario Oficial, (40820).',
      link: '',
    },
    {
      referencia:
        'Ramírez Padilla, D. N. (2018). <em>Contabilidad administrativa: un enfoque estratégico para competir</em> (10.a ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2014). <em>Circular Externa 029 de 2014: instrucciones relativas a las prácticas de cobranza de las entidades vigiladas</em>. SFC.',
      link: 'https://www.superfinanciera.gov.co',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2023). <em>Circular Básica Contable y Financiera (CBCF): Capítulo II, Gestión del riesgo crediticio</em>. SFC.',
      link: 'https://www.superfinanciera.gov.co',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2024). <em>Informe de seguimiento al sistema financiero: indicadores de calidad de cartera</em>.',
      link: 'https://www.superfinanciera.gov.co',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

export default {
  global: {
    componenteFormativo: 'Materias primas e insumos de confección industrial ',
    descripcionCurso:
      'En este componente se abordan los fundamentos de las materias primas e insumos de confección industrial, permitiendo contextualizar al aprendiz en los tipos, clasificación e implementación, requeridos para la producción de prendas. De igual manera se abordan conceptos de costos, presupuestos y cálculos de consumo; conocimientos necesarios para poder determinar los materiales e insumos requeridos para la elaboración de prendas de vestir.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Materias primas e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Materias primas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Insumos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Cadena de valor',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Unidades de medida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Presupuestos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Consumos de materias primas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Orden de producción (OP)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ficha técnica',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cálculo de consumo de materiales e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Cálculo de consumo unitario',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Cálculo de consumo por lote',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Políticas empresariales de inventarios',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Sistemas de inventarios',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Funciones del inventario',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Tipos de inventarios',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Arrechedora, I. (2020). Gestión de inventarios: concepto, tipos, modelos y ejemplos. Lifeder.',
      link: 'https://www.lifeder.com/gestion-inventarios/',
    },

    {
      referencia:
        'Chi, B. (2020, 26 Nov). Ficha Técnica en moda: ¿qué información incluir? [Blog]. SeamPedia.com',
      link: 'https://seampedia.com/ficha-tecnica-en-moda/',
    },

    {
      referencia:
        'Calderón Rojas, C. (2020).  Fundamentación textil, hilaturas e hilos. Material formativo para el Programa Tecnólogo en desarrollo de colecciones para la industria de la moda.',
    },

    {
      referencia:
        'Canal Fondo Esperanza. (2019). Como hacer un buen inventario, aprendo y emprendo. [Archivo de video] YouTube.',
      link: 'https://www.youtube.com/watch?v=s_GBs0V4cR0',
    },

    {
      referencia:
        'Depositphotos. (2017). Fibras de material azul enlazadas. Blog fotos.',
      link:
        'https://sp.depositphotos.com/177910842/stock-photo-linked-blue-material-fibers.html',
    },

    {
      referencia:
        'Hancco Machaca, M. (2018) Tutorial requerimientos materia prima y consumo. [Archivo de video] YouTube',
      link: 'https://www.youtube.com/watch?v=CEKjA_UsvnQ',
    },

    { referencia: 'Rojas C (s.f.) Fundamentación textil. Hilaturas – Hilos.' },

    {
      referencia:
        'SENA. (2021). Componente formativo 14. Materiales e insumos para vestuario. Programa Tecnólogo en desarrollo de colecciones para la industria de la moda.',
    },

    {
      referencia:
        'SENA. (2021) Telas, materiales, insumos y maquinaria para la confección de ropa interior. Material formativo Programa tecnólogo de diseño para la industria de la moda. Recuperado de',
      link:
        'https://drive.google.com/file/d/0B0cUWYMxp4Tmb25Qal8yYzl0U1E/view?usp=sharing&resourcekey=0-tonU5rMv8Vs06Ef_RErNDQ',
    },
  ],
  glosario: [
    {
      termino: 'Ancho de la tela',
      significado:
        'Longitud determinada por la longitud de los hilos a lo ancho del telar, trama.',
    },
    {
      termino: 'Calidad',
      significado:
        'Conjunto de especificaciones a cumplir, para dar satisfacción a una necesidad y expectativa del cliente.',
    },
    {
      termino: 'Consumo promedio',
      significado:
        'Cantidad de materiales e insumos necesarios para la construcción de una prenda de vestir y/ o un servicio del sistema moda.',
    },
    {
      termino: 'Investigación',
      significado:
        'Indagar tendencias, colores, procesos, utilizando como fuentes ferias, internet, desfiles. Desarrollo: elaborar prototipos con la anterior información.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'Documento que contiene información que orienta los procesos para construir muestras y lotes de producción.',
    },
    {
      termino: 'Marquilla instrucción lavado',
      significado:
        'Elemento que va fijado en la prenda que contiene información sobre los cuidados que hay que tener al lavar las prendas.',
    },
    {
      termino: 'Producción',
      significado:
        'Conjunto de actividades que agregan valor para obtener un bien o un servicio.',
    },
    {
      termino: 'Sistema',
      significado:
        'Conjunto de partes que interactúan, para conseguir el mismo objetivo, con excelente comunicación, y a la misma velocidad.',
    },
    {
      termino: 'Tejido',
      significado:
        'Conjunto de hilos entrelazados, con características de peso, suavidad, composición, y volumen.',
    },
    {
      termino: 'Trazo',
      significado:
        'Dibujo de los moldes sobre la tela o sobre un papel que tenga las medidas de la tela que se va a trabajar, en las cantidades y tallas que se requieran.',
    },
    {
      termino: 'O.P.',
      significado:
        'Orden de producción: documento que describe de manera detallada las cantidades de los lotes a producir.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA. (2021) Telas, materiales, insumos y maquinaria para la confección de ropa interior. Material formativo Programa tecnólogo de diseño para la industria de la moda. ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_1_Telas_Sena.pdf',
    },
    {
      texto: 'Rojas C (s.f.) Fundamentación textil. Hilaturas – Hilos ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_2_Fundamentacion_Textil_Hilaturas_Hilos.pdf',
    },
    {
      texto:
        'Coats Multisolution (s.f.) Cálculo de consumo de hilo para tejido liviano. ',
      tipo: 'Documento',
      descarga:
        '/downloads/Anexo_3_Tabla_dinamica_calculo_consumo_hilo_tejido_liviano.xls',
    },
    {
      texto:
        'Sipper, D; Bulfin, R. (1998). Planeación y control de la producción. McGraw-Hill Interamericana Editores.',
      tipo: 'E-book/Enlace',
      link:
        'https://www.academia.edu/10997351/Daniel_Sipper_Planeaci%C3%B3n_y_Control_de_La_Producci%C3%B3n',
    },
    {
      texto:
        'Fondo esperanza (s.f.) Cómo hacer un buen inventario | Aprendo y Emprendo. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/s_GBs0V4cR0',
    },
    {
      texto:
        'Hancco M. (2018) Tutorial Req Materia Prima y consumo [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/CEKjA_UsvnQ',
    },
    {
      texto:
        'Cruz Fernández, A. (2017). Gestión de inventarios: UF0476 . IC Editorial. Ebooks 7-24. ',
      tipo: 'Enlace de biblioteca',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8741 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Luis Sossa Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Liliana María Ceballos Gutiérrez',
        cargo: 'Asesora metodologa diseño y desarrollo curricular',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia ',
      },
      {
        nombre: 'Giovanna Escobar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'Liliana Morales',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucia Perilla M',
        cargo: 'Revisión pedagógica y metodológica',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Oscar Ivan Uribe Ortiz'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

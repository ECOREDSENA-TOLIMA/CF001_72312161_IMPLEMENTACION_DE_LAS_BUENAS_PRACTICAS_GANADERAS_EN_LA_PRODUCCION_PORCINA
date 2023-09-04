export default {
  global: {
    componenteFormativo: 'Conceptualización en BPG en la producción porcina',
    descripcionCurso:
      'Dentro de este componente se comprenderán los conceptos de las diferentes actividades, procesos, procedimientos, así como la normativa para la implantación de las Buenas Prácticas Ganaderas - BPG en la Producción Porcina, las cuales permitirán entender de manera integral su aplicación dentro de la unidad pecuaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Buenas Prácticas Ganaderas en la producción porcina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos e importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Fundamentos de inocuidad en la producción primaria pecuaria e IVC',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Beneficios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Criterios de cumplimiento   ',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación de las BPG en la producción porcina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas de la implementación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Responsables',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Recursos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Unidad productiva porcina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diagnóstico para implementación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Recursos para la implementación de Buenas Prácticas Ganaderas (BPG)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Riesgos laborales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Elementos de protección personal requeridos',
            hash: 't_5_2',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_001_72312161.zip',
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
      tema: 'Buenas prácticas ganaderas en la producción porcina.',
      referencia:
        'TvAgro [TvAgro]. (2017, 9 de mayo). Buenas Prácticas en Granjas Porcícolas - TvAgro por Juan Gonzalo Ángel [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=loi8l4HL7gM',
    },
    {
      tema: 'Normativa',
      referencia:
        'El mundo del campo. [El Mundo del Campo]. 2018, 11 de marzo). Buenas Prácticas Porcícolas ICA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6aR6wKV7fgo',
    },
    {
      tema: 'Implementación de las BPG en la Producción Porcina',
      referencia:
        'SENA Instructor Pecuario. [Instructor Pecuario]. (2020, 17 de abril). Sistemas de Producción y Tipos de Granjas Porcinas. Fonseca, Guajira. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fRJwu3_Pjo4',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'es el estado físico y mental de los animales con relación a las condiciones en las que viven y mueren. (Resolución Instituto Colombiano Agropecuario ICA 68167 del 2020).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'son todas aquellas medidas sanitarias, procedimientos técnicos y normas de manejo que se aplican de forma permanente, con el propósito de prevenir la entrada y salida de agentes infectocontagiosos en la unidad de producción primaria. (Resolución Instituto Colombiano Agropecuario ICA 68167 del 2020).',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'prácticas recomendadas con el propósito de disminuir riesgos físicos, químicos y biológicos en la producción primaria de alimentos de origen animal que puedan generar riesgo a las personas promoviendo la sanidad, el bienestar animal y la protección del medio ambiente. (Resolución Instituto Colombiano Agropecuario ICA 68167 del 2020).',
    },
    {
      termino: 'Buenas Prácticas en el Uso de Medicamentos Veterinarios (BPMV)',
      significado:
        'se define como el cumplimiento de los métodos de empleo oficialmente recomendados para los medicamentos de uso veterinario, de conformidad con la información consignada en el rotulado de los productos aprobados, incluido el tiempo de retiro, cuando los mismos se utilizan bajo condiciones prácticas. (Resolución Instituto Colombiano Agropecuario ICA 68167 del 2020).',
    },
    {
      termino: 'Condiciones laborales',
      significado:
        'capacitación del personal, seguridad e higiene del personal y los animales que se manejan (Guía de Buenas Prácticas Pecuarias en la Producción de Leche, 2016).',
    },
    {
      termino: 'Inocuidad',
      significado:
        'característica o atributo de un alimento, que determina que el consumo del mismo no causa riesgo para la salud del consumidor. (Resolución Instituto Colombiano Agropecuario ICA 68167 del 2020).',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina. (Sanidad e Inocuidad, Indispensables en la Seguridad Alimentaria, 2017).',
    },
    {
      termino: 'Manejo',
      significado:
        'considera todas aquellas prácticas que promueven la productividad, bienestar general y salud de los animales e incluye el manejo de subproductos y residuos. (Implementación de Buenas Prácticas Ganaderas: principios básicos, 2018).',
    },
    {
      termino: 'Registro',
      significado:
        'documento que presenta los resultados obtenidos o proporciona evidencia de actividades desempeñadas (Guía de Buenas Prácticas Pecuarias en la Producción de Leche, 2016).',
    },
    {
      termino: 'Riesgo',
      significado:
        'es la probabilidad de que un peligro se presente. (Guía de Buenas Prácticas Pecuarias en la Producción de Leche, 2016).',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'es el conjunto de acciones y procedimientos que permiten la identificación, registro y seguimiento a todos los eventos de la vida del animal, desde su nacimiento hasta el consumidor final. (Implementación de Buenas Prácticas Ganaderas: principios básicos, 2018).',
    },
  ],
  referencias: [
    {
      referencia: 'Asociación PORKCOLOMBIA (2020) Buenas Prácticas Porcícolas.',
      link:
        'https://porkcolombia.co/wp-content/uploads/2020/12/BUENAS-PR%C3%81CTICAS-PORC%C3%8DCOLAS-Porkcolombia.pdf',
    },
    {
      referencia: 'ICA (2021) Censo Pecuario Nacional.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/epidemiologia-veterinaria/censos-2016/censo-2018',
    },
    {
      referencia:
        'Secretaría de Agricultura y Desarrollo Rural (2017) Sanidad e inocuidad, indispensables en la seguridad alimentaria.',
      link:
        'https://www.gob.mx/agricultura/es/articulos/sanidad-e-inocuidad-indispensables-en-la-seguridad-alimentaria',
    },
    {
      referencia:
        'Beyli M. Eugenia, Brunori Jorge, Campagna Daniel, Cottura Germán, Crespo Diana, Denegri David, Ducommun Luz, Faner Claudio, Figueroa María Eugenia, Giovannini Fabiana, Franco Raúl, Goenaga Pedro, Lomello Viviana, Lloveras Marcela, Millares Patricia, Odetto Silvina, Panichelli Dario, Pietrantonio Julio, Rodríguez Fazzone Marcos, Suárez Rubén, Spiner Naum, Zielinsky Gustavo (2012) Buenas Prácticas Pecuarias (BPP) para la producción y comercialización porcina familiar, Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO, Ministerio de Agricultura, Ganadería y Pesca de la Nación - MAGyP, Instituto Nacional de Tecnología Agropecuaria - INTA. (2012).',
      link:
        'https://www.produccion-animal.com.ar/produccion_porcina/00-produccion_porcina_general/280-a-i2094s.pdf',
    },
    {
      referencia:
        'Garzón Guzmán Camilo Steven, Sánchez Torres Jesica Tatiana (2020) Caracterización del Sistema de Producción Porcina de la Unidad Académica el Remanso. Universidad de Ciencias Aplicadas y Ambientales U.D.C.A. Facultad de Medicina Veterinaria y Zootecnia.',
      link:
        'https://repository.udca.edu.co/bitstream/handle/11158/3887/CARACTERIZACI%C3%93N%20DEL%20SISTEMA%20DE%20PRODUCCI%C3%93N%20POCINA%20DE%20LA%20UNIDAD%20ACAD%C3%89MICA%20EL%20REMANSO%20%281%29.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Díaz, Carlos A, Rodríguez, María N, Vera, Víctor J, Ramírez, Gloria, Casas, Gloria A, & Mogollón, José D. (2011). Caracterización de los sistemas de producción porcina en las principales regiones porcicolas colombianas. Revista Colombiana de Ciencias Pecuarias.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-06902011000200005&lng=en&tlng=es.',
    },
    {
      referencia:
        'Rodríguez Sánchez Luz Aida, Ronderos Corredor Tania Catalina (2019) Porkcolombia - Alimentando la vida, Pontificia Universidad Javeriana.',
      link:
        'https://repository.javeriana.edu.co/bitstream/handle/10554/43744/PORKCOLOMBIA%20Caso%20de%20Estudio.pdf?sequence=4&isAllowed=y#:~:text=Historia%20de%20la%20porcicultura%20en,aceler%C3%B3%20y%20transform%C3%B3%20la%20porcicultura.',
    },
    {
      referencia: 'Informe “OCDE-FAO Perspectivas Agrícolas 2021‑2030.',
      link:
        'https://www.oecd-ilibrary.org/sites/47a9fa44-es/1/3/6/index.html?itemId=/content/publication/47a9fa44-es&_csp_=5aa59bb3112451f7b7fb3071998338c3&itemIGO=oecd&itemContentType=book',
    },
    {
      referencia: 'Análisis de la industria Porcina en Latinoamérica (2021).',
      link:
        'https://www.pic.com/wp-content/uploads/sites/3/2022/02/Analisis-de-la-Industria-Porcina-en-Latinoamerica-T4-2021.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA (2016) Las buenas prácticas ganaderas en la producción porcícola.',
      link:
        'https://www.ica.gov.co/noticias/todas/2016/las-buenas-practicas-ganaderas-en-la-produccion-po.aspx',
    },
    {
      referencia:
        'Cano Vásquez Alejandra María (2019) Buenas prácticas porcícolas y su impacto en productividad en tres granjas porcícolas del norte de Antioquía. Corporación Universitaria Lasallista, Facultad de Ciencias Administrativas y Agropecuarias.',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/2685/1/BPP_Impacto_productividad_Antioquia_1.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lady Johanna Cruz',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario la Granja',
        },
        {
          nombre: 'Gloria Lida Álzate Suarez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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

import { Suspense, lazy } from 'react';
import { Card } from 'components';
import { Loader } from 'components/Loader';
import style from './Results.module.scss';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const LazyRenderList = lazy(() => import('components/RenderList'));

const results = [
  {
    id: 'MLA1340307042',
    title: 'Hermosa Casa En Venta ',
    condition: 'used',
    thumbnail_id: '690092-MLA53693794831_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://casa.mercadolibre.com.ar/MLA-1340307042-hermosa-casa-en-venta-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_690092-MLA53693794831_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 1,
    price: 280000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-09T04:00:00.000Z',
    seller: {
      id: 582093714,
      nickname: 'CREABIENESRAICESSA',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2020-06-09T16:07:35.000-04:00',
      tags: ['real_estate_agency', 'messages_as_seller'],
      car_dealer_logo: '',
      permalink: 'http://perfil.mercadolibre.com.ar/CREABIENESRAICESSA',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-C',
        name: 'Capital Federal'
      },
      city: {
        id: 'TUxBQlBBTDI1MTVa',
        name: 'Palermo'
      }
    },
    address: {
      state_id: 'TUxBUENBUGw3M2E1',
      state_name: 'Capital Federal',
      city_id: 'TUxBQ0NBUGZlZG1sYQ',
      city_name: 'Capital Federal'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '180 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 180,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '180 m²',
            struct: {
              number: 180,
              unit: 'm²'
            },
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '6',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '6',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '260 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 260,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '260 m²',
            struct: {
              number: 260,
              unit: 'm²'
            },
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'Virgilio 3100',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TUxBQlZJTDM3Mzda',
        name: 'Villa Real'
      },
      city: {
        id: 'TUxBQ0NBUGZlZG1sYQ',
        name: 'Capital Federal'
      },
      state: {
        id: 'TUxBUENBUGw3M2E1',
        name: 'Capital Federal'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -34.6127357,
      longitude: -58.528785
    },
    seller_contact: {
      contact: 'Rene Vera CUCICBA 6778 / CSI 5848',
      other_info: 'RE/MAX Crea',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1341130219',
    title: 'Casa Muy Soleada De 4 Ambientes En El Bosque P Ramos',
    condition: 'not_specified',
    thumbnail_id: '605745-MLA53709892269_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink:
      'https://casa.mercadolibre.com.ar/MLA-1341130219-casa-muy-soleada-de-4-ambientes-en-el-bosque-p-ramos-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA50278',
    domain_id: 'MLA-HOUSES_FOR_VACATION_RENTAL',
    thumbnail: 'http://http2.mlstatic.com/D_605745-MLA53709892269_022023-I.jpg',
    currency_id: 'ARS',
    order_backend: 2,
    price: 20000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2023-05-10T04:00:22.000Z',
    seller: {
      id: 215025931,
      nickname: 'PAAN2619248',
      car_dealer: false,
      real_estate_agency: false,
      _: false,
      registration_date: '2016-05-23T20:44:07.000-04:00',
      tags: ['normal', 'credits_profile', 'messages_as_seller'],
      car_dealer_logo: '',
      permalink: 'http://perfil.mercadolibre.com.ar/PAAN2619248',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '60 months',
            completed: 0
          },
          claims: {
            period: '60 months',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '60 months',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '60 months',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-B',
        name: 'Buenos Aires'
      },
      city: {
        id: 'TUxBQ01BUjU2MGMw',
        name: 'Mar del Plata'
      }
    },
    address: {
      state_id: 'TUxBUENPU2ExMmFkMw',
      state_name: 'Bs.As. Costa Atlántica',
      city_id: 'TUxBQ01BUjU2MGMw',
      city_name: 'Mar del Plata'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 7398128016960827
          }
        ],
        source: 7398128016960827,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '170 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 170,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '170 m²',
            struct: {
              number: 170,
              unit: 'm²'
            },
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 7398128016960827
          }
        ],
        source: 7398128016960827,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '600 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 600,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '600 m²',
            struct: {
              number: 600,
              unit: 'm²'
            },
            source: 1505
          }
        ],
        source: 1505,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242074',
        value_name: 'Alquiler temporal',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242074',
            name: 'Alquiler temporal',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'guaycurues  SN',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TUxBQlBFUjczOTYxOA',
        name: 'Bosques de Peralta Ramos'
      },
      city: {
        id: 'TUxBQ01BUjU2MGMw',
        name: 'Mar del Plata'
      },
      state: {
        id: 'TUxBUENPU2ExMmFkMw',
        name: 'Bs.As. Costa Atlántica'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -38.0898124,
      longitude: -57.5740992
    },
    seller_contact: {
      contact: '',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1341061642',
    title: '°°°san Ignacio Village-duplex Premium 3 Dor Lote Central-listo Para Mudarte-gas Natural°°°',
    condition: 'new',
    thumbnail_id: '945489-MLA53705433278_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink:
      'https://casa.mercadolibre.com.ar/MLA-1341061642-san-ignacio-village-duplex-premium-3-dor-lote-central-listo-para-mudarte-gas-natural-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_945489-MLA53705433278_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 3,
    price: 119900,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-09T04:00:00.000Z',
    seller: {
      id: 446604832,
      nickname: 'CONEXAR INMUEBLES',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2019-06-24T12:04:44.000-04:00',
      tags: ['real_estate_agency', 'nsm_medium', 'mshops', 'messages_as_seller'],
      car_dealer_logo: '',
      home_image_url:
        'https://http2.mlstatic.com/storage/vis-accounts/446604832_home-e835a659-b2fe-4d79-809a-d7fad8398c3e.png',
      permalink: 'http://perfil.mercadolibre.com.ar/CONEXAR+INMUEBLES',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-X',
        name: 'Córdoba'
      },
      city: {
        id: 'TUxBQ0NBUGNiZGQx',
        name: 'Córdoba'
      }
    },
    address: {
      state_id: 'TUxBUENPUmFkZGIw',
      state_name: 'Córdoba',
      city_id: 'TUxBQ0NBUGNiZGQx',
      city_name: 'Córdoba'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'HAS_TELEPHONE_LINE',
        name: 'Línea telefónica',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '130 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 130,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '130 m²',
            struct: {
              number: 130,
              unit: 'm²'
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '6',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '6',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '180 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 180,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '180 m²',
            struct: {
              unit: 'm²',
              number: 180
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'San Ignacio Village',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TVhYTWFuYW50aWFsZXNUVXhCUTBOQlVHTmlaR',
        name: 'Manantiales'
      },
      city: {
        id: 'TUxBQ0NBUGNiZGQx',
        name: 'Córdoba'
      },
      state: {
        id: 'TUxBUENPUmFkZGIw',
        name: 'Córdoba'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -31.4857742,
      longitude: -64.2543152
    },
    seller_contact: {
      contact: 'Conexar Inmuebles',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1341736378',
    title: 'Casas Venta Palermo',
    condition: 'new',
    thumbnail_id: '991313-MLA53732135714_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://casa.mercadolibre.com.ar/MLA-1341736378-casas-venta-palermo-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_991313-MLA53732135714_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 4,
    price: 3500000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: 2810,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-10T04:00:00.000Z',
    seller: {
      id: 213570822,
      nickname: 'MIRANDA BOSCH',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2016-05-09T17:51:33.000-04:00',
      tags: ['real_estate_agency', 'brand', 'messages_as_seller'],
      car_dealer_logo: '',
      permalink: 'http://perfil.mercadolibre.com.ar/MIRANDA+BOSCH',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-C',
        name: 'Capital Federal'
      },
      city: {
        id: null,
        name: 'Recoleta'
      }
    },
    address: {
      state_id: 'TUxBUENBUGw3M2E1',
      state_name: 'Capital Federal',
      city_id: 'TUxBQ0NBUGZlZG1sYQ',
      city_name: 'Capital Federal'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 5031406389580791
          }
        ],
        source: 5031406389580791,
        value_type: 'boolean'
      },
      {
        id: 'HAS_TELEPHONE_LINE',
        name: 'Línea telefónica',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 5031406389580791
          }
        ],
        source: 5031406389580791,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 5031406389580791
          }
        ],
        source: 5031406389580791,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '350 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 350,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '350 m²',
            struct: {
              number: 350,
              unit: 'm²'
            },
            source: 5031406389580791
          }
        ],
        source: 5031406389580791,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 5031406389580791
          }
        ],
        source: 5031406389580791,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '0',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '0',
            struct: null,
            source: 5031406389580791
          }
        ],
        source: 5031406389580791,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '400 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 400,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '400 m²',
            struct: {
              unit: 'm²',
              number: 400
            },
            source: 5031406389580791
          }
        ],
        source: 5031406389580791,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'Ombú al 3000',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TUxBQlBBTDI1MTVa',
        name: 'Palermo'
      },
      city: {
        id: 'TUxBQ0NBUGZlZG1sYQ',
        name: 'Capital Federal'
      },
      state: {
        id: 'TUxBUENBUGw3M2E1',
        name: 'Capital Federal'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -34.576995,
      longitude: -58.4009288
    },
    seller_contact: {
      contact: 'Miranda Bosch - Real Estate & Art',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1340417622',
    title: 'Venta Chalet De 4 Ambientes Con Amplio Parque Y Quincho - Villa Primera Mar Del Plata',
    condition: 'used',
    thumbnail_id: '773450-MLA53704021791_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink:
      'https://casa.mercadolibre.com.ar/MLA-1340417622-venta-chalet-de-4-ambientes-con-amplio-parque-y-quincho-villa-primera-mar-del-plata-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_773450-MLA53704021791_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 5,
    price: 160000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: 2973,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-09T04:00:00.000Z',
    seller: {
      id: 142550392,
      nickname: 'TORMES PROPIEDADES',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2013-07-22T09:25:24.000-04:00',
      tags: ['real_estate_agency', 'nsm_high', 'brand', 'mshops', 'credits_profile', 'messages_as_seller'],
      car_dealer_logo: '',
      home_image_url:
        'https://http2.mlstatic.com/storage/vis-accounts/142550392_home-1ef8ba68-0fc8-4eca-8695-bd202e1fcc5a.png',
      permalink: 'http://perfil.mercadolibre.com.ar/TORMES+PROPIEDADES',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-B',
        name: 'Buenos Aires'
      },
      city: {
        id: 'TUxBQ01BUjU2MGMw',
        name: 'Mar del Plata'
      }
    },
    address: {
      state_id: 'TUxBUENPU2ExMmFkMw',
      state_name: 'Bs.As. Costa Atlántica',
      city_id: 'TUxBQ01BUjU2MGMw',
      city_name: 'Mar del Plata'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'HAS_TELEPHONE_LINE',
        name: 'Línea telefónica',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '173 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 173,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '173 m²',
            struct: {
              unit: 'm²',
              number: 173
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '1',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '1',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '475 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 475,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '475 m²',
            struct: {
              unit: 'm²',
              number: 475
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'Uruguay al 400',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {},
      city: {
        id: 'TUxBQ01BUjU2MGMw',
        name: 'Mar del Plata'
      },
      state: {
        id: 'TUxBUENPU2ExMmFkMw',
        name: 'Bs.As. Costa Atlántica'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -37.9755374,
      longitude: -57.5661619
    },
    seller_contact: {
      contact: 'TORMES',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1344471330',
    title: 'Alquiler Temporario Casa Con Jardin Para 4  Personas - Costa Del Este Disponible  Desde 21/2',
    condition: 'used',
    thumbnail_id: '859828-MLA53765081952_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink:
      'https://casa.mercadolibre.com.ar/MLA-1344471330-alquiler-temporario-casa-con-jardin-para-4-personas-costa-del-este-disponible-desde-212-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA50278',
    domain_id: 'MLA-HOUSES_FOR_VACATION_RENTAL',
    thumbnail: 'http://http2.mlstatic.com/D_859828-MLA53765081952_022023-I.jpg',
    currency_id: 'ARS',
    order_backend: 6,
    price: 19000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-12T04:00:00.000Z',
    seller: {
      id: 516385961,
      nickname: 'GRUPOYOUNG PROPIEDADES',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2020-02-21T13:59:36.000-04:00',
      tags: ['real_estate_agency', 'nsm_low', 'mshops', 'messages_as_seller'],
      car_dealer_logo: '',
      permalink: 'http://perfil.mercadolibre.com.ar/GRUPOYOUNG+PROPIEDADES',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-C',
        name: 'Capital Federal'
      },
      city: {
        id: null,
        name: 'CABA'
      }
    },
    address: {
      state_id: 'TUxBUENPU2ExMmFkMw',
      state_name: 'Bs.As. Costa Atlántica',
      city_id: 'TUxBQ0NPUzRjYmM1',
      city_name: 'Costa del Este'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '2',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '60 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 60,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '60 m²',
            struct: {
              number: 60,
              unit: 'm²'
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '1',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '1',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '554 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 554,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '554 m²',
            struct: {
              number: 554,
              unit: 'm²'
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242074',
        value_name: 'Alquiler temporal',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242074',
            name: 'Alquiler temporal',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'Av 3 1047',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {},
      city: {
        id: 'TUxBQ0NPUzRjYmM1',
        name: 'Costa del Este'
      },
      state: {
        id: 'TUxBUENPU2ExMmFkMw',
        name: 'Bs.As. Costa Atlántica'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -36.6078285,
      longitude: -56.7028643
    },
    seller_contact: {
      contact: 'GRUPO YOUNG',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1345000734',
    title: 'Casa En Venta En Costa Esmeralda',
    condition: 'new',
    thumbnail_id: '753993-MLA53779445657_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://casa.mercadolibre.com.ar/MLA-1345000734-casa-en-venta-en-costa-esmeralda-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_753993-MLA53779445657_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 7,
    price: 270000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: 3039,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-13T04:00:00.000Z',
    seller: {
      id: 475301249,
      nickname: 'GUSTAVO.NOGUEIRA.REAL.ESTATE',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2019-09-29T18:19:16.000-04:00',
      tags: ['real_estate_agency', 'brand', 'mshops', 'messages_as_seller'],
      car_dealer_logo: '',
      home_image_url: 'https://resources.mlstatic.com/classifieds_accounts/MLA_real_estate_agency/475301249_home.jpg',
      permalink: 'http://perfil.mercadolibre.com.ar/GUSTAVO.NOGUEIRA.REAL.ESTATE',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 1,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 1,
            positive: 0
          },
          total: 1
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-C',
        name: 'Capital Federal'
      },
      city: {
        id: 'TUxBQkNBQjM4MDda',
        name: 'Caballito'
      }
    },
    address: {
      state_id: 'TUxBUENPU2ExMmFkMw',
      state_name: 'Bs.As. Costa Atlántica',
      city_id: 'TUxBQ0NPU3RhZXNt',
      city_name: 'Costa Esmeralda'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'HAS_TELEPHONE_LINE',
        name: 'Línea telefónica',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '220 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 220,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '220 m²',
            struct: {
              unit: 'm²',
              number: 220
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '2',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '896 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 896,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '896 m²',
            struct: {
              number: 896,
              unit: 'm²'
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'Senderos III',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {},
      city: {
        id: 'TUxBQ0NPU3RhZXNt',
        name: 'Costa Esmeralda'
      },
      state: {
        id: 'TUxBUENPU2ExMmFkMw',
        name: 'Bs.As. Costa Atlántica'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -37.0003612,
      longitude: -56.7999669
    },
    seller_contact: {
      contact: 'N&C Real Estate - Nogueira',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1340482864',
    title: 'Casa 3 Dorm 73 E/120 Y 121. Vivani Propiedades',
    condition: 'used',
    thumbnail_id: '836858-MLA53707526751_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://casa.mercadolibre.com.ar/MLA-1340482864-casa-3-dorm-73-e120-y-121-vivani-propiedades-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_836858-MLA53707526751_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 8,
    price: 125000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-10T04:00:00.000Z',
    seller: {
      id: 232110993,
      nickname: 'VIVANI PROPIEDADES',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2016-10-21T10:53:55.000-04:00',
      tags: ['real_estate_agency', 'messages_as_seller'],
      car_dealer_logo: '',
      home_image_url:
        'https://http2.mlstatic.com/storage/vis-accounts/232110993_home-365a1e57-f813-401a-822d-b15350282bbd.png',
      permalink: 'http://perfil.mercadolibre.com.ar/VIVANI+PROPIEDADES',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-B',
        name: 'Buenos Aires'
      },
      city: {
        id: 'TUxBQ0xBUGxhdGE',
        name: 'La Plata'
      }
    },
    address: {
      state_id: 'TUxBUEdSQXJlMDNm',
      state_name: 'Bs.As. G.B.A. Sur',
      city_id: 'TUxBQ0xBUGxhdGE',
      city_name: 'La Plata'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'boolean'
      },
      {
        id: 'HAS_TELEPHONE_LINE',
        name: 'Línea telefónica',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '165.07 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 165.07,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '165.07 m²',
            struct: {
              unit: 'm²',
              number: 165.07
            },
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '249.07 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 249.07,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '249.07 m²',
            struct: {
              number: 249.07,
              unit: 'm²'
            },
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 1441378210517427
          }
        ],
        source: 1441378210517427,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: '73 77. Entre 120 y 121',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TVhYVmlsbGEgRWx2aXJhVFV4QlEweEJVR3hoZ',
        name: 'Villa Elvira'
      },
      city: {
        id: 'TUxBQ0xBUGxhdGE',
        name: 'La Plata'
      },
      state: {
        id: 'TUxBUEdSQXJlMDNm',
        name: 'Bs.As. G.B.A. Sur'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -34.9199666,
      longitude: -57.9134255
    },
    seller_contact: {
      contact: 'VIVANI PROPIEDADES',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1343659868',
    title: 'Venta Casa Barrio Cerrado Prados Del Oeste Moreno',
    condition: 'new',
    thumbnail_id: '685832-MLA53755058788_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://casa.mercadolibre.com.ar/MLA-1343659868-venta-casa-barrio-cerrado-prados-del-oeste-moreno-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_685832-MLA53755058788_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 9,
    price: 249000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: 2777,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-11T04:00:00.000Z',
    seller: {
      id: 487505400,
      nickname: 'SARROPUCHETA PROPIEDADES',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2019-11-08T13:05:02.000-04:00',
      tags: ['real_estate_agency', 'brand', 'messages_as_seller'],
      car_dealer_logo: '',
      home_image_url:
        'https://resources.mlstatic.com/classifieds_accounts/MLA_real_estate_agency/487505400_home_v2.jpg',
      permalink: 'http://perfil.mercadolibre.com.ar/SARROPUCHETA+PROPIEDADES',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-B',
        name: 'Buenos Aires'
      },
      city: {
        id: 'TUxBQ01PUmI1NTBj',
        name: 'Morón'
      }
    },
    address: {
      state_id: 'TUxBUEdSQWVmNTVm',
      state_name: 'Bs.As. G.B.A. Oeste',
      city_id: 'TUxBQ01PUmViMTE3',
      city_name: 'Moreno'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'HAS_TELEPHONE_LINE',
        name: 'Línea telefónica',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '142 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 142,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '142 m²',
            struct: {
              number: 142,
              unit: 'm²'
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '2',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '2',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '4',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '4',
            struct: null,
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '804 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 804,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '804 m²',
            struct: {
              unit: 'm²',
              number: 804
            },
            source: 4709975701260268
          }
        ],
        source: 4709975701260268,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230284',
        value_name: 'Nuevo',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230284',
            name: 'Nuevo',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'Gral. Hornos al 2800',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TUxBQlBSQTQyNDU5MA',
        name: 'Prados del Oeste'
      },
      city: {
        id: 'TUxBQ01PUmViMTE3',
        name: 'Moreno'
      },
      state: {
        id: 'TUxBUEdSQWVmNTVm',
        name: 'Bs.As. G.B.A. Oeste'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -34.5940699,
      longitude: -58.829497
    },
    seller_contact: {
      contact: 'Sarro Pucheta Propiedades',
      other_info: '',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  },
  {
    id: 'MLA1342797963',
    title: 'Venta De Casa 6amb Jardin Y Pileta En Martinez',
    condition: 'used',
    thumbnail_id: '876016-MLA53734835206_022023',
    catalog_product_id: null,
    listing_type_id: 'gold_premium',
    permalink: 'https://casa.mercadolibre.com.ar/MLA-1342797963-venta-de-casa-6amb-jardin-y-pileta-en-martinez-_JM',
    buying_mode: 'classified',
    site_id: 'MLA',
    category_id: 'MLA401685',
    domain_id: 'MLA-INDIVIDUAL_HOUSES_FOR_SALE',
    thumbnail: 'http://http2.mlstatic.com/D_876016-MLA53734835206_022023-I.jpg',
    currency_id: 'USD',
    order_backend: 10,
    price: 378000,
    original_price: null,
    sale_price: null,
    sold_quantity: 0,
    available_quantity: 1,
    official_store_id: null,
    use_thumbnail_id: true,
    accepts_mercadopago: false,
    tags: ['good_quality_thumbnail'],
    shipping: {
      logistic_type: 'not_specified',
      mode: 'not_specified',
      store_pick_up: false,
      free_shipping: false,
      tags: [],
      promise: null
    },
    stop_time: '2024-02-13T04:00:00.000Z',
    seller: {
      id: 233505923,
      nickname: 'UNOREMAX',
      car_dealer: false,
      real_estate_agency: true,
      _: false,
      registration_date: '2016-11-04T11:03:26.000-04:00',
      tags: ['real_estate_agency', 'messages_as_seller'],
      car_dealer_logo: '',
      permalink: 'http://perfil.mercadolibre.com.ar/UNOREMAX',
      seller_reputation: {
        level_id: null,
        power_seller_status: null,
        transactions: {
          canceled: 0,
          completed: 0,
          period: 'historic',
          ratings: {
            negative: 0,
            neutral: 0,
            positive: 0
          },
          total: 0
        },
        metrics: {
          sales: {
            period: '365 days',
            completed: 0
          },
          claims: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          delayed_handling_time: {
            period: '365 days',
            rate: 0,
            value: 0
          },
          cancellations: {
            period: '365 days',
            rate: 0,
            value: 0
          }
        }
      }
    },
    seller_address: {
      comment: '',
      address_line: '',
      zip_code: '',
      id: null,
      latitude: null,
      longitude: null,
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      state: {
        id: 'AR-C',
        name: 'Capital Federal'
      },
      city: {
        id: 'TUxBQkNPTDI3NDNa',
        name: 'Colegiales'
      }
    },
    address: {
      state_id: 'TUxBUEdSQWU4ZDkz',
      state_name: 'Bs.As. G.B.A. Norte',
      city_id: 'TUxBQ1NBTjg4ZmJk',
      city_name: 'San Isidro'
    },
    attributes: [
      {
        id: 'HAS_AIR_CONDITIONING',
        name: 'Aire acondicionado',
        value_id: '242085',
        value_name: 'Sí',
        attribute_group_id: 'COMOYAMEN',
        attribute_group_name: 'Comodidades y amenities',
        value_struct: null,
        values: [
          {
            id: '242085',
            name: 'Sí',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'boolean'
      },
      {
        id: 'BEDROOMS',
        name: 'Dormitorios',
        value_id: null,
        value_name: '5',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '5',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number'
      },
      {
        id: 'COVERED_AREA',
        name: 'Superficie cubierta',
        value_id: null,
        value_name: '289 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 289,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '289 m²',
            struct: {
              unit: 'm²',
              number: 289
            },
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number_unit'
      },
      {
        id: 'FULL_BATHROOMS',
        name: 'Baños',
        value_id: null,
        value_name: '3',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '3',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number'
      },
      {
        id: 'ROOMS',
        name: 'Ambientes',
        value_id: null,
        value_name: '6',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: null,
        values: [
          {
            id: null,
            name: '6',
            struct: null,
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number'
      },
      {
        id: 'TOTAL_AREA',
        name: 'Superficie total',
        value_id: null,
        value_name: '549 m²',
        attribute_group_id: 'FIND',
        attribute_group_name: 'Ficha técnica',
        value_struct: {
          number: 549,
          unit: 'm²'
        },
        values: [
          {
            id: null,
            name: '549 m²',
            struct: {
              number: 549,
              unit: 'm²'
            },
            source: 5387223166827464
          }
        ],
        source: 5387223166827464,
        value_type: 'number_unit'
      },
      {
        id: 'OPERATION',
        name: 'Operación',
        value_id: '242075',
        value_name: 'Venta',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242075',
            name: 'Venta',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'PROPERTY_TYPE',
        name: 'Inmueble',
        value_id: '242060',
        value_name: 'Casa',
        attribute_group_id: 'MAIN',
        attribute_group_name: 'Principales',
        value_struct: null,
        values: [
          {
            id: '242060',
            name: 'Casa',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condición del ítem',
        value_id: '2230581',
        value_name: 'Usado',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '2230581',
            name: 'Usado',
            struct: null,
            source: 1
          }
        ],
        source: 1,
        value_type: 'list'
      },
      {
        id: 'WITH_VIRTUAL_TOUR',
        name: 'Con tour virtual',
        value_id: '242084',
        value_name: 'No',
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Otros',
        value_struct: null,
        values: [
          {
            id: '242084',
            name: 'No',
            struct: null,
            source: 942334329061206
          }
        ],
        source: 942334329061206,
        value_type: 'boolean'
      }
    ],
    location: {
      address_line: 'General Paunero 1500',
      zip_code: '',
      subneighborhood: null,
      neighborhood: {
        id: 'TUxBQk1BUjExNDJa',
        name: 'Martínez'
      },
      city: {
        id: 'TUxBQ1NBTjg4ZmJk',
        name: 'San Isidro'
      },
      state: {
        id: 'TUxBUEdSQWU4ZDkz',
        name: 'Bs.As. G.B.A. Norte'
      },
      country: {
        id: 'AR',
        name: 'Argentina'
      },
      latitude: -34.4840182,
      longitude: -58.4988157
    },
    seller_contact: {
      contact: 'RMX 1 SAS - Lucas Norman CUCICBA 8008 / CMCPSI 6743',
      other_info: 'RE/MAX Uno',
      webpage: '',
      area_code: '',
      phone: '',
      area_code2: '',
      phone2: '',
      email: ''
    },
    installments: null,
    winner_item_id: null,
    discounts: null,
    promotions: [],
    inventory_id: null
  }
];

export const ResultsView = () => {
  const cssClassCard = {
    classCard: style.card__text,
    classTag: style.card__tags,
    classTitle: style.card__title,
    classPrice: style.card__price
  };
  return (
    <section className={style.results__section}>
      <ErrorBoundary>
        <Suspense fallback={<Loader loadingText="Loading..." />}>
          <LazyRenderList
            className={style.results__list}
            searchItems={results}
            render={(item: any) => (
              <Card item={item} className={style.results__card} cssClassCard={cssClassCard}>
                <Card.CardImg title={item.title} imgSrc={item.thumbnail} className={style.card__img} />
                <Card.PriceAndTitle />
              </Card>
            )}
          />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

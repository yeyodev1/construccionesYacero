import { defineStore } from 'pinia';

import type { Project } from '@/typings/Project';

import fachadaPosterior from '@/assets/projects/fachadaPosterior.png';
import casaPlaya from '@/assets/projects/casaPlaya.png';
import casa from '@/assets/projects/casa.png';

import contenedor from '@/assets/projects/contenedor.png';
import porton from '@/assets/projects/porton.png';
import galpon from '@/assets/services/galpon.png';

interface RootState {
  projects: Project[],
  services: Service[],
  services2: Service[],
}

export const useProjectStore = defineStore('useProjectStore', {
  state: (): RootState => ({
    projects: [
      {
        images: [
          casa,
          fachadaPosterior,
          casaPlaya,
        ],
        title: 'Proyectos de viviendas',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-houses'
      },
      {
        images: [
          galpon,
          porton,
          contenedor
        ],
        title: 'Estructuras de edificios y galpones',
        description: [
          'Nuestra empresa de construcción se especializa en la construcción de comedores. Tenemos una amplia experiencia en el diseño y la construcción de comedores de todos los tamaños y presupuestos. Podemos construir un comedor que se adapte a las necesidades específicas de su empresa.',
          'Nuestros portones están diseñados para ser duraderos, seguros y atractivos. Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestros portones sean resistentes a la intemperie y fáciles de mantener.',
        ],
        id: '2-structures'
      },
    ],
    services: [
      {
        service: 'Instalaciones Sanitarias'
      },
      {
        service: 'Acabados finales'
      },
      {
        service: 'Cimentaciones'
      },
      {
        service: 'Empacadoras'
      },
      {
        service: 'Paredes'
      },
    ],
    services2: [
      {
        service: 'Sistemas contra incendio'
      },
      {
        service: 'Estaciones de bombeo'
      },
      {
        service: 'Retocamiento'
      },
      {
        service: 'Vivienda'
      },
      {
        service: 'Cisternas'
      },
    ]
  }),

})

export default useProjectStore;
import { defineStore } from 'pinia';

import type { Project } from '@/typings/Project';
import casa from '@/assets/projects/casa.png';
import fachadaPosterior from '@/assets/projects/fachadaPosterior.png';
import casaPlaya from '@/assets/projects/casaPlaya.png';
import porton from '@/assets/projects/porton.png';
import comedor from '@/assets/projects/comedor.png';
import galpon from '@/assets/services/galpon.png';

interface RootState {
  projects: Project[],
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
          comedor,
          porton
        ],
        title: 'Estrucuras de edificios y galpones',
        description: [
          'Nuestra empresa de construcción se especializa en la construcción de comedores. Tenemos una amplia experiencia en el diseño y la construcción de comedores de todos los tamaños y presupuestos. Podemos construir un comedor que se adapte a las necesidades específicas de su empresa.',
          'Nuestros portones están diseñados para ser duraderos, seguros y atractivos. Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestros portones sean resistentes a la intemperie y fáciles de mantener.',
        ],
        id: '2-structures'
      },
    ]
  }),

})

export default useProjectStore;
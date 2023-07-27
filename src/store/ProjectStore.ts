import { defineStore } from 'pinia';

import type { Project } from '@/typings/Project';

import fachadaPosterior from '@/assets/projects/fachadaPosterior.png';
import casaPlaya from '@/assets/projects/casaPlaya.png';
import casa from '@/assets/projects/casa.png';


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
        title: 'Super proyecto de la muerte',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-houses',
        location: 'Urdesa central'
      },
      {
        images: [
          casa,
          fachadaPosterior,
          casaPlaya,
        ],
        title: 'Super proyecto de la muerte',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-houses',
        location: 'Urdesa central'
      },
      {
        images: [
          casa,
          fachadaPosterior,
          casaPlaya,
        ],
        title: 'Super proyecto de la muerte',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-houses',
        location: 'Urdesa central'
      },
      {
        images: [
          casa,
          fachadaPosterior,
          casaPlaya,
        ],
        title: 'Super proyecto de la muerte',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-houses',
        location: 'Urdesa central'
      },
      {
        images: [
          casa,
          fachadaPosterior,
          casaPlaya,
        ],
        title: 'Super proyecto de la muerte',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-houses',
        location: 'Urdesa central'
      },
    ],
  }),

})

export default useProjectStore;
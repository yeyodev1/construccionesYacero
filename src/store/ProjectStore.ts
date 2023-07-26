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
        title: 'Super proyecto de la muerte',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-houses',
        location: 'La casa de tu mama'
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
        location: 'La casa de tu mama'
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
        location: 'La casa de tu mama'
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
        location: 'La casa de tu mama'
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
        location: 'La casa de tu mama'
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
        service: 'Cisternas'
      },
      {
        service: 'Vivienda'
      },
    ]
  }),

})

export default useProjectStore;
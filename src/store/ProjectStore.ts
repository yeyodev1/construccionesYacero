import { defineStore } from 'pinia';

import type { Project } from '@/typings/Project';
// import casa from '@/assets/projects/comedor.png';
// import contenedor from '@/assets/projects/contenedor.png';
// import fachadaPosterior from '@/assets/projects/fachadaPosterior.png';
// import porton from '@/assets/projects/porton.png';
// import galpon from '@/assets/services/galpon.png';

interface RootState {
  projects: Project[]
}

export const useProjectStore = defineStore('useProjectStore', {
  state: (): RootState => ({
    projects: [
      {
        images: [
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        ],
        title: 'Super titulo de la muerte 0',
        description: [
          'Esta es una super descripcion de la muerte en la que tenemos un string largo',
          'Esta es una super descripcion de la muerte en la que tenemos un string corto',
        ],
        id: '23412'
      },
      {
        images: [
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        ],
        title: 'Super titulo de la muerte 1',
        description: [
          'Esta es una super descripcion de la muerte en la que tenemos un string largo',
          'Esta es una super descripcion de la muerte en la que tenemos un string corto',
        ],
        id: '234123'
      },
      {
        images: [
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        ],
        title: 'Super titulo de la muerte 2',
        description: [
          'Esta es una super descripcion de la muerte en la que tenemos un string largo',
          'Esta es una super descripcion de la muerte en la que tenemos un string corto',
        ],
        id: '23414'
      },
      {
        images: [
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
          'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        ],
        title: 'Super titulo de la muerte 3',
        description: [
          'Esta es una super descripcion de la muerte en la que tenemos un string largo',
          'Esta es una super descripcion de la muerte en la que tenemos un string corto',
        ],
        id: '23415'
      },
    ]
  }),

})

export default useProjectStore;
import { defineStore } from 'pinia';
import type { Project } from '@/typings/Project';

interface RootState {
  projects: Project[]
}

export const useProjectStore = defineStore('useProjectStore', {
  state: (): RootState => ({
    projects: [
      {
        image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        title: 'Super titulo de la muerte 0',
        description: 'Esta es una super descripcion de la muerte en la que tenemos un string largo',
        id: '23412'
      },
      {
        image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        title: 'Super titulo de la muerte 1',
        description: 'Esta es una super descripcion de la muerte en la que tenemos un string largo',
        id: '234123'
      },
      {
        image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        title: 'Super titulo de la muerte 2',
        description: 'Esta es una super descripcion de la muerte en la que tenemos un string largo',
        id: '23414'
      },
      {
        image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
        title: 'Super titulo de la muerte 3',
        description: 'Esta es una super descripcion de la muerte en la que tenemos un string largo',
        id: '23415'
      },
    ]
  }),

})

export default useProjectStore;
import { defineStore } from 'pinia';

import type { Project } from '@/typings/Project';

import sikaGalpon from '@/assets/projects/sika-galpon-42mts.jpg';
import sikaPorton from '@/assets/projects/sika-fachada-principal.jpg';
import sikaFachada from '@/assets/projects/sika-secondary.jpg';
import sikaComedor from '@/assets/projects/sika-comedor.jpg';
import sikaEscalera from '@/assets/projects/sika-escaleras.jpg';
import sikaGalponFuera from '@/assets/projects/sika-galpon-fuera.jpg';
import sikaBodegaAfuera from '@/assets/projects/sika-bodega-fuera.jpg';
import sikaBodegaDentro from '@/assets/projects/sika-bodega-dentro.jpg';

import maquitaTransformador from '@/assets/projects/maquita-transformador.jpg';
import maquitaEdificio from '@/assets/projects/mcch-maquita-edificio.jpg';
import maquitaPrincipal from '@/assets/projects/mcch-maquita.jpg';
import maquitaComedor from '@/assets/projects/mcch-maquita-comdor.jpg';
import maquitaCasaGuardia from '@/assets/projects/mcch-maquita-casa-guardia.jpg';
import maquitaClasificadora from '@/assets/projects/mcch-clasificadora.jpg';

import fachadaPrincipal from '@/assets/projects/lago-capeira-frontal.png';
import fachadaLateral from '@/assets/projects/lago-capeira-lateral.jpg';
import fachadaLado from '@/assets/projects/lago-capeira-lado.jpg';
import fachadaDentro from '@/assets/projects/lago-capeira-dentro.jpg';
import fachadaPuerta from '@/assets/projects/lago-capeira-puerta.jpg';
import fachadaRocas from '@/assets/projects/lago-capeira-rocas.jpg';

import olmaryEscalera from '@/assets/projects/olmary-escalera.jpg';
import olmaryPrincipal from '@/assets/projects/olmary-principal.jpg';
import olmaryMostrador from '@/assets/projects/olmary-mostrador.jpg';
import olmaryPasillo from '@/assets/projects/olmary-pasillo.jpg';

import implasticGalpon from '@/assets/projects/implastic-galpon.jpg'
import implasticGalponDentro from '@/assets/projects/implastic-galpon-dentro.jpg'

interface RootState {
  projects: Project[],
}

export const useProjectStore = defineStore('useProjectStore', {
  state: (): RootState => ({
    projects: [
      {
        images: [
          sikaPorton,
          sikaFachada,
          sikaGalpon,
          sikaComedor,
          sikaEscalera,
          sikaBodegaAfuera,
          sikaBodegaDentro,
          sikaGalponFuera
        ],
        title: 'Sika',
        description: [
          'Remodelacion de fachada y oficina.',
        ],
        id: '1-sika',
        location: 'Duran, Guayas, Ecuador'
      },
      {
        images: [
          maquitaEdificio,
          maquitaCasaGuardia,
          maquitaClasificadora,
          maquitaComedor,
          maquitaPrincipal,
          maquitaTransformador,
        ],
        title: 'Construccion de oficina y planta',
        description: [
          'Oficinas administrativa, calles, interiores, estacionamientos, cuarto de transformador, bodega, area de secado, galpon calsificador, comedor',
        ],
        id: '1-galpon',
        location: 'Prosperina, Guayas, Ecuador'
      },
      {
        images: [
          fachadaLado,
          fachadaPrincipal,
          fachadaLateral,
          fachadaPuerta,
          fachadaDentro,
          fachadaRocas
        ],
        title: 'Vivienda lago de Capeira',
        description: [
          'Vivienda Unifamiliar con canal de drenaje de aguas lluvias sectorial',
        ],
        id: '1-capeira',
        location: 'Km. 26 via Daule, Guayas, Ecuador'
      },
      {
        images: [
          olmaryPrincipal,
          olmaryMostrador,
          olmaryPasillo,
          olmaryEscalera
        ],
        title: 'Edificio Olmary',
        description: [
          'Edifico de tres pisos para comercio y bodega.',
        ],
        id: '1-edificio',
        location: 'Centro de Guayaquil, Guayas, Ecuador'
      },
      {
        images: [
          implasticGalpon,
          implasticGalponDentro
        ],
        title: 'Implastic',
        description: [
          'Galpon de 32 mts., planta industrial fabricacion de plasticos.',
        ],
        id: 'implastic',
        location: 'Km. 26 via Daule, Guayas, Ecuador'
      },
    ],
  }),

})

export default useProjectStore;
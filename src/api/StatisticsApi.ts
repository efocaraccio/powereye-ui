import { BaseApi } from "./BaseApi";


export class StatisticsApi extends BaseApi {

    constructor() {
        super("/dashboard/estadisticas");
    }

    async getPromedioVistasDiarias (filtro: Filtro) {
      return await this.apiPost('/promedio',filtro)
    }

    async getPersonasDetuvieron (filtro: Filtro) {
        return await this.apiPost('/personasDetuvieron',filtro)
    }

    async getPersonasQueIngresaron (filtro: Filtro) {
        return await this.apiPost('/personasIngresaron',filtro)
    }

    async getTortaSexo (filtro: Filtro) {
        return await this.apiPost('/graficoTortaSexo',filtro)
    }

    async getTortaRangoEtario (filtro: Filtro) {
        return await this.apiPost('/graficoTortaRangoEtario',filtro)
    }

    async getLineaImpacto (filtro: Filtro) {
        return await this.apiPost('/graficoLineaImpacto',filtro)
    }

}

export interface Filtro {
    fechaInicio: string;
    fechaFin: string;
    producto?: number;
    sexo?: Sexo;
    rangoEtario?: RangoEtario;
  }

  type RangoEtario = 'rango0025' | 'rango2540' | 'rango4060' | 'rango60up';
  type Sexo = 'M' | 'F';
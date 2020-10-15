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



}

interface Filtro {
    fechaInicio: String;
    fechaFin: String;
  }
import { BaseApi } from "./BaseApi";


export class PriorityApi extends BaseApi {

    constructor() {
        super("/configuracionImpacto");
    }

    async postPriority (body: Body) {
      return await this.apiPost('/guardar',body)
    }

    async getConfig () {
      return await this.apiPost('/get', 0)
    }
   
}

export interface Body {
  prioridadRangoEtario: number,

  prioridadSexo: number,
  prioridadCantVistas: number,
  prioridadExpresion: number,
  valorSexo:String,

  valorRangoEtario:String,

  valorExpresion:number
    /**todo lo del JSON */
  }

  type RangoEtario = 'rango0025' | 'rango2540' | 'rango4060' | 'rango60up';
  type Sexo = 'M' | 'F';
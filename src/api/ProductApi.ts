import { BaseApi } from "./BaseApi";


export class ProductApi extends BaseApi {

    constructor() {
        super("/dashboard/producto");
    }

    async getProducts (): Promise<Array<{id: string,name: string}>> {
        return await this.apiGet( `/verProductos` )
    }

    async createProduct (product: NewProduct) {
      return await this.apiPost('/crear',product)
    }
}

interface NewProduct {
  nombre: String;
  prioridad: number;
}
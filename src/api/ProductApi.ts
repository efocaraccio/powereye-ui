import { BaseApi } from "./BaseApi";


export class ProductApi extends BaseApi {

    constructor() {
        super("/dashboard/producto");
    }

    /*async getProducts (): Promise<Array<{id: string,name: string}>> {
        return await this.apiGet( `/verProductos` )
    }*/

    async editProduct (product: Product) {
      return await this.apiPost('/editar',product)
    }

    async createProduct (product: NewProduct) {
      return await this.apiPost('/crear',product)
    }

    async deleteProduct (product: Product) {
      return await this.apiPost('/eliminar',product)
    }

    async getProducts () {
      return await this.apiPost('/verProductos', 0)
    }

    async asingProductToShowcase(product: ProductWindow) {
      return await this.apiPost('/asignar', product)
    }

    async desasignarDeVidriera(product: ProductWindow) {
      return await this.apiPost('/sacarDeVidriera', product)
    }
}

interface NewProduct {
  nombre: String;
  prioridad: number;
}

interface Product {
  id: number;
  nombre: String;
  prioridad?: number;
  imagen?: String;
}

interface ProductWindow {
  id: number;
  nombre?: String;
  idZonaVidriera: number;
}

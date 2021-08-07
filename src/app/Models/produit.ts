import { stock } from './stock';

export class produit {
   Id: number;
   categorieId: number;
   marqueId: number;
   libelleProd: string;
   prix: number;
   photo: string;
   description: string;
   stock: stock

}

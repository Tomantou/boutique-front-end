import { stock } from './stock';

export class ProduitStock {
  static beginTransaction(arg0: { isolationLevel: any; }) {
    throw new Error('Method not implemented.');
  }
  Id: number;
  stockObject: stock;
  libelleProd: string;
  quantity: number;
  stock: number;
  enStock: boolean;

  constructor(
    Id: number,
    libelleProd: string,
    quantity: number,
    stock: number,
    enStock: boolean,
    stockObject: stock
  ) {
    this.Id = Id;
    this.libelleProd = libelleProd;
    this.quantity = quantity;
    this.stock = stock;
    this.enStock = enStock;
    this.stockObject = stockObject;
  }
}
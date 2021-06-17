export class ProduitStock {
  Id: number;
  libelleProd: string;
  quantity: number;
  stock: number;
  enStock: boolean;

  constructor(
    Id: number,
    libelleProd: string,
    quantity: number,
    stock: number,
    enStock: boolean
  ) {
    this.Id = Id;
    this.libelleProd = libelleProd;
    this.quantity = quantity;
    this.stock = stock;
    this.enStock = enStock;
  }
}
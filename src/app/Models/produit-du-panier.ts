export class ProduitDuPanier {
  Id: number;
  panierId: number;
  libelleProd: string;
  prix: number;
  quantity: number;
  photo: string;

  constructor(
    Id: number,
    panierId: number,
    libelleProd: string,
    prix: number,
    quantity: number,
    photo: string
  ) {
    this.Id = Id;
    this.panierId = panierId;
    this.libelleProd = libelleProd;
    this.prix = prix;
    this.quantity = quantity;
    this.photo = photo;
  }
}
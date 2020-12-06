export class ProduitDuPanier {
   Id: number;
   panierId: number;
   libelleProd: string;
   prix: number;
   photo: string;

   constructor(Id: number, panierId: number, libelleProd: string, prix: number, photo: string) {
      this.Id = Id;
      this.panierId = panierId;
      this.libelleProd = libelleProd;
      this.prix = prix;
      this.photo = photo;
   }
}
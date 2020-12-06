export class ProduitIdDuPanier {
   Id: number;
   productId: number;
   userId: string;
   quantity: number;

   constructor(productId: number, userId: string, quantity: number) {
      this.productId = productId;
      this.userId = userId;
      this.quantity = quantity;
   }
}

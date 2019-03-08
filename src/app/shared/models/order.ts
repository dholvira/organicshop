// adding class because we need to add implementation not just declaration. One should use interface if we did'nt have any implementation because they are light weight and only used  by typescript compiler when the code is converted to javascript one won't have any javascript code for interfaces  
import { ShoppingCart } from './shopping-cart';
export class Order{ 
  datePlaced: number;
  items: any[];

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart){
      this.datePlaced = new Date().getTime();

       this.items = shoppingCart.items.map(i => {
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })
  }
}
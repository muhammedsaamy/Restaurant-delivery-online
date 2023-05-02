import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  quantity=1;

constructor(private location: Location){

}




goBack(){
  this.location.back();
}

  // incrementQuantity(){
  //   this.quantity++;
  // }

  // decrementQuantity(){
  //   if(this.quantity>1){
  //     this.quantity--;
  //   }
  // }








  items:{id:number , name:string , description:string , imgUrl:string , price:number , quantity:number , totalPrice:number}[] = [];
  user:any ;
  basketitems:any = []

    calculateTotalPrice(item:any)
    {
      item.totalPrice = item.price * item.quantity
    }

    calculateBasketTotal() {
      let totalPrice = 0;
      for (let item of this.basketitems) {
        this.calculateTotalPrice(item);
        totalPrice += item.totalPrice;
      }
      return totalPrice;
    }

  ngOnInit(): void {
    const BasketItems = localStorage.getItem('BasketItems');
    if (BasketItems) {
      this.items = JSON.parse(BasketItems);
      console.log(this.items);
    }

    const UserData = localStorage.getItem('UserData');
    if (UserData) {
      this.user = JSON.parse(UserData);
      console.log(this.user);
    }
    this.basketitems = this.items.map(item => ({...item, quantity:0 , totalPrice: 0}));

  }





  


}

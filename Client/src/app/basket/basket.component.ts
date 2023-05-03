import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  quantity=1;
  alert:any;
  items:{id:number , name:string , description:string , imgUrl:string , price:number , quantity:number , totalPrice:number}[] = [];
  user:any ;
  basketitems:any = []

constructor(private location: Location, private router:Router){

}




goBack(){
  this.location.back();
}

  incrementQuantity(item:any){
    item.quantity++;
  }

  decrementQuantity(item : any){
    if(item.quantity>1){
      item.quantity--;
    }
  }



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
    this.basketitems = this.items.map(item => ({...item, quantity:1 , totalPrice: 0}));

  }

  onCheckout(){
    this.router.navigateByUrl('/checkout')
  }

  removeItemFromBasket(item:any)
  {
    this.alert = confirm("Are you sure?")

    if(this.alert){
      const index = this.basketitems.findIndex((i:any) => i.id === item.id);
      if (index > -1) {
        this.basketitems.splice(index, 1);
    }
    localStorage.setItem('BasketItems', JSON.stringify(this.basketitems));
    }
}





}

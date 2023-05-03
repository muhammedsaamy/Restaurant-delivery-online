import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.scss']
})
export class CheckoutOrderComponent implements OnInit{

  items:{id:number , name:string , description:string , imgUrl:string , price:number , quantity:number , totalPrice:number}[] = [];
  user:any ;
  basketitems:any = []


  ngOnInit(): void {

    const UserData = localStorage.getItem('UserData');
    if (UserData) {
      this.user = JSON.parse(UserData);
      console.log(this.user);
    }
    this.basketitems = this.items.map(item => ({...item, quantity:1 , totalPrice: 0}));

  }


}

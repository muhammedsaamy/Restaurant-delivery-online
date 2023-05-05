import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {
  itemsList: any[] = [];
  id:number=0;
  selectedItems: {id:number , name:string , description:string , imgUrl:string , price:number}[] = [];

  constructor(private itemsService:ItemsService, private router:Router, private activatedRoute:ActivatedRoute, private location:Location) {

  }
  ngOnInit(): void {
    this.getMenuByIdFromUrl()
  }

  getMenuByIdFromUrl(){
    this.id=+this.activatedRoute.snapshot.paramMap.get('id')!;
    this.itemsService.getitems(this.id).subscribe({
      next:(res)=>{
        this.itemsList = res.menuItem.map((item: any) => {
          item.checked = this.selectedItems.findIndex(i => i.id === item.id) > -1;
          return item;
        });
        // console.log(res)
      }
    });
    // console.log(this.id);
    const storedData = localStorage.getItem('BasketItems');
    if (storedData) {
      this.selectedItems = JSON.parse(storedData);
      this.itemsList.forEach((item: any) => {
        item.checked = this.selectedItems.findIndex(i => i.id === item.id) > -1;
      });
    }
  }

  goBack(){
    // const storedData = localStorage.getItem('BasketItems');

    // if(storedData){
    //   if( confirm('If you go back the selected items will be removed ..')){
    //     this.location.back();
    //     localStorage.removeItem('BasketItems');
    //    }
    // } else {this.location.back();}

    this.location.back();

  }



  updateSelectedItems(menu: {id:number , name:string , description:string , imgUrl:string , price:number}, event: any) {
    const isChecked = event.target.checked;
    const id = menu.id;

    if (isChecked) {
      this.selectedItems.push(menu);
    } else {
      const index = this.selectedItems.findIndex(i => i.id === id);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      }
    }
    // console.log(this.selectedItems);

  }


  SaveInLocalStorage(){
    localStorage.setItem('BasketItems', JSON.stringify(this.selectedItems));
  }
















  // getitems(){
  //   this.itemsService.getitems(this.id).subscribe({
  //     next:(res)=>{
  //       this.itemsList = res.menuItem;
  //       console.log(res)
  //     }
  //   });
  // }
}

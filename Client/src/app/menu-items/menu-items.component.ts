import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {
  itemsList: any[] = [];
  id:number=0;

  constructor(private itemsService:ItemsService, private router:Router, private activatedRoute:ActivatedRoute) {

  }
  ngOnInit(): void {
    // this.getitems();
    this.getIdFromUrl()
  }

  getIdFromUrl(){
    this.id=+this.activatedRoute.snapshot.paramMap.get('id')!;
    this.itemsService.getitems(this.id).subscribe({
      next:(res)=>{
        this.itemsList = res.menuItem;
        console.log(res)
      }
    });
    console.log(this.id)
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

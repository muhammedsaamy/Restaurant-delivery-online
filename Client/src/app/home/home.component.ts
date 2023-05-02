import { Component, OnInit } from '@angular/core';
import { ResaurantService } from './resaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  RestaurantsList: any[] = [];
  allRestaurantsList: any[] = [];

  id:number=1
  searchText:string =''
  searchCity : string = ''


  constructor(private restaurantService:ResaurantService, private activatedRoute:ActivatedRoute , private router:Router ) {

  }
  ngOnInit(): void {
    this.getRestaurant();
  }



  // navigatetoMenu(id:number){
  //   this.id =id;
  //   this.router.navigate(["/menu-items", id])
  // }

  getRestaurant(){
    this.restaurantService.getRestaurants().subscribe({
      next:(res)=>{
        this.allRestaurantsList =res;
        console.log(res)
        console.log(this.searchCity)
        this.RestaurantsList = res.filter(
          (x :any)  => {
            // any can be an interface from return data
            return x.restaurantName.toLowerCase().includes(this.searchText)
            && x.city.toLowerCase().includes(this.searchCity);
          }
        )
      },
      error:(error) => {console.log(error)},
      complete:()=> {
        //  (x:any) =>  this.searchCity = this.RestaurantsLis.city;

        }
    });
  }

   OnSearch(){
   this.getRestaurant();

  // this.RestaurantsList = this.RestaurantsList.filter(
  //   x => {
  //     return x.restaurantName.toLowerCase().includes(this.searchText);
  //   }

  // )
  console.log(this.searchText)
}



}

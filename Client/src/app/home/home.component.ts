import { Component, OnInit } from '@angular/core';
import { ResaurantService } from './resaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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


  constructor(private restaurantService:ResaurantService, private activatedRoute:ActivatedRoute , private router:Router, private spinner: NgxSpinnerService) {

  }



  ngOnInit(): void {
    this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);

    this.getRestaurant();
  }

  getRestaurant(){
    this.restaurantService.getRestaurants().subscribe({
      next:(res)=>{
        this.allRestaurantsList =res;
        console.log(res)
        console.log(this.searchCity)
        this.RestaurantsList = res.filter(
          (x :any)  => {
            // any we can replace it by an interface from return data
            return x.restaurantName.toLowerCase().includes(this.searchText.toLocaleLowerCase())
            && x.city.toLowerCase().includes(this.searchCity.toLocaleLowerCase());
          }
        )
      },
      error:(error) => {console.log(error)},
      complete:()=> {this.spinner.hide();}
    });
  }


  goToMenu(restaurant: any) {
    const storedData = localStorage.getItem('BasketItems');

    if (storedData) {
      const storedDataToCheck = JSON.parse(storedData);
      console.log(storedDataToCheck)
      if (storedDataToCheck[0].menuId === restaurant.id) {
        this.router.navigateByUrl('/items/' + restaurant.id);
      } else {
        if (confirm('If you click "Ok" the selected items will be removed..')) {
          localStorage.removeItem('BasketItems');
          this.router.navigateByUrl('/items/' + restaurant.id);
        }
      }
    } else {
      this.router.navigateByUrl('/items/' + restaurant.id);
    }

    console.log(storedData);
  }

   OnSearch(){
   this.getRestaurant();
  // console.log(this.searchText)
}
}

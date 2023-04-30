using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Restaurant_delivery_online.Controllers
{
    public class RestaurantController : BaseApiController
    {
        private readonly IRestaurantRepository _restaurantRepository;

        public RestaurantController(IRestaurantRepository restaurantRepository)
        {
            this._restaurantRepository = restaurantRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Restaurant>>> GetRestaurants()
        {
            return Ok(await _restaurantRepository.GetAllRestaurantsAsync());
        }
    }
}

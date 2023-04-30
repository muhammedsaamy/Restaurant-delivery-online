using Core.DTOs;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class RestaurantRepository : IRestaurantRepository
    {
        private readonly RestaurantContext _context;

        public RestaurantRepository(RestaurantContext context)
        {
            this._context = context;
        }

        public async Task<IReadOnlyList<RestaurantDto>> GetAllRestaurantsAsync()
        {
            List<RestaurantDto> restaurantToShowDtos = new List<RestaurantDto>();

            var restaurants = await _context.restaurants.ToListAsync();

            foreach (var restaurant in restaurants)
            {

                RestaurantDto restaurantDto = new RestaurantDto()
                {
                  Id = restaurant.Id,
                  City = restaurant.City,
                  RestaurantDescription = restaurant.RestaurantDescription,
                  RestaurantImage = restaurant.RestaurantImage,
                  RestaurantName = restaurant.RestaurantName
                };
                restaurantToShowDtos.Add(restaurantDto);
            }

            return restaurantToShowDtos;
        }
    }
}

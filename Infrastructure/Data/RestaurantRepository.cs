using AutoMapper;
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
        private readonly IMapper _mapper;

        public RestaurantRepository(RestaurantContext context, IMapper mapper)
        {
            this._context = context;
            this._mapper = mapper;
        }

        public async Task<IReadOnlyList<RestaurantDto>> GetAllRestaurantsAsync()
        {
            List<RestaurantDto> restaurantToShowDtos = new List<RestaurantDto>();

            var restaurants = await _context.restaurants.ToListAsync();

            //foreach (var restaurant in restaurants)
            //{

            //    RestaurantDto restaurantDto = new RestaurantDto()
            //    {
            //        Id = restaurant.Id,
            //        City = restaurant.City,
            //        RestaurantDescription = restaurant.RestaurantDescription,
            //        RestaurantImage = restaurant.RestaurantImage,
            //        RestaurantName = restaurant.RestaurantName
            //    };


            //    restaurantToShowDtos.Add(restaurantDto);
            //}

            restaurantToShowDtos = _mapper.Map<List<Restaurant>, List<RestaurantDto>>(restaurants);


            return restaurantToShowDtos;
        }
    }
}

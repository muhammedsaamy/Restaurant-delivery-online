using AutoMapper;
using Core.DTOs;
using Core.Entities;

namespace Restaurant_delivery_online.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Restaurant, RestaurantDto>();
        }
    }
}

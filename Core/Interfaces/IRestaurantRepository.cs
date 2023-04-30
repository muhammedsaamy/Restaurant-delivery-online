﻿using Core.DTOs;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IRestaurantRepository
    {
        Task<IReadOnlyList<RestaurantDto>> GetAllRestaurantsAsync();
    }
}

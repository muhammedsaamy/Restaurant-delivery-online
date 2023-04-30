using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTOs
{
    public class RestaurantDto
    {
        public int Id { get; set; }
        public string RestaurantImage { get; set; }
        public string RestaurantName { get; set; }
        public string RestaurantDescription { get; set; }
        public string City { get; set; }
    }
}

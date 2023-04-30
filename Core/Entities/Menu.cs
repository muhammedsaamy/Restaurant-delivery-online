using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Menu
    {
        public int Id { get; set; }
        public int RestaurantId { get; set; }
        public ICollection<MenuItem> MenuItem { get; set; }= new HashSet<MenuItem>();
        //public Restaurant Restaurant { get; set; }
    }
}

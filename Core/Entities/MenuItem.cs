using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string MenuItemDescription { get; set; }
        public string MenuItemImage { get; set; }
        public string MenuItemTitle { get; set; }
        public decimal Price { get; set; }

        public int MenuId { get; set; }

    }
}

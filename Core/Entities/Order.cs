using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public decimal SubPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public ICollection<BasketItem> basketItems { get; set; } = new HashSet<BasketItem>();

    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public decimal SubPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public string UserPhone { get; set; }
        public User User { get; set; }
        public ICollection<BasketItem> Items { get; set; } = new HashSet<BasketItem>();

    }
}

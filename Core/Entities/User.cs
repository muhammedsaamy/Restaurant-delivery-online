﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string userPhone { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        //public virtual ICollection<Order> Orders { get; set; } = new HashSet<Order>();
    }
}

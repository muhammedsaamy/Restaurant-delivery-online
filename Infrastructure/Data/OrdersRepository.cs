using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class OrdersRepository : IOrdersRepository
    {
        private readonly RestaurantContext _context;

        public OrdersRepository(RestaurantContext context)
        {
            this._context = context;
        }

        public async Task<Order> AddOrderAsync(Order order)
        {

            //var basketitems = await _context.basketItems.Where(b => b.userPhone == userPhone).ToListAsync();

            _context.orders.Add(order);
            await _context.SaveChangesAsync();
            return order;
        }
    }
}

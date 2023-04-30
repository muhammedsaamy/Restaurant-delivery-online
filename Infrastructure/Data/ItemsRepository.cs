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
    public class ItemsRepository : IItemsRepository
    {
        private readonly RestaurantContext _context;

        public ItemsRepository(RestaurantContext context)
        {
            this._context = context;
        }

        public async Task<BasketItem> AddItemToBAsketAsync(MenuItem item)
        {
            var basketItem = _context.basketItems.Where(i => i.Id==item.Id).FirstOrDefault();
            if (basketItem != null) {await _context.basketItems.AddAsync(basketItem);}
            _context.SaveChanges();
            return basketItem;
        }

        public async Task<IReadOnlyList<MenuItem>> GetAllItemsAsync(int MenuId)
        {
            var items = await _context.menuItems.Where(item => item.MenuId == MenuId).ToListAsync();
            return items;
        }
    }
}

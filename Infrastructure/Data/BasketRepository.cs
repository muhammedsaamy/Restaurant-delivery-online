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
    public class BasketRepository : IBasketRepository
    {
        private readonly RestaurantContext _context;

        public BasketRepository(RestaurantContext context)
        {
            this._context = context;
        }

        public async Task<bool> DeleteItem(BasketItem basketItem)
        {
             _context.basketItems.Remove(basketItem);
            _context.SaveChangesAsync();
            return true;
        }

        public async Task<IReadOnlyList<BasketItem>> GetAllBasketItemAsync(int basketId)
        {
           var basketItems = await _context.basketItems.Where(b => b.Id == basketId).ToListAsync();

            return basketItems;
        }

        public async Task<User> GetUserAsync(string userPhone)
        {
            var user = await _context.Users.Where(u => u.Phone == userPhone).FirstOrDefaultAsync();
            return user;
        }
    }
}

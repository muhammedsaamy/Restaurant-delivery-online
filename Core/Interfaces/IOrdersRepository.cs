using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IOrdersRepository
    {
        //public Task<User> GetUserAsync();
        //public Task<IReadOnlyList<BasketItem>> GetAllBasketItemAsync();
        public Task<Order> PlaceOrderAsync(string userPhone, decimal price, string custPhone);

    }
}

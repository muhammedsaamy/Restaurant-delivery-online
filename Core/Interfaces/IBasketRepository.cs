using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IBasketRepository
    {
        //public Task<int> Createbasket();
        //public Task<Basket> AddItemToBasket(int basketId, int itemId, int priceId);
        //public Task<Basket> DeleteItemFromBasket(int basketId, int itemId);

        //Task<IReadOnlyList<BasketItem>> GetAllBasketAsync();
        public Task<User> GetUserAsync();
        public Task<IReadOnlyList<BasketItem>> GetAllBasketItemAsync();

        void DeleteItem(int itemId);
    }
}

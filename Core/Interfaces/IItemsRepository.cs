using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IItemsRepository
    {
        Task<IReadOnlyList<MenuItem>> GetAllItemsAsync();
        Task<MenuItem> AddItemToBAsketAsync(MenuItem item);
        //Task<User> AddUserAsync(User user);

    }
}

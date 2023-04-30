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
    public class MenuRepository : IMenuRepository
    {
        private readonly RestaurantContext _context;

        public MenuRepository(RestaurantContext context)
        {
            this._context = context;
        }

        public async Task<Menu> GetMenuByRestaurantIdAsync(int RestaurantId)
        {
            var menu = await _context.menus.Where(m => m.RestaurantId == RestaurantId)
                .Include(r => r.MenuItem)
                .FirstOrDefaultAsync();

            if (menu == null) return null;

            return menu;
        }
    }
}

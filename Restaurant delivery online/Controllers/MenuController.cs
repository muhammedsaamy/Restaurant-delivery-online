using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Restaurant_delivery_online.Controllers
{
    public class MenuController : BaseApiController
    {
        private readonly IMenuRepository _menuRepository;
        private readonly IUserRepository _userRepository;

        public MenuController(IMenuRepository menuRepository, IUserRepository userRepository)
        {
            this._menuRepository = menuRepository;
            this._userRepository = userRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Menu>> GetMenuByRestaurantId(int restaurantId)
        {
            var menu = await _menuRepository.GetMenuByRestaurantIdAsync(restaurantId);
            
            if(menu == null) return NotFound();

            return Ok(menu);
        }
    }
}

using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Restaurant_delivery_online.Controllers
{
    public class OrderController : BaseApiController
    {
        private readonly IOrdersRepository _ordersRepository;

        public OrderController(IOrdersRepository ordersRepository)
        {
            this._ordersRepository = ordersRepository;
        }

        [HttpPost]
        public async Task<Order> addOrder(Order order)
        {
            await _ordersRepository.AddOrderAsync(order);

            return order;
        }
    }
}

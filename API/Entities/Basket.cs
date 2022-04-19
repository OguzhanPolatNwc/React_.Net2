using System.Collections.Generic;
using System.Linq;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        // So, this will create a new list of items when we create item and it wont be null so wont give error 
        // The last one ( inside comment ) and below (the one not inside command line ) one are the same 

        // public List<BasketItem> Items { get; set; } = new List<BasketItem>(); 
        public List<BasketItem> Items { get; set; } = new();
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }
        // So, if have have item it will show quantity and if there is not item then it will add

        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new BasketItem{Product = product, Quantity = quantity});
            }

            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
            if (existingItem != null) existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            var item = Items.FirstOrDefault(item => item.ProductId == productId);
            if (item == null) return;           //If Item is equal null , then exists out from this method
            item.Quantity -= quantity;          //If there is Item then we recude it
            if (item.Quantity == 0) Items.Remove(item);
        }
    }
}
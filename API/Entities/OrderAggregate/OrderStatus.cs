namespace API.Entities.OrderAggregate
{
    public enum OrderStatus  //With Enum, instead of using an integer to represent a value,we can use a restricted values
    {
        Pending,
        PaymentReceived,
        PaymentFailed
    }
}

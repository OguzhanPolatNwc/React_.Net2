using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User : IdentityUser<int>  //We added int to match the types becuase UserAddress has " int " Id
    {
        public UserAddress Address { get; set; }
    }
}
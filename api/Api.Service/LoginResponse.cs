using Api.Common;

namespace Api.Service
{
    public class LoginResponse : IEntity
    {
        public LoginResponse(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
}
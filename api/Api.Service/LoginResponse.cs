namespace Api.Service
{
    public class LoginResponse
    {
        public LoginResponse(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
}
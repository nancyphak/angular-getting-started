namespace Api.Context
{
    using System.Data.Entity;
    using Api.Models;

    public class DbContext : System.Data.Entity.DbContext
    {
        public DbContext()
            : base("Default")
        {

        }
        public DbSet<Category> Categories { get; set; }
    }
}
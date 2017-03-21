namespace Api.Context.Models
{
    public class Category
    {
        public Category()
        {
        }
        public Category(int id, string name, string description, string type, string photo)
        {
            Id = id;
            Name = name;
            Description = description;
            Type = type;
            Photo = photo;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Photo { get; set; }

    }
}
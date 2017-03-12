using System;
using System.Runtime.Serialization;

namespace api.Models
{
    public class Category
    {
        public Category()
        {

        }

        public Category(int id, string name, string description, string type, string photo)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Type = type;
            this.Photo = photo;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
    }
}
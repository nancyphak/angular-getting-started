using System.Collections.Generic;
using System.Linq;
using Api.Context;
using api.Models;
namespace Api.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private DbContext _dbContext;

        public CategoryRepository()
        {
            this._dbContext = new DbContext();
        }

        public IList<Category> GetCategories()
        {
            return this._dbContext.Categories.ToList();
        }
        public Category CreateCategory(Category data)
        {
            this._dbContext.Categories.Add(data);
            this._dbContext.SaveChanges();
            return data;
        }
    }
}
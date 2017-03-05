namespace Api.Repositories
{
    using System.Collections.Generic;
    using System.Linq;
    using Api.Context;
    using Api.Models;

    public class CategoriesRepository : ICategoriesRepository
    {
        private readonly DbContext _dbContext;
        public CategoriesRepository()
        {
            _dbContext = new DbContext();
        }

        public IList<Category> GetCategories()
        {
            return _dbContext.Categories.ToList();
        }


        public Category CreateCategory(Category category)
        {
            _dbContext.Categories.Add(category);
            _dbContext.SaveChanges();
            return category;
        }
    }
}
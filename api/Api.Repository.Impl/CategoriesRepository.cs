namespace Api.Repository.Impl
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Api.Context;

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

        public Category GetCategoryByName(string name)
        {
            return _dbContext.Categories.FirstOrDefault(c => c.Name == name);
        }
    }
}
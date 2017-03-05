namespace Api.Services
{
    using System.Collections.Generic;
    using Api.Models;
    using Api.Repositories;

    public class CategoryService : ICategoryService
    {
        private readonly ICategoriesRepository _categoryRepository;

        public CategoryService()
        {
            this._categoryRepository = new CategoriesRepository();
        }

        public IList<Category> GetCategories()
        {
            return this._categoryRepository.GetCategories();
        }
    }
}
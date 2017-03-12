using Api.Repositories;

namespace Api.Services
{
    using System.Collections.Generic;
    using api.Models;

    public class CategoryService:ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService()
        {
            _categoryRepository = new CategoryRepository();
        }

        public IList<Category> GetCategories()
        {
            return this._categoryRepository.GetCategories();
        }

        public Category CreateCategory(Category data)
        {
            return this._categoryRepository.CreateCategory(data);
        }
    }
}
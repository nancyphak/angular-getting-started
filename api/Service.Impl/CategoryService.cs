namespace Api.Services
{
    using Context.Models;
    using Repository;
    using Repository.Iml;
    using System.Collections.Generic;

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




        public Category CreateCategory(Category category)
        {
            return this._categoryRepository.CreateCategory(category);
        }
    }
}
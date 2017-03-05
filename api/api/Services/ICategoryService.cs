namespace Api.Services
{
    using System.Collections.Generic;
    using Api.Models;

    interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
    }
}

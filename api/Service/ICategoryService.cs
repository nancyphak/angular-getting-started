namespace Api.Services
{
    using System.Collections.Generic;
    using Context.Models;
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
    }
}

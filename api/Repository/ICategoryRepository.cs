namespace Api.Repository
{
    using System.Collections.Generic;
    using Api.Context.Models;

    public interface ICategoriesRepository
    {
        IList<Category> GetCategories();

        Category CreateCategory(Category category);
    }
}

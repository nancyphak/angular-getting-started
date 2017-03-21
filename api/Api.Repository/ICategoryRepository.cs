namespace Api.Repository
{
    using System.Collections.Generic;
    using Context;

    public interface ICategoriesRepository
    {
        IList<Category> GetCategories();

        Category CreateCategory(Category category);
        Category GetCategoryByName(string name);
    }
}

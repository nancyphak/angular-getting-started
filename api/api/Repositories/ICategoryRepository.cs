using System.Collections.Generic;
using api.Models;

namespace Api.Repositories
{
    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category data);
    }
}

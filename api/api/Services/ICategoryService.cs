using System.Collections.Generic;
using api.Models;

namespace Api.Services
{
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category data);
    }
}

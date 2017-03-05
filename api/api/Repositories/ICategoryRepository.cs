namespace Api.Repositories
{
    using System.Collections.Generic;
    using Api.Models;

    interface ICategoriesRepository
    {
        IList<Category> GetCategories();
    }
}

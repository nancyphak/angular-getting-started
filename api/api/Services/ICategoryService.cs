namespace Api.Services
{
    using System;
    using System.Collections.Generic;
    using Api.Models;

    interface ICategoryService
    {
        IList<Category> GetCategories();
    }
}

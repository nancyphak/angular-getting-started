namespace Api.Service
{
    using System.Collections.Generic;
    using Api.Context;

    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
        LoginResponse Login(LoginRequest request);
    }
}

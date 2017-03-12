namespace api.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using api.Models;
    using Api.Services;

    [RoutePrefix("api/categories")]
    public class CategoriesController : ApiController
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController()
        {
            _categoryService = new CategoryService();
        }

        [Route("")]
        [HttpGet]
        public IList<Category> GetCategories()
        {
            return this._categoryService.GetCategories();
        }

        [Route("")]
        [HttpPost]
        public Category CreateCategory(Category data)
        {
            return this._categoryService.CreateCategory(data);
        }
    }
}

namespace Api.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Api.Models;
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
            return _categoryService.GetCategories();
        }
    }
}
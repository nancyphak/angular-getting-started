namespace Api.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Context;
    using Service;
    using Common;
    using Common.IoC;
    [RoutePrefix("api/categories")]
    public class CategoriesController : ApiController
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController()
        {
            _categoryService = IoCContainer.Resolve<ICategoryService>();
        }

        [Route("")]
        [HttpGet]
        //[ResponseWrapper]
        public IList<Category> GetCategories()
        {
            return _categoryService.GetCategories();
        }

        [Route("login")]
        [HttpPost]
        [ResponseWrapper]
        public LoginResponse Login(LoginRequest request)
        {
            return _categoryService.Login(request); ;
        }

        [Route("")]
        [HttpPost]
        [ResponseWrapper]
        public void CreateCategory(Category category)
        {
            _categoryService.CreateCategory(category);
        }
    }
}
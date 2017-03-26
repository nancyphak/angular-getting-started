namespace Api.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using System;
    using Context;
    using Service;
    using Service.Impl;
    using Common;
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
        public Category CreateCategory(Category category)
        {
            return _categoryService.CreateCategory(category);
        }
    }
}
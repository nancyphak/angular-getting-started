namespace Api.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Api.Context;
    using Service.Impl;
    using Service;
    using System;
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
        public IResponseData<IList<Category>> GetCategories()
        {
            var response = new ResponseData<IList<Category>>();
            try
            {
                var categories = _categoryService.GetCategories();
                response.SetData(categories);
            }
            catch (Exception ex)
            {
                response.AddError("common.genericError");
            }
            return response;
        }

        [Route("login")]
        [HttpPost]
        public IResponseData<LoginResponse> Login(LoginRequest request)
        {
            var response = new ResponseData<LoginResponse>();
            try
            {
                var loginResponse = _categoryService.Login(request);
                response.SetData(loginResponse);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }

        [Route("")]
        [HttpPost]
        public ResponseData<Category> CreateCategory(Category category)
        {
            var response = new ResponseData<Category>();
            try
            {
                var createResponse = _categoryService.CreateCategory(category);
                response.SetData(createResponse);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }
    }
}
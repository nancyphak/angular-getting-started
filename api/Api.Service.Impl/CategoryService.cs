namespace Api.Service.Impl
{
    using System.Collections.Generic;
    using Api.Context;
    using Api.Repository;
    using Common;
    using Common.IoC;
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;


        public CategoryService()
        {
            this._categoryRepository = IoCContainer.Resolve<ICategoryRepository>();
        }

        public IList<Category> GetCategories()
        {
            return this._categoryRepository.GetCategories();
        }
        public Category CreateCategory(Category category)
        {
            ValidationCreateCategory(category);
            return this._categoryRepository.CreateCategory(category);
        }

        public LoginResponse Login(LoginRequest request)
        {
            ValidationLoginCategory(request);
            var category = this._categoryRepository.GetCategoryByName(request.Name);
            return new LoginResponse(category.Name);
        }
        public void ValidationLoginCategory(LoginRequest request)
        {
            var validation = new ValidationException();
            var category = this._categoryRepository.GetCategoryByName(request.Name);
            if (category == null)
            {
                validation.AddError("category.login.invalidCredential");
            }
            validation.ThrowIfError();

        }
        public void ValidationCreateCategory(Category category)
        {
            var validation = new ValidationException();
            if (string.IsNullOrEmpty(category.Name))
            {
                validation.AddError("category.create.nameIsRequired");
            }
            if (string.IsNullOrEmpty(category.Description))
            {
                validation.AddError("category.create.descriptionIsRequired");
            }
            validation.ThrowIfError();

        }
    }
}
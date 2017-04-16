namespace Api.Service.Impl
{
    using Api.Common.IoC;

    public class Bootstrap
    {
        public static void RegisterIoC()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}
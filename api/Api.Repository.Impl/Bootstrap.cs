namespace Api.Repository.Impl
{
    using Api.Common.IoC;
    public class Bootstrap
    {
        public static void RegisterIoC()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}
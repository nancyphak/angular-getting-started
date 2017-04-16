namespace Api.Common.IoC
{
    public class IoCContainer
    {
        private static IContainer Container;
        public static void SetContainer(IContainer container)
        {
            IoCContainer.Container = container;
        }
        public static IInstance Resolve<IInstance>() where IInstance : class
        {
            return IoCContainer.Container.Resolve<IInstance>();
        }
        public static void Register<IInstance, Instance>() where Instance : IInstance where IInstance : class
        {
            IoCContainer.Container.Register<IInstance, Instance>();
        }
    }
}

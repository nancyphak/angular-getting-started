namespace Api.Common
{
    public interface IContainer
    {
        IInstance Resolve<IInstance>() where IInstance : class;
        void Register<IInstance, Instance>() where Instance : IInstance where IInstance : class;
    }
}

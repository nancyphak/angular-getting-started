using Castle.MicroKernel.Registration;
using Castle.Windsor;

namespace Api.Common.IoC.Castle
{
    public class CastleContainer : IContainer
    {
        public IWindsorContainer Container;
        public CastleContainer()
        {
            this.Container = new WindsorContainer();
        }
        public void Register<IInstance, Instance>() where Instance : IInstance where IInstance : class
        {
            this.Container.Register(Component
                .For<IInstance>()
                .ImplementedBy<Instance>());
        }

        public IInstance Resolve<IInstance>() where IInstance : class
        {
            return this.Container.Resolve<IInstance>();
        }
    }
}

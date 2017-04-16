namespace Api.Common.IoC.Castle
{
    public class Bootstrap
    {
        public static void Init()
        {
            IoCContainer.SetContainer(new CastleContainer());
        }
    }
}

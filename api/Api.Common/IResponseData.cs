namespace Api.Common
{
    public interface IResponseData<TData>
    {
        void SetData(TData item);
        void AddError(string errorKey);
    }
}
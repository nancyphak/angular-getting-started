using System.Collections.Generic;

namespace Api.Common
{
    public interface IResponseData<TData> : IEntity
    {
        void SetData(TData item);
        void AddError(string errorKey);
        void AddErrors(IList<string> errors);
    }
}
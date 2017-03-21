namespace Api.Common
{
    using System;
    using System.Collections.Generic;

    public class ResponseData<TData> : IResponseData<TData>
    {
        public TData Data { get; set; }
        public IList<string> Errors { get; set; }

        public ResponseData()
        {
            this.Errors = new List<string>();
        }
        public void AddError(string errorKey)
        {
            this.Errors.Add(errorKey);
        }

        public void SetData(TData item)
        {
            this.Data = item;
        }

        public void AddErrors(IList<string> errors)
        {
            foreach (var error in errors)
            {
                this.AddError(error);
            }
        }
    }
}

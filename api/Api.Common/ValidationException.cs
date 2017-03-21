namespace Api.Common
{
    using System;
    using System.Collections.Generic;
    public class ValidationException : Exception
    {
        public IList<string> Errors { get; set; }
        public void AddError(string keyError)
        {
            this.Errors.Add(keyError);
        }
        public ValidationException(string keyError) : this()
        {
            this.AddError(keyError);
        }

        public ValidationException()
        {
            this.Errors = new List<string>();
        }

        public void ThrowIfError()
        {
            if (this.Errors.Count <= 0)
                return;
            throw this;
        }
    }
}

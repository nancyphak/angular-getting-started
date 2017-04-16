using Api.Common;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

namespace Api.Common
{
    public class ResponseWrapperAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            IResponseData<object> response = new ResponseData<object>();
            if (actionExecutedContext.Exception == null)
            {
                var actionResponse = (ObjectContent)actionExecutedContext.Response.Content;
                if (actionExecutedContext.Response.StatusCode != HttpStatusCode.NoContent)
                    response.SetData(actionResponse.Value);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.OK, response);
            }
            if (actionExecutedContext.Exception != null && actionExecutedContext.Exception is ValidationException)
            {

                response.AddErrors(((ValidationException)actionExecutedContext.Exception).Errors);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.BadRequest, response);
            }
        }
    }
}
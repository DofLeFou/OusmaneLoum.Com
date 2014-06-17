using OusmaneLoum.Com.Core;
using OusmaneLoum.Com.Mailers;
using OusmaneLoum.Com.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace OusmaneLoum.Com.Controllers.API
{
    public class ContactMeApiController : ApiControllerBase
    {
        private IMailer _mailer = new Mailer();

        public IMailer Mailer
        {
            get { return _mailer; }
            set { _mailer = value; }
        }

        [HttpPost]
        [Route("api/contactme/send")]
        public HttpResponseMessage Send(HttpRequestMessage request, [FromBody]OusmaneLoumContactMeModel ousmaneLoumContactMeModel)
        {
            return GetHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                ousmaneLoumContactMeModel.ToEmail = "ousmaneloum@gmail.com";
                Mailer.ContactMe(ousmaneLoumContactMeModel).Send();

                response = request.CreateResponse<String>(HttpStatusCode.OK, "Success");

                return response;
            });
        }
    }
}
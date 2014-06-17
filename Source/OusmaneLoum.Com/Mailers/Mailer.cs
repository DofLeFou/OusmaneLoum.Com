using Mvc.Mailer;
using OusmaneLoum.Com.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OusmaneLoum.Com.Mailers 
{
    public class Mailer : MailerBase, IMailer 
    {
        public Mailer()
        {
            MasterName = "_Layout";
        }

        public virtual MvcMailMessage ContactMe(OusmaneLoumContactMeModel ousmaneLoumContactMeModel)
        {
            ViewBag.Name = ousmaneLoumContactMeModel.Name;
            ViewBag.FromEmail = ousmaneLoumContactMeModel.FromEmail;
            ViewBag.Message = ousmaneLoumContactMeModel.Message;

            return Populate(x =>
            {
                x.Subject = " New Message Received from OusmaneLoum.Com";
                x.ViewName = "ContactMe";
                x.To.Add(ousmaneLoumContactMeModel.ToEmail);
            });
        }
    }
}
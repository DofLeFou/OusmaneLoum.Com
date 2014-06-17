using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mvc.Mailer;
using OusmaneLoum.Com.Models;

namespace OusmaneLoum.Com.Mailers
{
    public interface IMailer
    {
        MvcMailMessage ContactMe(OusmaneLoumContactMeModel ousmaneLoumContactMeModel);
    }
}

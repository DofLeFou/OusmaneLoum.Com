using System.Web;
using System.Web.Mvc;

namespace OusmaneLoum.Com
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
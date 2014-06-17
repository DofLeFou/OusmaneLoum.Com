using System.Web;
using System.Web.Optimization;

namespace OusmaneLoum.Com
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/KnockoutStuff").Include(
                        "~/Scripts/knockout-3.1.0.js",
                        "~/Scripts/knockout.mapping-latest.js",
                        "~/Scripts/knockout.validation.js"));

            bundles.Add(new ScriptBundle("~/bundles/KnockoutVM").Include(
                        "~/Binding/Models/OusmaneLoumModel.js",
                        "~/Binding/ViewModels/OusmaneLoumViewModel.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/SiteScripts").Include(
                       "~/Scripts/bootstrap.min.js",
                       "~/Scripts/jquery.knob.js",
                       "~/Scripts/jquery.magnific-popup.min.js",
                       "~/Scripts/jquery.scrollTo-1.4.3.1-min.js",
                       "~/Scripts/jquery.localscroll-1.2.7-min.js",
                       "~/Scripts/jquery.mixitup.min.js",
                       "~/Scripts/parsley.min.js",
                       "~/Scripts/App.js",
                       "~/Scripts/custom.js",
                       "~/Scripts/bingMap.js",
                        "~/Scripts/jquery-picture-min.js",
                       "~/Scripts/jquery.ui.bmap.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/BootStrap").Include("~/Content/bootstrap.min.css"));

            bundles.Add(new StyleBundle("~/Content/FontAwesome").Include("~/Content/font-awesome.min.css"));

            bundles.Add(new StyleBundle("~/Content/MagnificPopup").Include("~/Content/magnific-popup.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Aptech.Startup))]
namespace Aptech
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}

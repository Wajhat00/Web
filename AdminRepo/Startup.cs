using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AdminRepo.Startup))]
namespace AdminRepo
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}

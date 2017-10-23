using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using System.IO;
using System.Threading.Tasks;

namespace RateMyMenu.UI
{
  public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
          services.AddAuthentication(options => options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme);
          services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.Use(async (context, next) => {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = "Cookies",
                AutomaticAuthenticate = true,
                AutomaticChallenge = true
            });

            app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            {
                ClientId = "86557491610-ctf8v5mq900gjec01udkql1qpue5d0fq.apps.googleusercontent.com",
                ClientSecret = "oU5EMjmeOkEp7F7GfJ_OxqCM",
                Authority = "https://accounts.google.com",
                ResponseType = OpenIdConnectResponseType.Code,
                GetClaimsFromUserInfoEndpoint = true,
                SaveTokens = true,
                Events = new OpenIdConnectEvents()
                {
                  OnRedirectToIdentityProvider = (context) =>
                  {
                    if (context.Request.Path != "/account/external")
                    {
                      context.Response.Redirect("/account/login");
                      context.HandleResponse();
                    }

                    return Task.FromResult(0);
                  }
                }
            });

      app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
